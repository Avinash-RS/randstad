import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSidebarHeaderComponent } from './la-sidebar-header.component';

describe('LaSidebarHeaderComponent', () => {
  let component: LaSidebarHeaderComponent;
  let fixture: ComponentFixture<LaSidebarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSidebarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
