import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownSelectorComponent } from './town-selector.component';

describe('TownSelectorComponent', () => {
  let component: TownSelectorComponent;
  let fixture: ComponentFixture<TownSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TownSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
