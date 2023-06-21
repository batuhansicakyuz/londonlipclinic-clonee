import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSection } from './firstsection/firstsection.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { SecondSection } from './secondsection/secondsection.component';
import { ThirdSection } from './thirdsection/thirdsection.component';
import { HomeComponent } from './home/home.component';
import { FifthSection } from './fifthsection/fifthsection.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { HeaderSection } from './headersection/headersection.component';
import { StartComponent } from './start/start.component';

import { AppRoutingModule } from './app-routing.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSection,
    SecondSection,
    ThirdSection,
    HomeComponent,
    FifthSection,
    HeaderSection,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule,
    GoogleMapsModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
