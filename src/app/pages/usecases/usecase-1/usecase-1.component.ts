import { Component } from '@angular/core';

@Component({
  selector: 'app-usecase-1',
  standalone: true,
  imports: [],
  templateUrl: './usecase-1.component.html'
})
export class Usecase1Component {

  onButtonClick() {
    alert("Button clicked");
  }
}
