import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../models/country.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: CountryResponse[] = [];
  //country: CountryResponse;
  countryName: string;

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryName = "";
    this.evaluarCarga();
  }

  // setInputValue(item){
  //   this.countryName = item.target.value;
  //   console.log( this.countryName );
  // }

  // setCountryName(item){
  //   this.countryName = item.value;
  //   console.log( 'Nombre: ' + this.countryName );
  // }

  // getCountryName(){
  //   return this.countryName.toString();
  // }

  evaluarCarga(){

    if(this.countryName == ""){
      this.cargarPaises();
    }
    else{
      this.cargarPais( this.countryName );
    }

  }

  cargarPaises(){

    this.countryService.getCountries()
  		.subscribe( (resp: any) => {
        //this.countries.push( resp );
        console.log('Longitud del arreglo countries: ' + this.countries.length);
        this.countries = resp;
        console.log( resp );
      });
  }

  cargarPais(terminoBusqueda){

    this.countryName = terminoBusqueda.value;
    this.countryService.getCountry(this.countryName)
      .subscribe( (resp: any) => {
        console.log('Longitud: ' + this.countries.length);
        this.countries = resp;
        console.log( 'Cargando pais: ' );
        console.log( resp );
      });
  }

}
