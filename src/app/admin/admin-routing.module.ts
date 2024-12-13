import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';

const routes: Routes = [
  {
    path:'notes',
    component: AddNotesComponent,
    children:[{
      path:'add',
      component: AddNotesComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
