import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownSelectorComponent } from './town-selector.component';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {screen} from '@testing-library/angular';

describe('TownSelectorComponent', () => {
  let component: TownSelectorComponent;
  let fixture: ComponentFixture<TownSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownSelectorComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains Available Towns list', () => {
    expect(component).toBeTruthy();
    expect(screen.getByRole('list', { name: 'Available Towns' })).toBeTruthy();
  });
});
