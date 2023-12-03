import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from '@components/weather/weather.component';
import { TownSelectorComponent } from '@components/town-selector/town-selector.component';
import { WeatherDetailsComponent } from '@components/weather-details/weather-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxsModule} from "@ngxs/store";
import {GeneralState} from "@stores/general/general.state";
import {NgOptimizedImage} from "@angular/common";
import { AddNewTownComponent } from './components/add-new-town/add-new-town.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TownSelectorComponent,
    WeatherDetailsComponent,
    AddNewTownComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxsModule.forRoot([
            GeneralState
        ]),
        NgOptimizedImage,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
