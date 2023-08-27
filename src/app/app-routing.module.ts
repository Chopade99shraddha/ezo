import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { HomeComponent } from './home/home.component';
import { AtmComponent } from './atm/atm.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"apicall",component:ApiCallComponent},
  {path:"atm",component:AtmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
