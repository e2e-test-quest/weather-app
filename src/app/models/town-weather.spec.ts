import { TownWeather } from './town-weather';

const A_TOWN = {
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
};

const ANOTHER_TOWN = {
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
      }
    }
  }
};

describe('Town', () => {
  it('should create an instance', () => {
    expect(new TownWeather()).toBeTruthy();
  });

  it('should compute temperature range', () => {
    const townWeather = Object.assign(new TownWeather(), A_TOWN);
    expect(townWeather).toBeTruthy();
    expect(townWeather.temperatureRange()).toEqual(18.2);
  });

  it('should throws error when compute temperature range with bad input', () => {
    const townWeather = Object.assign(new TownWeather(), ANOTHER_TOWN);
    expect(townWeather).toBeTruthy();
    expect(() => townWeather.temperatureRange()).toThrow("Invalid temperature min and/or max");
  });
});
