import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTownComponent } from './add-new-town.component';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('AddNewTownComponent', () => {
  let component: AddNewTownComponent;
  let fixture: ComponentFixture<AddNewTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTownComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
