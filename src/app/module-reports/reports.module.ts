import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { JsPdfComponent } from './components/js-pdf/js-pdf.component';

@NgModule({
  declarations: [JsPdfComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
