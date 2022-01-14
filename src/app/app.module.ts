import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//importar rutas
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CountryComponent } from './pages/country/country.component';
import { CountriesCardsComponent } from './components/cards/countries-cards/countries-cards.component';
import { CapitalsComponent } from './pages/capitals/capitals.component';
import { ContinentComponent } from './pages/continent/continent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountryComponent,
    CountriesCardsComponent,
    CapitalsComponent,
    ContinentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
