import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { VideosComponent } from './components/videos/videos.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    GaleriaComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LandingPageModule { }
