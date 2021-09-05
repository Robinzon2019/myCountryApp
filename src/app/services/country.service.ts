import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from '../models/country.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryName:string;
  private countriesUrl = 'https://restcountries.eu/rest/v2/all';
  private countryUrl: string;
  private capitalUrl: string;
  private languageUrl: string;



  constructor(private http: HttpClient) {
  }

  getCountries(){
  	return this.http.get<CountryResponse>(this.countriesUrl);
  }

  getCountry(countryName: string){
    this.countryUrl =  `https://restcountries.eu/rest/v2/name/${ countryName }`;
    return this.http.get<CountryResponse>(this.countryUrl);
  }

  getCapital(capitalName: string){
    this.capitalUrl = `https://restcountries.eu/rest/v2/capital/${ capitalName }`;
    return this.http.get<CountryResponse>(this.capitalUrl);
  }

  getLanguaje(languajeName: string){
    this.languageUrl = `https://restcountries.eu/rest/v2/lang/${ languajeName }`;
    return this.http.get<CountryResponse>(this.languageUrl);
  }
}
