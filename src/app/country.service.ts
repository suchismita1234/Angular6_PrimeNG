import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: Http
    /*private route: ActivatedRoute*/) { }

  getCountries() {
    let jsonUrl = './assets/JSONresponse/countries.json';
    return this.http.get(jsonUrl)
                .toPromise()
                .then(res => <any[]> res.json().data)
                .then(data => { return data; });
  }
}
