import {Routes} from '@angular/router';
import {HomeComponent} from '@pages/home/home.component';
import {AddNewTownComponent} from '@pages/add-new-town/add-new-town.component';
import {Usecase1Component} from '@pages/usecases/usecase-1/usecase-1.component';
import {Usecase2Component} from '@pages/usecases/usecase-2/usecase-2.component';

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
    path: 'usecases/usecase-1',
    title: 'Usecase 1',
    component: Usecase1Component
  },
  {
    path: 'usecases/usecase-2',
    title: 'Usecase 2',
    component: Usecase2Component
  },
  {
    path: '**',
    title: 'Home',
    component: HomeComponent
  },
];
