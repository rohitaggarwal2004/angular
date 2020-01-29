import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent} from './components/body/body.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'certifications',component:CertificationsComponent }, 
  {path: 'contactme',component:ContactmeComponent }, 
  {path: 'body',component:BodyComponent },   
  {path: 'aboutme',component:BodyComponent },   
  { path: '',redirectTo: '/body',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
