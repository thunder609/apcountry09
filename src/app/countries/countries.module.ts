import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

import { SharedModule } from '../shared/shared.module';

import { CapitalTableComponent } from './components/capital-table/capital-table.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';




@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,

    CapitalTableComponent,
     CountryPagesComponent,


  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
  SharedModule  ]
})
export class CountriesModule { }
