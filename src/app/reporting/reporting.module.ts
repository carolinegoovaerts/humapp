import {NgModule} from '@angular/core';
import {ReportingComponent} from './atomic/templates/reporting.template';
import {ReportingOnMapComponent} from "./atomic/organisms/reporting-map/reporting-map.organism";
import {HeaderComponent} from "./atomic/organisms/header/header.organism";

@NgModule({
  declarations: [
    HeaderComponent,
    ReportingOnMapComponent,
    ReportingComponent
  ],
  exports: [
    ReportingComponent
  ]
})
export class ReportingModule {
}
