import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplimentPanelComponent } from './admin-compliment-panel.component';

describe('AdminComplimentPanelComponent', () => {
  let component: AdminComplimentPanelComponent;
  let fixture: ComponentFixture<AdminComplimentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComplimentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplimentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
