import {Component, Input} from '@angular/core';
import {TownWeather} from '@models/town-weather';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})
export class WeatherDetailsComponent {
  @Input({required: true})
  public currentTownWeather !: TownWeather | null;
}
