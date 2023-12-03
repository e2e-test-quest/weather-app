import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Initialize, StartApplication} from "./general.action";
import {Router} from "@angular/router";

export interface GeneralStateModel {
  isStarted: boolean;
}

@State<GeneralStateModel>({
  name: 'general',
  defaults: {
    isStarted: false
  }
})
@Injectable()
export class GeneralState {
  constructor(private router: Router) {
  }

  @Action(StartApplication)
  starApplication(ctx: StateContext<GeneralStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isStarted: true
    });
    this.router.navigate(
      ['/'],
      { queryParams: { isStarted: true } }
    );
  }

  @Action(Initialize)
  initialize(ctx: StateContext<GeneralStateModel>) {
    ctx.setState({
      isStarted: false
    });
  }
}
