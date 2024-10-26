import {Component, inject, OnInit, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {WeatherComponent} from '@components/weather/weather.component';
import {GetStartedComponent} from '@components/get-started/get-started.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    WeatherComponent,
    GetStartedComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  isStarted = signal(false);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.isStarted.set(params['isStarted'] === 'true');
    });
  }
}
