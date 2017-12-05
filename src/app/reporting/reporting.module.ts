import {NgModule} from '@angular/core';
import {ReportingComponent} from './atomic/templates/reporting.template';

@NgModule({
  declarations: [
    ReportingComponent
  ],
  exports: [
    ReportingComponent
  ]
})
export class ReportingModule {
}
