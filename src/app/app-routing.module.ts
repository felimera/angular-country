import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';

const routes: Routes = [
  { path: 'home', component: HomePagesComponent },
  { path: 'about', component: AboutPagesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
