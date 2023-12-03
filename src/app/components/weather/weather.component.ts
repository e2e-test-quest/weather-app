import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TownWeather } from '@models/town-weather';
import { WeatherService } from '@services/weather.service';
import {GeneralState, GeneralStateModel} from "@stores/general/general.state";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {Initialize, StartApplication} from '@stores/general/general.action';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public selectedTownWeather !: TownWeather | null;
  public townFilterForm !: FormGroup;
  public globalWeather !: Array<TownWeather>;
  @Select(GeneralState) generalState$ !: Observable<GeneralStateModel>;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService : WeatherService,
    private store : Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['isStarted']) {
        this.onStart();
      } else {
        this.initialize();
      }
    });
    this.townFilterForm = this.formBuilder.group({
      'townTextSearch' : new FormControl(null)
    });
    this.filteringTown(null);
  }

  public initialize() {
    this.store.dispatch(new Initialize());
  }

  public onStart() {
    this.store.dispatch(new StartApplication());
  }

  public selectedTown($selectedTownWeather: TownWeather) {
    this.selectedTownWeather = $selectedTownWeather;
  }

  public onSubmitForm() {
    const SEARCH_FIELD_FORM_ID = 'townTextSearch';
    this.selectedTownWeather = null;
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
