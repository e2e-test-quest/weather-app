import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router, RouterLink} from "@angular/router";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-add-new-town',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './add-new-town.component.html',
  styleUrls: ['./add-new-town.component.scss']
})
export class AddNewTownComponent {
  isErrorDisplayed = false;
  formGroup!: FormGroup;

  constructor(
    private httpService: HttpClient,
    private router: Router
  ) {
    const gpsRegex = "^\\d*\\.?\\d*$";
    this.formGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      latitude: new FormControl(null, [
        Validators.required,
        Validators.pattern(gpsRegex)
      ]),
      longitude: new FormControl(null, [
        Validators.required,
        Validators.pattern(gpsRegex)
      ]),
      description: new FormControl(null)
    });
  }

  public submit() {
    this.isErrorDisplayed = false;
    if (this.formGroup.invalid) {
      return;
    }
    setTimeout(() => {
      this.httpService.post('https://e2e-test-quest.github.io/weather-app/api', {})
        .subscribe({
          next: () => {
            this.router.navigate(
              ['/'],
              { queryParams: { isStarted: true } }
            );
          },
          error: () => {
            this.showError();
          }
        });
    }, 1000);
  }

  private showError(){
    this.isErrorDisplayed = true;
  }

  closeError(event: any) {
    this.isErrorDisplayed = false;
    event.preventDefault();
  }
}
