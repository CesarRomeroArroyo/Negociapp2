import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { StateApp } from 'src/app/core/services/state.service';
import Swal from 'sweetalert2';
const { Camera } = Plugins;

import { User } from 'src/app/models/user.model';
import { Photo } from 'src/app/models/form.model';
@Component({
  selector: 'app-photos-modal',
  templateUrl: './photos-modal.component.html',
  styleUrls: ['./photos-modal.component.scss'],
})
export class PhotosModalComponent implements OnInit {

  public user: User;
  public photos: Photo[] = [];
  public file: any = null;
  @Input() public isRut = false;
  @Output() public showModal = new EventEmitter<boolean>();

  constructor(private state: StateApp) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    this.state.getObservable().subscribe(data => {
      if (data.photos) this.photos = data.photos;
      if (data.file) this.file = data.file;
    });
  }

  get title(): string {
    return this.isRut ? 'RUT' : 'Fotos';
  }

  public async takePic() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: '',
      dataUrl: image.dataUrl
    });
    this.state.setData({ photos: this.photos });
  }

  public deletePhoto(photo: Photo): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Tu foto se perdera!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.photos = this.photos.filter((photoArray) => {
          return photoArray !== photo;
        });
        this.state.setData({ photos: this.photos });
      }
    })
  }

  public onFileChange(e) {
    if (e.target.files.length > 0) {
      this.file = e.target.files[0];
      this.state.setData({ file: this.file });
    }
  }

  public deleteFile(): void {
    this.file = { name: '', path: '' };
    this.state.setData({ file: this.file });
  }

}
