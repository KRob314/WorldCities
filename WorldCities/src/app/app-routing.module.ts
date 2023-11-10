import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { HealthCheckComponent } from './health-check/health-check.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { CityEditComponent } from './cities/city-edit.component';
import { CountryEditComponent } from './countries/country-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent },
  { path: 'city/:id', component: CityEditComponent },
  {path: 'city', component: CityEditComponent},
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:id', component: CountryEditComponent },
  { path: 'country', component: CountryEditComponent }
  //{ path: 'fetch-data', component: FetchDataComponent },
  //{ path: 'health-check', component: HealthCheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }