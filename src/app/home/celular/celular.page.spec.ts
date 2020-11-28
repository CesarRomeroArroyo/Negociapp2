import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CelularPage } from './celular.page';

describe('CelularPage', () => {
  let component: CelularPage;
  let fixture: ComponentFixture<CelularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CelularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
