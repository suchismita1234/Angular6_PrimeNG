import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {}

  countries: any[];

  filteredCountriesSingle: any[];

  filteredCountriesMultiple: any[];

  filterCountry(query, countries: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    return filtered;
  }

  filterCountrySingle(event) {
    let query = event.query;
    this.countryService.getCountries().then(countries => {
        this.filteredCountriesSingle = this.filterCountry(query, countries);
    });
  }
}
