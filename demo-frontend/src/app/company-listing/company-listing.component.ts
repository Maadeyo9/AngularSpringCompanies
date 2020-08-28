import { Component, OnInit } from '@angular/core';
import { FilltextService} from '../filltext.service';
import {Company} from '../company';
import {BackendService} from '../backend.service';



@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.css']
})
export class CompanyListingComponent implements OnInit {

  companies: Company[];
  clicked = false;

  // injecting the filltextservice and the backendservice
  constructor(
    private filltextService: FilltextService,

    private backendService: BackendService) { }


  // click handler for the API-request button.
  handleClick() {
    this.filltextService.getCompanies().subscribe(data => {
      this.companies = data;
    });

  }
  ngOnInit() {

  }

  save(company: Company) {
    this.backendService.saveCompany(company).subscribe();
  }
}
