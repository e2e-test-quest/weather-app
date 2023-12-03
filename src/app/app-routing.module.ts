import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from '@components/weather/weather.component';
import {AddNewTownComponent} from '@components/add-new-town/add-new-town.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  },
  {
    path: 'add-new-town',
    component: AddNewTownComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
