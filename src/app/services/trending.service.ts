import {Injectable} from '@angular/core';
import {TownWeather} from '@models/town-weather';
import {Trending} from '@models/trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor() { }

  public retrieveTrending(townWeathers: TownWeather[]): Trending | null {
    if (townWeathers.length === 0) {
      return null;
    }
    const randomIndex = this.generateRandomIndex(townWeathers);
    return {
      label: `Visiter ${townWeathers[randomIndex].name}`,
      url: `https://www.google.com/search?q=${townWeathers[randomIndex].name}`
    };
  }

  private generateRandomIndex(townWeathers: TownWeather[]): number {
    return Math.floor(Math.random() * townWeathers.length);
  }
}
