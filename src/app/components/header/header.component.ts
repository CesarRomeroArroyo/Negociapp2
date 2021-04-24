import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { FormsAbstract } from '../abstract/form.abstact';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends FormsAbstract implements OnInit {

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
    private router: Router
  ) { super(); }

  ngOnInit() { }

  public goToBack(): void {
    this.path.length > 0 ? this.router.navigate([this.path]) : window.history.back();
  }

  public closeModal(): void {
    this.emitClose.emit(false);
  }

}
