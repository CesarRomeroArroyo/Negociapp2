import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataForm, OfferUser } from 'src/app/models/form.model';
import { User } from 'src/app/models/user.model';
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
  public idUserOffer: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { super(); }

  ngOnInit() {
    this.idUserOffer = this.route.snapshot.paramMap.get('index');
  }

  get userOfferit(): OfferUser {
    return this.item.offerit[this.idUserOffer];
  }

  get isUserRequest(): boolean {
    return this.user.uniqueid === this.item.userRequest ? true : false;
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
      this.router.navigate([`/perfil/${this.item.offerit[this.idUserOffer].user.uniqueid}`]);
    } else {
      this.router.navigate([`/perfil`]);
    }
  }

}
