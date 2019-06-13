import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
// Components
import { NavbarComponent } from './components/navbar/navbar.component';
// MDBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
