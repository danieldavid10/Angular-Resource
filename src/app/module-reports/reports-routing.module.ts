import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsPdfComponent } from './components/js-pdf/js-pdf.component';

const routes: Routes = [
  { path: 'js-pdf', component: JsPdfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
