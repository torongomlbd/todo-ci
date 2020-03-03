import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment as env } from '../../environments/environment';

/**
 * todo service
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /**
   * Fake mock todo data
   */
  todos = [
    {
      'id': 1,
      'title': 'Finish Angular Todo app',
    },
    {
      'id': 2,
      'title': 'Take over world',
    },
    {
      'id': 3,
      'title': 'One more thing',
    },
    {
      'id': 4,
      'title': 'Hello world again',
    },
  ];


  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get todo list
   */
  getAllTodos(): Observable<any> {
    // return this.http.get(`${env.api}/todos`);

    // Mock
    return of(this.todos);
  }

  /**
   * Add todo
   * @param body
   */
  addTodo(body): Observable<any> {
    // return this.http.post(`${env.api}/todos`, body);

    // Mock
    body.id = this.todos.length + 1;
    this.todos.push(body);
    return of(body);
  }

  /**
   * Delete todo
   * @param id
   */
  deleteTodo(id: number): Observable<any> {
    // return this.http.delete(`${env.api}/todos/${id}`);

    // Mock
    this.todos = this.todos.filter(todo => todo.id !== id);
    return of(id);
  }
}
