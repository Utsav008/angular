import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsidebarComponent } from './upsidebar.component';

describe('UpsidebarComponent', () => {
  let component: UpsidebarComponent;
  let fixture: ComponentFixture<UpsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
