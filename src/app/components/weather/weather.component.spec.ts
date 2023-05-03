import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeatherComponent } from './weather.component';
import { WeatherDetailsComponent } from '@components/weather-details/weather-details.component';
import { TownSelectorComponent } from '@components/town-selector/town-selector.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxsModule} from "@ngxs/store";
import {GeneralState} from "@stores/general/general.state";

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        WeatherDetailsComponent,
        TownSelectorComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgxsModule.forRoot([
          GeneralState
        ])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
