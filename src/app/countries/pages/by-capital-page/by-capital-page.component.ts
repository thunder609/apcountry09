import { Component, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries :Country[]=[];
  constructor(private service:CountriesService){

  }

  searchByCapital(term:string):void{
    console.log('desde ByCapitalPage')
  this.service.searchCapitl(term).subscribe(
         contries=>{
          this.countries=contries;
         }
  )
  }

}
