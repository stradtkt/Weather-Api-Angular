import { AppRoutingModule } from './app-routing.module';
import { WeatherService } from './services/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DallasComponent } from './components/dallas/dallas.component';
import { SeattleComponent } from './components/seattle/seattle.component';
import { BurbankComponent } from './components/burbank/burbank.component';
import { SanjoseComponent } from './components/sanjose/sanjose.component';
import { DcComponent } from './components/dc/dc.component';
import { ChicagoComponent } from './components/chicago/chicago.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DallasComponent,
    SeattleComponent,
    BurbankComponent,
    SanjoseComponent,
    DcComponent,
    ChicagoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
