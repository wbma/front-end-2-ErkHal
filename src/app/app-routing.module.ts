import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpTestComponent } from './http-test/http-test.component';

const routes: Routes = [
  { path: 'http-test', component: HttpTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
