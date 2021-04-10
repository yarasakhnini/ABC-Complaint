import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplimentComponent } from './add-compliment.component';

describe('AddComplimentComponent', () => {
  let component: AddComplimentComponent;
  let fixture: ComponentFixture<AddComplimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComplimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
