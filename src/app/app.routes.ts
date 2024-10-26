import {Routes} from '@angular/router';
import {HomeComponent} from '@pages/home/home.component';
import {AddNewTownComponent} from '@pages/add-new-town/add-new-town.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'add-new-town',
    title: 'Add new town',
    component: AddNewTownComponent
  },
  {
    path: '**',
    title: 'Home',
    component: HomeComponent
  },
];
