import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../common/shared/shared.module';
import { TodoHomeComponent } from './todo-home/todo-home.component';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListComponent,
    TodoHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TodoAddComponent,
    TodoListComponent,
    TodoHomeComponent
  ]
})
export class TodoModule { }
