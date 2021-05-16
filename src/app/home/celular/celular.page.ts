import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.page.html',
  styleUrls: ['./celular.page.scss'],
})
export class CelularPage implements OnInit {
  number:number;
  user: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    this.number = this.user.contact;
  }

  enviarCel() {
    this.user.contact = this.number;
    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.user));
    this.router.navigateByUrl('/home/sms');
  }

}
