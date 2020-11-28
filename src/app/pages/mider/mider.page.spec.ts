import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiderPage } from './mider.page';

describe('MiderPage', () => {
  let component: MiderPage;
  let fixture: ComponentFixture<MiderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
