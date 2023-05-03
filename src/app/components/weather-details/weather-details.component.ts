import { Component, Input, OnInit } from '@angular/core';
import { TownWeather } from '@models/town-weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input()
  public currentTownWeather !: TownWeather | null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
