import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    LoadingSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
