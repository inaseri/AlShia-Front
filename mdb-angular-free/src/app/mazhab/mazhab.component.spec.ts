import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazhabComponent } from './mazhab.component';

describe('MazhabComponent', () => {
  let component: MazhabComponent;
  let fixture: ComponentFixture<MazhabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazhabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
