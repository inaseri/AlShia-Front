import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsorahComponent } from './asorah.component';

describe('AsorahComponent', () => {
  let component: AsorahComponent;
  let fixture: ComponentFixture<AsorahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsorahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsorahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
