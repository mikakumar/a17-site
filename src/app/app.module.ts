import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobListComponent } from './job-list/job-list.component';
import { RegisterComponent } from './register/register.component';
import { ResourcesComponent } from './resources/resources.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import {HttpClientModule} from '@angular/common/http';

import { NgxCurrencyDirective } from "ngx-currency";
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    JobFormComponent,
    JobListComponent,
    RegisterComponent,
    ResourcesComponent,
    LoginPopupComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    NgxMatIntlTelInputComponent,
    NgxCurrencyDirective,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
