import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from './company';


// service for communicating with the backend

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url: string = "/api/companies";

  constructor(private http: HttpClient) { }

  getSavedCompanies() {
    return this.http.get<Company[]>(this.url);
  }
  saveCompany(company: Company) {
    return this.http.post<Company>(this.url, company);
  }
  deleteCompany(company: Company) {
    return this.http.delete<Company>(`${this.url}/${company.id}`);
  }


}
