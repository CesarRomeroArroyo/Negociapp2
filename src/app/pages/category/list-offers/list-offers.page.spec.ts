import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOffersPage } from './list-offers.page';

describe('ListOffersPage', () => {
  let component: ListOffersPage;
  let fixture: ComponentFixture<ListOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
