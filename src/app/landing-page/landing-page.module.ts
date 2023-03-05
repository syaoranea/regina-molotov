import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { VideosComponent } from './components/videos/videos.component';
import { SharedModule } from '../shared/shared.module';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    GaleriaComponent,
    VideosComponent,
    RedesSociaisComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LandingPageModule { }
