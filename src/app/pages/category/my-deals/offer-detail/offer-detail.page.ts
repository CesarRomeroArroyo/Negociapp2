import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { FormsAbstract } from '@components/abstract/form.abstact';

import { FirebaseService } from '@core/services/firebase.service';

import { User } from '@models/global/user.model';
import { CategoryURL } from '@models/category.model';
import { DataForm } from '@models/form.model';

import { HomeFacade } from '@app/home/home.facade';
import { COLLECTIONS_BD } from '@models/data-base/bd.models';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public index: number;
  public isUserRequest: boolean;
  public isloading: boolean = false;
  public userRequest: User;
  public userOffer: User;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    private router: Router,
    private homeFacade: HomeFacade
  ) {
    super();
  }

  public async ngOnInit() {
    this.isloading = true;
    this.category = this.route.snapshot.paramMap.get('category');
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.index = parseInt(this.route.snapshot.paramMap.get('index'), 0);
    this.user$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.firebase.obtenerUniqueIdPromise(this.collectionBDFinalizate, this.uniqueid).then(async (result) => {
        const dataForm = result[0];
        this.item = dataForm;
        const userOffer = await this.firebase.obtenerUniqueIdPromise(COLLECTIONS_BD.USUARIO_APP, this.item?.offerit[0]?.user?.uniqueid);
        const resultUserRequest = await this.firebase.obtenerUniqueIdPromise(COLLECTIONS_BD.USUARIO_APP, this.item.userRequest);
        this.userOffer = userOffer[0];
        this.userRequest = resultUserRequest[0];
        this.isUserRequest = this.user.uniqueid === this.item.userRequest ? true : false;
        this.isloading = false;
      });
    });
  }

  get user$(): Observable<User> {
    return this.homeFacade.getUser$;
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
