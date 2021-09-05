import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  vacio = '';
  coma = ',';

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.languajeName = '';
    this.evaluarCarga();
  }

  countries: CountryResponse[] = [];
  languajeName: string;

  cargarPaises(){
    this.countryService.getCountries()
    .subscribe( (resp: any) => {
      console.log('Longitud del arreglo countries: ' + this.countries.length);
      this.countries = resp;
      console.log( resp );
    } );
  }

  cargarIdioma(terminoBusqueda){

    if(terminoBusqueda.value != ''){

      this.languajeName  = terminoBusqueda.value;
      this.countryService.getLanguaje(this.languajeName)
        .subscribe( (resp: any) => {
          console.log('Longitud: ' + this.countries.length);
          this.countries = resp;
          console.log( 'Cargando capital: ' );
          console.log( resp );
        });

    }else{
      this.cargarPaises();
    }

  }

  evaluarCarga(){

    if(this.languajeName  == ""){
      this.cargarPaises();
    }
    else{
      this.cargarIdioma( this.languajeName  );
    }

  }


}
