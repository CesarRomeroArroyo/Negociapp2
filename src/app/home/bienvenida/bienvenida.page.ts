import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/global/user.model';
import { StatusUserLoggin } from '../entities/home.types';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  public user: User;
  public isLoading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    this.isLoading = this.user ? false : true;
  }

  get isUserNew(): boolean {
    const typeUser = this.route.snapshot.paramMap.get('status');
    return typeUser === StatusUserLoggin.LOGGED ? true : false;
  }

}
