import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-pages',
  templateUrl: './country-pages.component.html',
  styleUrls: ['./country-pages.component.css']
})
export class CountryPagesComponent  implements OnInit{

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
      )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        return this.country = country;
      });
  }







}
