import {Action, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {StartApplication} from "./general.action";

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

  @Action(StartApplication)
  starApplication(ctx: StateContext<GeneralStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isStarted: true
    });
  }
}
