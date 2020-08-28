import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Company} from '../company';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  companies: Company[];
  constructor( private backendService: BackendService) { }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this.backendService.getSavedCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  delete(company: Company) {
    this.backendService.deleteCompany(company).subscribe(() => {
      this.refresh();
    });
  }
}
