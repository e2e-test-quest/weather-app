import {TownWeather} from '@models/town-weather';

export class SelectTown {
  static readonly type = '[Weather] Select a town';
  constructor(readonly selectedTownWeather: TownWeather | null) { }
}
