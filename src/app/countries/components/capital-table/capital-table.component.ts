import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './capital-table.component.html',
  styleUrls: ['./capital-table.component.css']
})
export class CapitalTableComponent {
  @Input()
  public countries: Country[]=[]
}
