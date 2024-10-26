import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {TownSelectorComponent} from '../town-selector/town-selector.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TownWeather} from '@models/town-weather';
import { WeatherService } from '@services/weather.service';
import {WeatherDetailsComponent} from '@components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    TownSelectorComponent,
    WeatherDetailsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  public selectedTownWeather : WritableSignal<TownWeather | null> = signal(null);
  public townFilterForm !: FormGroup;
  public globalWeather !: Array<TownWeather>;
  private weatherService = inject(WeatherService);
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.townFilterForm = this.formBuilder.group({
      'townTextSearch' : new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.filteringTown(null);
  }

  public selectedTown($selectedTownWeather: TownWeather) {
    this.selectedTownWeather.set($selectedTownWeather);
  }

  public onSubmitForm() {
    const SEARCH_FIELD_FORM_ID = 'townTextSearch';
    this.selectedTownWeather.set(null);
    if (this.townFilterForm.valid && this.townFilterForm.get(SEARCH_FIELD_FORM_ID)) {
      const townFilterValue = this.townFilterForm.get(SEARCH_FIELD_FORM_ID)?.value;
      this.filteringTown(townFilterValue);
    }
  }

  private filteringTown(townFilterValue: (string | null)) {
    this.weatherService.getCurrentWeather().subscribe(
      (response: Array<TownWeather>)=> {
        if(townFilterValue){
          this.globalWeather = response.filter(
            currentTownWeather => currentTownWeather.name && currentTownWeather.name.includes(townFilterValue)
          );
        } else {
          this.globalWeather = response;
        }
      }
    );
  }
}
