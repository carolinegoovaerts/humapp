import {NgModule} from '@angular/core';
import {ReportingTemplate} from './atomic/templates/reporting.template';

@NgModule({
  declarations: [
    ReportingTemplate
  ],
  exports: [
    ReportingTemplate
  ]
})
export class ReportingModule {
}
