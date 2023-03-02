import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LandingPageModule { }
