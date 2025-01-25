import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WeatherComponent} from './weather.component';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';
import {MOCK_TONWS_WEATHER} from '../../mocks/wheather.mock';
import {of, throwError} from 'rxjs';
import {WeatherService} from '@services/weather.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent,
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    TestBed.inject(HttpClient);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('globalWeather should contains empty array when getCurrentWeather returns empty', () => {
    const getCurrentWeatherMock = jest.fn(() =>
      throwError(() => new Error('404'))
    );

    const weatherService = TestBed.inject(WeatherService);
    weatherService['getCurrentWeather'] = getCurrentWeatherMock;
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(getCurrentWeatherMock).toHaveBeenCalledTimes(1);
    expect(component.globalWeather()).toEqual([]);
  });

  it('globalWeather should contains array with good content', () => {
    const getCurrentWeatherMock = jest.fn(() =>
      of(MOCK_TONWS_WEATHER)
    );

    const weatherService = TestBed.inject(WeatherService);
    weatherService['getCurrentWeather'] = getCurrentWeatherMock;
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(getCurrentWeatherMock).toHaveBeenCalledTimes(1);
    expect(component.globalWeather()).toEqual(MOCK_TONWS_WEATHER);
  });
});
