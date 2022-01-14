import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-languages',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {

  vacio = '';
  coma = ',';

  countries: any = [];
  languajeName: string;
  countriesFiltered: any = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.languajeName = '';
    this.evaluarCarga();
  }



  cargarPaises(){
    this.countryService.getCountries()
    .subscribe( (resp: any) => {
      console.log('Longitud del arreglo countries: ' + this.countries.length);
      this.countries = resp;
      console.log('Paises: ', this.countries );
    } );
  }

  filterByContinent(continentName: string): void{
    this.countries.forEach(item => {
      if(item.continent === continentName){
        this.countriesFiltered.push(item);
      }
      this.countries = this.countriesFiltered;
      console.log('filtro: ', this.countries);
    });
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

    if(this.languajeName  === ""){
      this.cargarPaises();
    }
    else{
      this.cargarIdioma( this.languajeName  );
    }

  }


}
