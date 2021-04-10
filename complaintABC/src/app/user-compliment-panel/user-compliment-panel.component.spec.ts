import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplimentPanelComponent } from './user-compliment-panel.component';

describe('UserComplimentPanelComponent', () => {
  let component: UserComplimentPanelComponent;
  let fixture: ComponentFixture<UserComplimentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComplimentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComplimentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
