import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TownSelectorComponent } from './town-selector.component';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {screen, getAllByRole} from '@testing-library/angular';
import {TownWeather} from '@models/town-weather';
import {MOCK_TONWS_WEATHER} from '../../mocks/wheather.mock';

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

  it('should contains Available Towns list with good content', () => {
    expect(component).toBeTruthy();
    component.globalWeather = MOCK_TONWS_WEATHER;
    fixture.detectChanges();
    const listOfTownsContainer = screen.getByRole('list', {name: 'Available Towns'});
    const listItems = getAllByRole(listOfTownsContainer, 'listitem');
    expect(listItems.length).toEqual(MOCK_TONWS_WEATHER.length);
    expect(listItems.map(listItem => listItem.textContent))
      .toEqual(MOCK_TONWS_WEATHER.map(town => town.name));
  });
});
