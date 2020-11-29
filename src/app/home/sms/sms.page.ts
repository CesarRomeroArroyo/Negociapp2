import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  number1 = '';
  number2 = '';
  number3 = '';
  number4 = '';
  phone: string;
  remoteCode: number;
  registerData: any = {};
  images = [];
  files = [];
  user: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    this.generateCode();
  }

  generateCode() {
    const code = this.aleatorio(1000, 9999);
    this.remoteCode = code;
    Swal.fire('', 'Negociapp, su codigo de verificacion es: ' + code, 'success')
  }

  addNumber(n: string) {
    if (n === 'BCK') {
      if (this.number4 !== '') {
        this.number4 = '';
        return;
      }
      if (this.number3 !== '') {
        this.number3 = '';
        return;
      }
      if (this.number2 !== '') {
        this.number2 = '';
        return;
      }
      if (this.number1 !== '') {
        this.number1 = '';
        return;
      }

    } else {
      if (this.number1 === '') {
        this.number1 = n;
        return;
      }
      if (this.number2 === '') {
        this.number2 = n;
        return;
      }
      if (this.number3 === '') {
        this.number3 = n;
        return;
      }
      if (this.number4 === '') {
        this.number4 = n;
        this.validateSMS();
        return;
      }
    }
  }


  async validateSMS() {
    const code = this.number1 + this.number2 + this.number3 + this.number4;
    if (code === this.remoteCode.toString()) {
      localStorage.setItem('NEGOCIAPP_LOGGED', JSON.stringify(true));
      this.router.navigate([`/inicio`]);
      Swal.fire(
        '',
        'Registro completado',
        'success'
      );
    } else {
      Swal.fire(
        '',
        'El codigo ingresado es incorrecto',
        'error'
      )
    }
  }

  aleatorio(inferior, superior) {
    const resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return resAleatorio;
  }

}