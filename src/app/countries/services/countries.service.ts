import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private httpClient: HttpClient) { }

  private getCountriespRequest(url: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // delay(1000),
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.getCountriespRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries })
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.getCountriespRequest(url);
  }

  searchRegion(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${term}`;
    return this.getCountriespRequest(url);
  }
}

