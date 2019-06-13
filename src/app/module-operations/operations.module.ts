import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjetHomeComponent } from './components/subjet-home/subjet-home.component';

@NgModule({
  declarations: [SubjectComponent, SubjetHomeComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
