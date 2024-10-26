import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {TownWeather} from '@models/town-weather';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-town-selector',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './town-selector.component.html',
  styleUrl: './town-selector.component.scss'
})
export class TownSelectorComponent {
  @Input({required: true})
  public globalWeather !: Array<TownWeather>;
  public selectedTownWeather : WritableSignal<TownWeather | null> = signal(null);
  @Output()
  public selectedTownEvent = new EventEmitter<TownWeather>();

  public onSelectTown(newSelectedTownWeather: TownWeather) {
    this.selectedTownWeather.set(newSelectedTownWeather);
    this.selectedTownEvent.emit(newSelectedTownWeather);
  }
}
