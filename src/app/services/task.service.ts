import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Task } from "../interfaces/task.interface";

@Injectable()
export class TaskService {

  taskList: Task[] = [];
  task = new Subject<Task>();
  task$ = this.task.asObservable();

  constructor() { }

  addNewTask(taskDetails: Task) {
    this.taskList.push(taskDetails);
    //this.task.next(taskDetails);
  }
  getAllTask() {
    return this.taskList;
  }

}
