import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryName:string;
  private countriesUrl = 'https://restcountries.eu/rest/v2/all';
  private countryUrl: string;

 
  
  constructor(private http: HttpClient) {
  }

  getCountries(){
  	return this.http.get<CountryResponse>(this.countriesUrl);
  }

  getCountry(name: string){
    this.countryUrl =  `https://restcountries.eu/rest/v2/name/${ name }`;
    return this.http.get<CountryResponse>(this.countryUrl);
  }

}
