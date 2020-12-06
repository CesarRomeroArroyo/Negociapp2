import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataForm, OfferUser } from 'src/app/models/form.model';
import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent extends FormsAbstract implements OnInit {

  @Input() item: DataForm;
  @Input() offer: OfferUser;
  @Input() isDeal: boolean;
  public isUserRequest: boolean;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.isUserRequest = this.user.uniqueid === this.item.userRequest ? true : false;
  }

  get days(): string {
    const day = this.offer.days;
    return day.toString() === '1' ? 'día' : 'días';
  }

  public gotoPerfilUserRequest(): void {
    if (this.isUserRequest) {
      this.router.navigate(['/perfil']);
    } else {
      this.router.navigate([`/perfil/${this.item.userRequest}`]);
    }
  }

  public gotoPerfilUserOffer(): void {
    if (this.isUserRequest) {
      this.router.navigate([`/perfil/${this.item.offerit[0].user.uniqueid}`]);
    } else {
      this.router.navigate([`/perfil`]);
    }
  }

}
