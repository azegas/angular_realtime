import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { CatFactComponent } from './cat-fact/cat-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeDisplayComponent,
    CatFactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
