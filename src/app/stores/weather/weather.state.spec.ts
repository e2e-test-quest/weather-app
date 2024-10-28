import { TestBed } from '@angular/core/testing';
import {  provideStore,  Store } from '@ngxs/store';
import { WeatherState } from './weather.state';
import {SelectTown} from '@stores/weather/weather.actions';
import {MOCK_TONWS_WEATHER} from '../../mocks/wheather.mock';

describe('Weather store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [provideStore([WeatherState])]
    });

    store = TestBed.inject(Store);
  });

  it('should select a town correctly', () => {
    const selectedTownWeather = MOCK_TONWS_WEATHER[0];
    store.dispatch(new SelectTown(selectedTownWeather));
    const actual = store.selectSnapshot(WeatherState.getSelectedTownWeather);
    expect(actual).toEqual(selectedTownWeather);
  });
});
