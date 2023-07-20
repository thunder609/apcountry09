import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/Pages/homePages/homePages.component';
import { AboutPagesComponent } from './shared/Pages/aboutPages/aboutPages.component';
import { ContactComponent } from './shared/Pages/contact/contact.component';

const routes : Routes=[
 // {
//     path:'',
//     component: HomePagesComponent
// },
{
  path:'about',
  component: AboutPagesComponent
},
{
  path:'about',
  component: AboutPagesComponent
},
{
  path:'contacto',
  component: ContactComponent
},
{
  path:'countries',
 loadChildren: ()=> import('./countries/countries.module').then(m=>m.CountriesModule),
},
{
  path:'**',
  redirectTo:'countries'
},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
   exports:[
    RouterModule
   ]
})
export class AppRoutingModule { }
