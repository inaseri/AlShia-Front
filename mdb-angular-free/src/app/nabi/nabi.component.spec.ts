import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabiComponent } from './nabi.component';

describe('NabiComponent', () => {
  let component: NabiComponent;
  let fixture: ComponentFixture<NabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
