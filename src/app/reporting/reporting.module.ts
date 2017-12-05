import {NgModule} from '@angular/core';
import {ReportingComponent} from './atomic/templates/reporting.template';
import {ReportingMapComponent} from './atomic/organisms/reporting-map/reporting-map.organism';
import {HeaderComponent} from './atomic/organisms/header/header.organism';
import {ReportComponent} from './atomic/molecules/report/report.molecule';
import {SignUpComponent} from "./atomic/molecules/signup/signup.molecule";

@NgModule({
  declarations: [
    HeaderComponent,
    ReportingMapComponent,
    ReportComponent,
    ReportingComponent,
    SignUpComponent
  ],
  exports: [
    ReportingComponent
  ]
})
export class ReportingModule {
}
