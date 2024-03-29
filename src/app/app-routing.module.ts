import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { LoginComponent } from './login/login.component';
import { AskComponent } from './ask/ask.component';
import { SpeakersComponent } from './speakers/speakers.component';
import {  PhotoComponent  } from './photo/photo.component';
import {SettingsComponent} from './settings/settings.component';



const routes: Routes = [
  {
    path: 'global',
    component: GlobalComponent
  },
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  {
    path: 'ask',
    component: AskComponent
  },
  {
    path: 'speakers',
    component: SpeakersComponent
  },
  {
    path: 'photo',
    component: PhotoComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    redirectTo: 'global'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
