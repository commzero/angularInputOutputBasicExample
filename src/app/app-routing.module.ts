import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoriesParentComponent } from './modules/memories/pages/memories-parent/memories-parent.component';


const routes: Routes = [
  { path: '', component: MemoriesParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
