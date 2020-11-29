import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  public uploadProgress: Observable<number>;
  public uploadURL: Observable<string>;
  public estado = new BehaviorSubject({});
  public fileReference: AngularFireStorageReference;
  constructor(
    private storage: AngularFireStorage,
    public loadingController: LoadingController) {
    // this.estado.next(true);
  }

  async upload(file, filepath): Promise<any> {
    // Get input file
    // const file = event.target.files[0];
    this.estado.next(true);
    const fileRef = this.storage.ref(filepath);
    const loading = await this.loadingController.create({
      message: 'Espere por favor, Cargando la Imagen...'
    });
    await loading.present();
    // Upload image
    const task = this.storage.upload(filepath, file);
    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();
    // Get notified when the download URL is available
    return task.snapshotChanges().pipe(
      finalize(() => {
        this.uploadURL = fileRef.getDownloadURL();
        this.estado.next(false);
        loading.dismiss();
      })
    ).toPromise();
  }

  deleteFilesFolder(path) {
    return this.storage.ref(path).delete();
  }

  getEstado() {
    return this.estado.asObservable();
  }

  uploadImageBase64(file: string, filepath): void {
    this.estado.next(true);
    this.fileReference = this.storage.ref(filepath);
    const image = 'data:image/jpg;base64,' + file;
    const task = this.storage.ref(filepath).putString(image, 'data_url');
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        // this.uploadURL = fileRef.getDownloadURL();
        this.estado.next(false);
      })
    ).subscribe();
  }

  getUrlFileInfo(path) {
    return this.storage.ref(path).getDownloadURL();
  }

}
