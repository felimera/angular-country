import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
