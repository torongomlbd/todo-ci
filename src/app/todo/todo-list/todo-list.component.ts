import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: any[];

  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();


  /**
   * Constructor
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Delete todo
   * @param id
   */
  deleteTodoFromList(id) {
    this.deleteTodo.emit(id);
  }

}
