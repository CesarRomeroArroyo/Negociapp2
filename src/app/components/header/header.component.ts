import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { User } from 'src/app/models/global/user.model';

import { FormsAbstract } from '../abstract/form.abstact';
import { LOCALSTORAGE } from '../../constans/localStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends FormsAbstract implements OnInit {

  public user: User;

  @Input() public text = 'NegociApp';
  @Input() public secondMessage = '';
  @Input() public thirdMessage = '';
  @Input() public colorHeader = 'var(--ion-color-light)';
  @Input() public colorText = 'var(--ion-color-secondary)';
  @Input() public colorBack = 'var(--ion-color-primary)';
  @Input() public colorBorderIcon = '2px solid var(--ion-color-secondary)';
  @Input() public colorIconBlack = true;
  @Input() public path = '';
  @Input() close = false;
  @Input() menu = false;
  @Output() emitClose = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private menuController: MenuController,
    private firebaseService: FirebaseService
  ) { super(); }

  ngOnInit() {
    this.fetchUser();
  }

  get userImg(): string {
    return this.user.photoUrl.length > 0 ? this.user.photoUrl : 'assets/img/user_perfilxxxhdpi.png';
  }

  public goToBack(): void {
    this.path.length > 0 ? this.router.navigate([this.path]) : window.history.back();
  }

  public closeModal(): void {
    this.emitClose.emit(false);
  }

  public openMenu(): void {
    this.menuController.open('content')
  }

  public async fetchUser(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem(LOCALSTORAGE.USER));
    const users: User[] = await this.firebaseService.obtenerPromise('usuario-app');
    const dataUser = users.filter(x => x.uniqueid === this.user.uniqueid)
    this.user = dataUser[0];
    localStorage.setItem(LOCALSTORAGE.USER, JSON.stringify(this.user));
  }

}
