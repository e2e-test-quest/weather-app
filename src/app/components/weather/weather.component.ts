import {Component, computed, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {TownSelectorComponent} from '../town-selector/town-selector.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TownWeather} from '@models/town-weather';
import {WeatherService} from '@services/weather.service';
import {WeatherDetailsComponent} from '@components/weather-details/weather-details.component';
import {AsyncPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {Observable} from 'rxjs';

const SEARCH_FIELD_FORM_ID = 'townTextSearch';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    TownSelectorComponent,
    WeatherDetailsComponent,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  public selectedTownWeather : WritableSignal<TownWeather | null> = signal(null);
  public globalWeather!: Signal<TownWeather[] | undefined>;
  public townFilter: WritableSignal<string | null> = signal(null);
  public availableTownWeather!: Signal<TownWeather[] | undefined>;
  public globalWeather$?: Observable<TownWeather[]>;
  public townFilterForm!: FormGroup;
  private weatherService = inject(WeatherService);
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.townFilterForm = this.formBuilder.group({
      'townTextSearch' : new FormControl(null)
    });
    this.globalWeather$ = this.weatherService.getCurrentWeather();
    this.globalWeather = toSignal(this.globalWeather$, {rejectErrors: true, initialValue: []});
  }

  ngOnInit(): void {
    this.availableTownWeather = computed(() => {
      let globalWeather = this.globalWeather();
      if (!globalWeather) {
        return [];
      }
      const townFilterValue = this.townFilter();
      if(townFilterValue !== null){
        return globalWeather?.filter(
          currentTownWeather => currentTownWeather.name && currentTownWeather.name.includes(townFilterValue)
        )
      } else {
        return globalWeather;
      }
    });

  }

  public selectedTown($selectedTownWeather: TownWeather) {
    this.selectedTownWeather.set($selectedTownWeather);
  }

  public onSubmitForm() {
    this.selectedTownWeather.set(null);
    if (this.townFilterForm.valid && this.townFilterForm.get(SEARCH_FIELD_FORM_ID)) {
      this.townFilter.set(this.townFilterForm.get(SEARCH_FIELD_FORM_ID)?.value);
    }
  }
}
