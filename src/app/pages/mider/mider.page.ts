import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { Mider } from '../../models/user.model';
import { FileManagerService } from 'src/app/core/services/file-manager.service';
import { UniqueService } from 'src/app/core/services/unique.service';
import { CITIES, TYPES_SERVICE } from 'src/app/constans/constans-global';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mider',
  templateUrl: './mider.page.html',
  styleUrls: ['./mider.page.scss'],
})
export class MiderPage extends FormsAbstract implements OnInit {

  public tab = 1;
  public categories: string[] = [];
  public file;
  public showModalCategories = false;
  public showModalPhotos = false;
  public types = TYPES_SERVICE;
  public mider: Mider;
  public form: FormGroup;
  public subscription: Subscription;
  public cities = CITIES;
  @Output() public showCategories = new EventEmitter<boolean>();

  constructor(
    private state: StateApp,
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private storage: FileManagerService,
    private uniqueidService: UniqueService,
  ) {
    super();
  }

  public async ngOnInit() {
    const dataUser = await this.firebase.obtenerUniqueIdPromise('usuario-app', this.user.uniqueid);
    const user = dataUser[0];
    this.user = user;
    this.tabSelected(this.tab);
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
    this.subscription = this.state.getObservable().subscribe(data => {
      if (data.categories) this.categories = data.categories;
      if (data.file) this.file = data.file;
    });
  }

  public ionViewDidLeave(): void {
    this.subscription.unsubscribe();
    this.state.setData({ categories: [] });
  }

  get miderText(): string {
    switch (this.tab) {
      case 1:
        return 'MIDER-S'
      case 2:
        return 'MIDER-V'
      case 3:
        return 'MIDER-A'
    }
  }

  get miderSubtitle(): string {
    switch (this.tab) {
      case 1:
        return 'Miembro de la Red de Servicios'
      case 2:
        return 'Miembro de la Red de Ventas'
      case 3:
        return 'Miembro de la Red de Arriendos'
    }
  }

  get dataForm(): Mider {
    return {
      categories: this.categories,
      typesService: this.form.get('types').value,
      status: this.form.get('status').value,
      cities: this.form.get('cities').value
    }
  }

  public showModalPhotosModal(): void {
    if (this.form.get('status').value)
      this.showModalPhotos = true
  }

  public update(): void {
    switch (this.tab) {
      case 1:
        this.saveRUT();
        break;
      case 2:
        this.saveRUT();
        break;
      case 3:
        this.saveRUT();
        break;
    }
  }

  public async saveRUT(): Promise<void> {
    if (this.file.name !== '' && this.file.name !== this.mider.rut.name) {
      if (this.mider.rut.path.length > 0) await this.storage.deleteFilesFolder(this.mider.rut.path);
      const uniqueid = this.uniqueidService.uniqueId();
      this.mider.rut.name = this.file.name;
      this.mider.rut.path = `${this.user.uniqueid}/RUT/${uniqueid}`;
      await this.storage.upload(this.file, this.mider.rut.path);
      await this.storage.getUrlFileInfo(this.mider.rut.path).then((url) => this.mider.rut.url = url);
      this.saveData();
    } else {
      this.saveData();
    }
  }

  public saveData(): void {
    switch (this.tab) {
      case 1:
        this.user.miders = {
          ...this.dataForm,
          rut: this.mider.rut
        }
        break;
      case 2:
        this.user.miderv = {
          ...this.dataForm,
          rut: this.mider.rut
        }
        break;
      case 3:
        this.user.midera = {
          ...this.dataForm,
          rut: this.mider.rut
        }
        break;
    }
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
    this.firebase.actualizarDatos('usuario-app', this.user, this.user.id).then(() => {
      Swal.fire('Bien Hecho', 'Datos actualizados correctamente', 'success');
    });
  }

  public tabSelected(index: number): void {
    this.tab = index;
    switch (this.tab) {
      case 1:
        this.mider = this.user.miders;
        this.initForm(this.mider);
        break;
      case 2:
        this.mider = this.user.miderv;
        this.initForm(this.mider);
        break;
      case 3:
        this.mider = this.user.midera;
        this.initForm(this.mider);
        break;
    }
  }

  private initForm(data?: Mider): void {
    this.form = this.formBuilder.group({
      status: [data?.status || false],
      types: [data?.typesService || []],
      cities: [data?.cities || []]
    });
    this.state.setData({ categories: data.categories });
    this.state.setData({ file: data.rut });
  }

}
