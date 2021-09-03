import { Component, Output, EventEmitter, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { FormsAbstract } from '@components/abstract/form.abstact';

import { FileManagerService } from '@core/services/file-manager.service';
import { UniqueService } from '@core/services/unique.service';
import { FirebaseService } from '@core/services/firebase.service';

import { Mider, User } from '@models/global/user.model';
import { COLLECTIONS_BD } from '@models/data-base/bd.models';
import { Path } from '@models/global/user.model';

import { StateApp } from '@core/services/state.service';

import { HomeFacade } from '@app/home/home.facade';
import { InicioFacade } from '@pages/inicio/inicio.facade';

import { SelectType } from '@app/models/home/select-type';
import { MiderFacade } from './mider.facade';


@Component({
  selector: 'app-mider',
  templateUrl: './mider.page.html',
  styleUrls: ['./mider.page.scss'],
})
export class MiderPage implements OnInit {

  public tab = 1;
  public categories: string[] = [];
  public file: File;
  public showModalCategories = false;
  public showModalPhotos = false;
  public specialties: SelectType[] = [];
  public mider: Mider;
  public form: FormGroup;
  public subscription: Subscription;
  public cities: SelectType[] = [];
  public invalid = false;
  public user: User;
  @Output() public showCategories = new EventEmitter<boolean>();

  constructor(
    private subject: StateApp,
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private storage: FileManagerService,
    private uniqueidService: UniqueService,
    private homeFacade: HomeFacade,
    private inicioFacede: InicioFacade,
    private miderFacade: MiderFacade
  ) { }

  async ngOnInit(): Promise<void> {
    this.specialties = await this.firebase.obtenerPromise(COLLECTIONS_BD.SPECIALTIES);
    this.cities = await this.firebase.obtenerPromise(COLLECTIONS_BD.CITIES);
  }

  async ionViewWillEnter(): Promise<void> {
    this.subject.setData({ categories: [] });
    this.user$.subscribe(user => {
      this.user = user;
      this.tabSelected(this.tab);
    });
    this.subscription = this.subject.getObservable().subscribe(data => {
      if (data.file) this.file = data.file;
    });
  }

  public ionViewDidLeave(): void {
    this.subscription.unsubscribe();
    this.subject.setData({ categories: [] });
  }

  get user$(): Observable<User> { return this.homeFacade.getUser$; }

  get categories$(): Observable<SelectType[]> {
    return this.inicioFacede.getCategories$.pipe(
      map(categories => {
        switch (this.tab) {
          case 1:
            return categories.categoriesServices
          case 2:
            return categories.categoriesShop
          case 3:
            return categories.categoriesRent
        }
      })
    )
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
      typesService: this.form.get('specialties').value,
      status: this.form.get('status').value,
      cities: this.form.get('cities').value
    }
  }

  public tabSelected(index: number): void {
    this.tab = index;
    this.subject.setData({ categories: [] });
    this.categories = [];
    switch (this.tab) {
      case 1:
        this.mider = this.user?.miders;
        this.initForm(this.mider);
        break;
      case 2:
        this.mider = this.user?.miderv;
        this.initForm(this.mider);
        break;
      case 3:
        this.mider = this.user?.midera;
        this.initForm(this.mider);
        break;
    }
  }

  private initForm(data?: Mider): void {
    this.form = this.formBuilder.group({
      status: [data?.status || false],
      specialties: [data?.typesService || []],
      cities: [data?.cities || []],
      categories: [data?.categories || []],
    });
    this.categories = data?.categories ? data.categories : [];
    this.subject.setData({ file: data?.rut });
  }

  public showModalPhotosModal(): void {
    if (this.form.get('status').value)
      this.showModalPhotos = true
  }

  public categoriesSelectedModal(event): void {
    this.categories = event;
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
    // tslint:disable-next-line: prefer-const
    let fileRut: Path = {
      name: '',
      path: '',
      url: ''
    };
    if (this.file.name !== '' && this.file.name !== this.mider.rut.name) {
      if (this.mider.rut.path.length > 0) {
        this.storage.deleteFilesFolder(this.mider.rut.path);
      }
      const uniqueid = this.uniqueidService.uniqueId();
      fileRut.name = this.file.name;
      fileRut.path = `${this.user.uniqueid}/RUT/${uniqueid}`;
      await this.storage.upload(this.file, fileRut.path);
      await this.storage.getUrlFileInfo(fileRut.path).then((url) => fileRut.url = url);
      this.saveData(fileRut);
    } else {
      this.saveData();
    }
  }

  public saveData(pathRut?: Path): void {
    let user: User;
    switch (this.tab) {
      case 1:
        const miders = {
          ...this.dataForm,
          rut: pathRut ? pathRut : this.mider.rut
        }
        user = {
          ...this.user,
          miders
        }
        console.log(user);
        this.miderFacade.updateMiders(miders, user);
        break;
      case 2:
        // Disparar accion para tienda
        const miderv = {
          ...this.dataForm,
          rut: pathRut ? pathRut : this.mider.rut
        }
        user = {
          ...this.user,
          miderv
        }
        this.miderFacade.updateMiderv(miderv, user);
        break;
      case 3:
        // Disparar accion para arriendo
        const midera = {
          ...this.dataForm,
          rut: pathRut ? pathRut : this.mider.rut
        }
        user = {
          ...this.user,
          midera
        }
        this.miderFacade.updateMidera(midera, user);
        break;
    }
  }

}
