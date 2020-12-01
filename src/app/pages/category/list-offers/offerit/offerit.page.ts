import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FormsAbstract } from 'src/app/components/abstract/form.abstact';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { DataForm, OfferUser } from 'src/app/models/form.model';

@Component({
  selector: 'app-offerit',
  templateUrl: './offerit.page.html',
  styleUrls: ['./offerit.page.scss'],
})
export class OfferitPage extends FormsAbstract implements OnInit {

  public item: DataForm;
  public form: FormGroup;

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private fromBuilder: FormBuilder,
  ) {
    super();
  }

  public async ngOnInit() {
    this.initForm();
    this.uniqueid = this.route.snapshot.paramMap.get('uniqueid');
    this.category = this.route.snapshot.paramMap.get('category');
    const dataForm = await this.firebase.obtenerUniqueIdPromise(this.collectionDataBD, this.uniqueid);
    this.item = dataForm[0];
  }

  public validFields(param: string): boolean {
    return this.form.get(param).invalid && this.form.get(param).touched;
  }

  public initForm(data?: OfferUser): void {
    this.form = this.fromBuilder.group({
      valueMask: ['' || data?.value, Validators.required],
      days: ['' || data?.days, Validators.required],
      conditions: ['' || data?.conditions],
    });
  }

  public save(): void { }

}
