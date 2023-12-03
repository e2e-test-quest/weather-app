import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTownComponent } from './add-new-town.component';

describe('AddNewTownComponent', () => {
  let component: AddNewTownComponent;
  let fixture: ComponentFixture<AddNewTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
