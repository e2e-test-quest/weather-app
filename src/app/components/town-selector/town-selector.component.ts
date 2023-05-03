import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TownWeather } from '@models/town-weather';

@Component({
  selector: 'app-town-selector',
  templateUrl: './town-selector.component.html',
  styleUrls: ['./town-selector.component.scss']
})
export class TownSelectorComponent implements OnInit {
  @Input()
  public globalWeather !: Array<TownWeather>;
  public selectedTownWeather ?: TownWeather;
  @Output()
  public selectedTownEvent = new EventEmitter<TownWeather>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public onSelectTown(newSeletedTownWeather: TownWeather) {
    this.selectedTownWeather = newSeletedTownWeather;
    this.selectedTownEvent.emit(this.selectedTownWeather);
  }
}
