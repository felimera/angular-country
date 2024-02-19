import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    HomePagesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPagesComponent,
    HomePagesComponent,
  ]
})
export class SharedModule { }
