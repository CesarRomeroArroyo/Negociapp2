import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.page.html',
  styleUrls: ['./celular.page.scss'],
})
export class CelularPage implements OnInit {

  public number: number;
  public user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    this.number = parseInt(this.user.tel, 0);
  }

  enviarCel() {
    this.user.tel = (this.number).toString();
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
    this.router.navigateByUrl('/home/sms');
  }

}
