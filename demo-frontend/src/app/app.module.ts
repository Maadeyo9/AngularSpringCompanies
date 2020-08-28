import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {CompanyListingComponent} from './company-listing/company-listing.component';
import {AddressBookComponent} from './address-book/address-book.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path: 'listing', component: CompanyListingComponent},
  {path: 'saved', component: AddressBookComponent},
  {path: '', redirectTo:'/listing', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    CompanyListingComponent,
    AddressBookComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    MenubarModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
