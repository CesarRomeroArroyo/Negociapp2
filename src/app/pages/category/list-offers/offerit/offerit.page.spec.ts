import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferitPage } from './offerit.page';

describe('OfferitPage', () => {
  let component: OfferitPage;
  let fixture: ComponentFixture<OfferitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
