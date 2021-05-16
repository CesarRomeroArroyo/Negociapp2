import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() uniqueid: string;
  @Input() cities: string[] = [];
  @Input() user: User;
  @Input() isOtherUser: boolean;
  @Output() updateUser: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm(this.user);
  }

  public initForm(data?: User): void {
    this.form = this.formBuilder.group({
      name: ['' || data?.name, Validators.required],
      city: ['' || data?.city, Validators.required],
      tel: ['' || data?.tel, Validators.required],
      email: ['' || data?.email, Validators.required],
    });
    if (this.uniqueid) {
      this.form.get('name').disable();
      this.form.get('city').disable();
      this.form.get('tel').disable();
      this.form.get('email').disable();
    }
  }

  public validateinput(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  public emitUserForm() {
    if (this.validators()) {
      this.updateUser.emit(this.form)
    }
  }

  private validators(): boolean {
    Object.values(this.form.controls).forEach(item => {
      if (item instanceof FormControl) {
        item.markAsTouched();
      }
    });
    return this.form.invalid ? false : true;
  }

  public goToWhatsapp(): string {
    if (this.uniqueid) {
      return `https://api.whatsapp.com/send?phone=+57${this.user.tel}`;
    }
  }

}
