/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpusListComponent } from './opus-list.component';

describe('OpusListComponent', () => {
  let component: OpusListComponent;
  let fixture: ComponentFixture<OpusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
