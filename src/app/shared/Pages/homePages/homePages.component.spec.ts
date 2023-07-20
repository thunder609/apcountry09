/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePagesComponent } from './homePages.component';

describe('HomePagesComponent', () => {
  let component: HomePagesComponent;
  let fixture: ComponentFixture<HomePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
