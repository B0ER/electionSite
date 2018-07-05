import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalComponent } from './global/global.component';
import { LoginComponent } from './login/login.component';
import { AskComponent } from './ask/ask.component';
import { SpeakersComponent } from './speakers/speakers.component';
import {  PhotoComponent  } from './photo/photo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowTimeComponent } from './modal/show-time/show-time.component';
import { DirectorComponent } from './modal/director/director.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    LoginComponent,
    AskComponent,
    SpeakersComponent,
    PhotoComponent,
    NavbarComponent,
    ShowTimeComponent,
    DirectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
