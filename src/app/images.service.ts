import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }


  search(searchTerm) {
    const API_URL = "https://api.shutterstock.com/v2/images/search?query=" + searchTerm + "&sort=popular&view=minimal";
    const clientId = 'API-Client-ID';
    const clientSecret = 'API-Client-Secret-Key';

    return this.http.get(API_URL, { headers: new HttpHeaders().set('Authorization', 'Basic ' + window.btoa(clientId + ':' + clientSecret)) });
  }
}
