import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoanding: boolean = false;

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string): void {
    this.isLoanding = true;
    this.countriesService
      .searchCapital(term)
      .subscribe({
        next: (resp: Country[]) => {
          if (resp) {
            this.countries = resp;
            this.isLoanding = false;
          }
        }
      });
  }
}
