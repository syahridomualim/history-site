import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './ui/today/today.component';

const routes: Routes = [
  { path: 'today', component: TodayComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
