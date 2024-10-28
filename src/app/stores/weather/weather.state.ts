import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import {SelectTown} from './weather.actions';
import {TownWeather} from '@models/town-weather';

export interface WeatherStateModel {
  selectedTownWeather: TownWeather | null;
}

@State<WeatherStateModel>({
  name: 'weather',
  defaults: {
    selectedTownWeather: null
  }
})
@Injectable()
export class WeatherState {

  @Selector()
  static getState(state: WeatherStateModel) {
    return state;
  }

  @Selector()
  static getSelectedTownWeather(state: WeatherStateModel) {
    return state.selectedTownWeather;
  }

  @Action(SelectTown)
  selectTown(ctx: StateContext<WeatherStateModel>, { selectedTownWeather }: SelectTown) {
    const stateModel = ctx.getState();
    ctx.patchState(
      {
        ...stateModel,
        selectedTownWeather
      }
    );
  }
}
