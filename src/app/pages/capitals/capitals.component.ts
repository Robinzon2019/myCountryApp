import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css']
})
export class CapitalsComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.capitalName = '';
    this.evaluarCarga();
  }

  countries: CountryResponse[] = [];
  capitalName: string;

  cargarPaises(){
    this.countryService.getCountries()
    .subscribe( (resp: any) => {
      console.log('Longitud del arreglo countries: ' + this.countries.length);
      this.countries = resp;
      console.log( resp );
    } );
  }

  cargarCapital(terminoBusqueda){

    if(terminoBusqueda.value != ''){

      this.capitalName = terminoBusqueda.value;
      this.countryService.getCapital(this.capitalName)
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

    if(this.capitalName == ""){
      this.cargarPaises();
    }
    else{
      this.cargarCapital( this.capitalName );
    }

  }


}
