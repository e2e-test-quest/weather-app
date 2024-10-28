import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { TownWeather } from '@models/town-weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private httpClient = inject(HttpClient);

  public getCurrentWeather(): Observable<TownWeather[]> {
    return this.httpClient.get<TownWeather[]>('./data/mock.json');
  }
}
