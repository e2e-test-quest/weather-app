import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownSelectorComponent } from './town-selector.component';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideStore} from '@ngxs/store';
import {WeatherState} from '@stores/weather/weather.state';

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
        provideStore([WeatherState])
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
});
