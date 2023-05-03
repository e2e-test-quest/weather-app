import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TownWeather } from '@models/town-weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient : HttpClient
  ) { }

  public getCurrentWeather(): Observable<Array<TownWeather>> {
    return this.httpClient.get<Array<TownWeather>>('/assets/data/mock.json');
  }
}
