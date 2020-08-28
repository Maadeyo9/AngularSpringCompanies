import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[];
  title: any;

  ngOnInit() {
    // defining the items for the menubar
      this.items = [
          {
              label: 'Find companies',
              icon: 'pi pi-fw pi-search',
              routerLink: ['/listing']
          },
          {
              label: 'Browse saved',
              icon: 'pi pi-fw pi-paperclip',
              routerLink: ['/saved']
          }
      ];
  }

}
