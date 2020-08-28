import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Company} from './company';


// service for communicating with the free api

@Injectable({
  providedIn: 'root'
})
export class FilltextService {

  constructor(private http: HttpClient) { }
  url = "http://www.filltext.com/?rows=100&pretty=true&id={index}&name={business}&address={addressObject}";

  // the method for fetching information from the api
  getCompanies() {
    return this.http.get<Company[]>(this.url);
  }
}
