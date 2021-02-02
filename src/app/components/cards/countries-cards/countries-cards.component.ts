import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries-cards',
  templateUrl: './countries-cards.component.html',
  styleUrls: ['./countries-cards.component.css']
})
export class CountriesCardsComponent implements OnInit {

  @Input() countries: any[] = [];
  vacio = '';
  coma = ',';
  
  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
  }

  getCountry(country){
    console.log(country);

    let countryName = country.name;

    this.router.navigate( ['/pais', countryName] );
  }


}
