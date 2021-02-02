import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: any = [];

  constructor(private router: ActivatedRoute, private countryService: CountryService) { 
    this.router.params.subscribe( params => {
      this.getCountry( params['name'] )
    } );
  }

  ngOnInit() {
  }

  getCountry(countryName){
    this.countryService.getCountry(countryName)
      .subscribe(country => {
        console.log(country);
        this.country = country;
      })
  }

}
