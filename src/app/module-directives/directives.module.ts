import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';

@NgModule({
  declarations: [AttributeDirectivesComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
