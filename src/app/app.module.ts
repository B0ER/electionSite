import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GlobalComponent} from './global/global.component';
import {LoginComponent} from './login/login.component';
import {AskComponent} from './ask/ask.component';
import {SpeakersComponent} from './speakers/speakers.component';
import {PhotoComponent} from './photo/photo.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ShowTimeComponent} from './modal/show-time/show-time.component';
import {LiderComponent} from './modal/lider/lider.component';
import {HttpClientModule} from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import {SettingsComponent} from './settings/settings.component';
import {ConvocationComponent} from './modal/convocation/convocation.component';
import { SessionComponent } from './modal/session/session.component';

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
    LiderComponent,
    SettingsComponent,
    ConvocationComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  exports: [FileUploadModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
