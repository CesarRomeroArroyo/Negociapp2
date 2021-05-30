import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SmsService } from '../../core/services/sms.service';
import { User } from 'src/app/models/user.model';
import { LOCALSTORAGE } from '../../constans/localStorage';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {

  public number1: string = '';
  public number2: string = '';
  public number3: string = '';
  public number4: string = '';
  public remoteCode: number;
  public user: User;

  constructor(
    private router: Router,
    private smsService: SmsService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('NEGOCIAPP_USER'));
    this.generateCode();
  }

  public addNumber(n: string): void {
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

  public generateCode(): void {
    const code = this.aleatorio(1000, 9999);
    this.remoteCode = code;
    console.log(this.remoteCode);
    this.smsService.sendSms(`Negociapp, su codigo de verificacion es: ${code}`, this.user.tel);
  }

  public async validateSMS() {
    const code = this.number1 + this.number2 + this.number3 + this.number4;
    if (code === this.remoteCode.toString()) {
      localStorage.setItem(LOCALSTORAGE.LOGGED, JSON.stringify(true));
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

  private aleatorio(inferior, superior) {
    const resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return resAleatorio;
  }

}
