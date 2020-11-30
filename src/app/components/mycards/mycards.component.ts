import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { CollectionsBd, DataForm } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';
import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-mycards',
  templateUrl: './mycards.component.html',
  styleUrls: ['./mycards.component.scss'],
})
export class MycardsComponent extends FormsAbstract implements OnInit, OnDestroy {

  public list: DataForm[];
  public subscription: Subscription;

  @Input() public pathProposal: string;
  @Input() public pathEdit: string;
  @Input() public type: string;
  @Output() public tab = new EventEmitter<number>();

  constructor(
    private firebase: FirebaseService,
    private state: StateApp,
    private router: Router) {
    super();
  }

  ngOnInit() {
    this.getUser();
    this.getListUser();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public getUser(): void {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
  }

  public buttons(item): boolean {
    if (item.close?.toString().length > 0) {
      if (!item.close)
        return true;
    }
    if (item.cerrado?.toString().length > 0) {
      if (!item.cerrado)
        return true;
    }
  }
  public buttonToCalificar(item): boolean {
    if (item.close) {
      if (item.close && item.rate === 1)
        return true;
    }
    if (item.cerrado) {
      if (item.cerrado && item.rate === 1)
        return true;
    }
  }
  public buttonCheck(item): boolean {
    if (item.close) {
      if (item.close && item.rate === 2)
        return true;
    }
    if (item.cerrado) {
      if (item.cerrado && item.rate === 2)
        return true;
    }
  }

  public getListUser(): void {
    this.subscription = this.firebase.obtenerForObsevable(
      this.collectionDataBD,
      CollectionsBd.UserRequest,
      this.user.uniqueid).subscribe(data => this.list = data);
  }

  public selectOffer(item: DataForm): void { }

  public goToEdit(item: DataForm): void {
    if (item.offerit.length === 0) {
      this.router.navigate([`/category/${this.category}/form/${item.uniqueid}`]);
    } else {
      Swal.fire(
        '',
        'No es posible editar el servicio ya que ya contiene ofertas relacionadas',
        'error'
      );
    }

  }

  public goToDelete(item: any): void {
    Swal.fire({
      title: '',
      text: 'Esta seguro de eliminar el producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.value) {
        if (item.offerit.length === 0) {
          this.firebase.eliminarDatos(this.collectionDataBD, item.id);
          this.tab.emit(1);
        }
      }
    });
  }

  public goTocalificar(item: any): void {
    this.state.setData({ elementRate: item });
    this.router.navigate([`/ratePage/${this.type}`]);
  }

}
