import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/views/landing-page.component';
import { PageErrorComponent } from './page-error/views/page-error.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'error', component: PageErrorComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }