import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  /**
   * To do list
   */
  todos: any = [];

  /**
   * Constructor
   * @param service
   */
  constructor(
    private service: TodoService
  ) { }

  /**
   * Constructor
   * @ignore
   */
  ngOnInit() {
    this.getTodos();
  }

  /**
   * Get to do list
   */
  getTodos() {
    this.service
        .getAllTodos()
        .subscribe(
          (todos) => {
            this.todos = todos;
          }, err => {
            console.log(err);
          }
        );
  }

  /**
   * Add to do
   * @param todo
   */
  onAddTodo(todo) {
    this.service
        .addTodo(todo)
        .subscribe(res => {
          this.getTodos();
        }, err => {
          console.log(err);
        });
  }

  /**
   * Delete to do
   * @param id
   */
  onDeleteTodo(id) {
    this.service
        .deleteTodo(id)
        .subscribe(res => {
          this.getTodos();
        }, err => {
          console.log(err);
        });
  }
}
