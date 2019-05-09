import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { APP_ROUTES } from './routes/app-content.routes';

const routes: Routes = [
  { path: '', component: MainContentComponent, children: APP_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
