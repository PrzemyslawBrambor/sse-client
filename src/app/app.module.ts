import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ExchangeRateComponent } from './exchange-rate.component';

@NgModule({
  declarations: [
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ExchangeRateComponent]
})
export class AppModule { }
