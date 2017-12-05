import {NgModule} from '@angular/core';
import {ReportingComponent} from './atomic/templates/reporting.template';
import {ReportingMapComponent} from './atomic/organisms/reporting-map/reporting-map.organism';
import {HeaderComponent} from './atomic/organisms/header/header.organism';
import {ReportComponent} from './atomic/molecules/report/report.molecule';

@NgModule({
  declarations: [
    HeaderComponent,
    ReportingMapComponent,
    ReportComponent,
    ReportingComponent
  ],
  exports: [
    ReportingComponent
  ]
})
export class ReportingModule {
}
