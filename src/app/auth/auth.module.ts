import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'auth', component: AuthComponent}
    ]),
    SharedModule
  ]
})
export class AuthModule {

}
