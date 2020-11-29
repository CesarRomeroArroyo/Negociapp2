import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MideraComponent } from './midera.component';

describe('MideraComponent', () => {
  let component: MideraComponent;
  let fixture: ComponentFixture<MideraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MideraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MideraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
