import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ReportingModule} from '../reporting/reporting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
