import { ContactComponent } from './Pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPagesComponent } from './Pages/aboutPages/aboutPages.component';
import { HomePagesComponent } from './Pages/homePages/homePages.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './Components/search-box/search-box.component';





@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePagesComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent


  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AboutPagesComponent,HomePagesComponent,SidebarComponent,ContactComponent,SearchBoxComponent],
})
export class SharedModule { }
