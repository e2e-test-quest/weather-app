import {Component, inject, Input, Signal} from '@angular/core';
import {TownWeather} from '@models/town-weather';
import {RouterLink} from '@angular/router';
import {Store} from '@ngxs/store';
import {WeatherState} from '@stores/weather/weather.state';
import {SelectTown} from '@stores/weather/weather.actions';

@Component({
  selector: 'app-town-selector',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './town-selector.component.html',
  styleUrl: './town-selector.component.scss'
})
export class TownSelectorComponent {
  @Input({required: true})
  public globalWeather?: TownWeather[];
  private store = inject(Store);
  public selectedTownWeather : Signal<TownWeather | null> = this.store.selectSignal(WeatherState.getSelectedTownWeather);

  public onSelectTown(newSelectedTownWeather: TownWeather) {
    this.store.dispatch(new SelectTown(newSelectedTownWeather));
  }
}
