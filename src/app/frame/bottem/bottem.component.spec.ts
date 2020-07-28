import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottemComponent } from './bottem.component';

describe('BottemComponent', () => {
  let component: BottemComponent;
  let fixture: ComponentFixture<BottemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
