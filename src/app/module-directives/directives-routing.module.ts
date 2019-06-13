import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';

const routes: Routes = [
  { path: '', component: AttributeDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
