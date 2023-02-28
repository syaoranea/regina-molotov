import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { HeadingComponent } from './components/heading/heading.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
