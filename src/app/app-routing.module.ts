import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpusListComponent } from './opus-list/opus-list.component';
import { NewItemComponent } from './new-item/new-item.component';


const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: OpusListComponent },
    { path: 'new', component: NewItemComponent }
];




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}