import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryComponent } from './pages/country/country.component';
import { CapitalsComponent } from './pages/capitals/capitals.component';
import { ContinentComponent } from './pages/continent/continent.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pais/:name', component: CountryComponent},
    {path: 'capitals', component: CapitalsComponent},
    {path: 'continents', component: ContinentComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
