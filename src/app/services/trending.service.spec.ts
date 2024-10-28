import { TestBed } from '@angular/core/testing';

import { TrendingService } from './trending.service';
import {TownWeather} from '@models/town-weather';

const TOWNS_WEATHER = [
  {
    "id": 1,
    "name": "Douala",
    "forecast": {
      "condition": "cloudy",
      "wind": {
        "speed": {
          "value": 18.5,
          "unit": "km/h"
        },
        "direction": "North-West"
      },
      "temperature": {
        "min": {
          "value": 10.8,
          "unit": "°c"
        },
        "max": {
          "value": 29,
          "unit": "°c"
        }
      }
    }
  },
  {
    "id": 2,
    "name": "Bafoussam",
    "forecast": {
      "condition": "cloudy",
      "wind": {
        "speed": {
          "value": 18.5,
          "unit": "km/h"
        },
        "direction": "North-West"
      },
      "temperature": {
        "min": {
          "value": 10.8,
          "unit": "°c"
        },
        "max": {
          "value": 29,
          "unit": "°c"
        }
      }
    }
  },
  {
    "id": 3,
    "name": "Yaoundé",
    "forecast": {
      "condition": "cloudy",
      "wind": {
        "speed": {
          "value": 18.5,
          "unit": "km/h"
        },
        "direction": "North-West"
      },
      "temperature": {
        "min": {
          "value": 10.8,
          "unit": "°c"
        },
        "max": {
          "value": 29,
          "unit": "°c"
        }
      }
    }
  }
];

describe('TrendingService', () => {
  let service: TrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate random index', () => {
    expect(service).toBeTruthy();
    const townWeathers = TOWNS_WEATHER as TownWeather[];
    expect(service["generateRandomIndex"](townWeathers)).toBeGreaterThanOrEqual(0);
    expect(service["generateRandomIndex"](townWeathers)).toBeLessThan(townWeathers.length);
  });

  it('retrieveTrending should return null empty array', () => {
    expect(service).toBeTruthy();
    const townWeathers: TownWeather[] = [];
    expect(service.retrieveTrending(townWeathers)).toBeNull();
  });

  it('retrieveTrending should return trending', () => {
    expect(service).toBeTruthy();
    const townWeathers = TOWNS_WEATHER as TownWeather[];
    service["generateRandomIndex"] = jest.fn().mockImplementation(() => 1);
    const trending = service.retrieveTrending(townWeathers);
    expect(service["generateRandomIndex"]).toHaveBeenCalledTimes(1);
    expect(trending).toEqual({
      label: "Visiter Bafoussam",
      url: "https://www.google.com/search?q=Bafoussam"
    });
  });
});
