import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryComponent } from './pages/country/country.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pais/:name', component: CountryComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];