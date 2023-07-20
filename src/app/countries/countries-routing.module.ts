import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';


const routes:Routes = [
  {
    path:'by-capital',
    component:ByCapitalPageComponent,
  },
  {
    path:'by-country',
    component:ByCountryPageComponent,
  },
  {
    path:'by-region',
    component:ByRegionPageComponent,
  },
  {
    path:'by-capital',
    component:ByCapitalPageComponent,
  },
  {
    path:'by/:id',
    component:CountryPagesComponent,
  },
  {path:'**',
      component:ByCapitalPageComponent,
    }

]

@NgModule({

  imports: [
   RouterModule.forChild(routes)

  ],
  exports:[RouterModule]
})
export class CountriesRoutingModule { }
