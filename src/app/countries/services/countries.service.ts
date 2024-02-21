import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interfaces';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private savetoLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

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
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.savetoLocalStorage())
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.getCountriespRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.savetoLocalStorage())
      );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriespRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.savetoLocalStorage())
      );
  }
}

