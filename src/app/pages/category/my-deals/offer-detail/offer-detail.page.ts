import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { CategoryURL } from 'src/app/models/category.model';
import { DataForm } from 'src/app/models/form.model';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public index: number;
  public isUserRequest: boolean;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private router: Router
  ) {
    super();
  }

  public async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.index = parseInt(this.route.snapshot.paramMap.get('index'), 0);
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionBDFinalizate, this.uniqueid);
    this.item = dataForm[0];
    this.isUserRequest = this.user.uniqueid === this.item.userRequest ? true : false;
  }

  get thirdMessage(): string {
    switch (this.category) {
      case CategoryURL.Service: {
        return 'Detalles del Negocio';
      }
      case CategoryURL.Rent: {
        return 'Detalles del Negocio';
      }
      case CategoryURL.Shop: {
        return 'Detalles del Negocio';
      }
    }
  }

  public goToRate(): void {
    this.router.navigate([`/category/${this.category}/my-deals/rate/${this.uniqueid}/${this.index}`]);
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
