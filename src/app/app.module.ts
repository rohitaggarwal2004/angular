import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { BodyComponent} from './components/body/body.component';
import { HeadComponent} from './components/head/head.component';
import { FooterComponent} from './components/footer/footer.component';
import { ImageComponent } from './components/head/image/image.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    BodyComponent,
    HeadComponent,
    FooterComponent,
    ImageComponent,
    ContactComponent,
    CertificationsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
