import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NgxSemanticModule } from 'ngx-semantic';

import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    NgxSemanticModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
