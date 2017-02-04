import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../services/task.service';
import { Task } from "../interfaces/task.interface";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(private router: Router,
    private taskService: TaskService) { }
  newTask = "";
  ngOnInit() {
  }


  onBackClick() {
    this.saveTask();
    this.router.navigate(['/list']);
  }

  saveTask() {
    let tempTaskObj: Task = {
      details: this.newTask,
      labels: []
    };
    this.taskService.addNewTask(tempTaskObj);
  }

}
