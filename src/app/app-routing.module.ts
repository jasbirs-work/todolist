import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TodotaskComponent } from './todotask/todotask.component';

const routes: Routes = [
  {path:'todolist', component:TodotaskComponent,
    // children:[{path:'pagetest',component:NopagefoundComponent}]
  },
  {path:'pagenotfound', component:NopagefoundComponent},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'', redirectTo:'/todolist', pathMatch:'full'},
  {path:'**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
