import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  /**
   * Init form
   */
  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
  });

  /**
   * Constructor
   * @param formBuilder
   */
  constructor(
    private formBuilder: FormBuilder
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * On form submit
   */
  onSubmit() {
    if (!this.form.valid) {
       return;
    }

    this.addTodo.emit(this.form.value);
    this.form.controls.title.setValue('');
  }

}
