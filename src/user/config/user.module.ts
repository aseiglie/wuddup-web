import { FormsModule } from '@angular/forms';
import { UserComponent } from './../user.component';
import { UserRoutes } from './user.routes';
import { EditComponent } from './../edit/edit.component';
import { ViewComponent } from './../view/view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    FormsModule
  ],
  declarations: [
    ViewComponent,
    EditComponent,
    UserComponent
  ]
})
export class UserModule { }
