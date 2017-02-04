import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { TaskService } from '../services/task.service';

import { Task } from "../interfaces/task.interface";

@Component({
  selector: 'app-opus-list',
  templateUrl: './opus-list.component.html',
  styleUrls: ['./opus-list.component.css']
})
export class OpusListComponent implements OnInit {

  constructor(private router: Router, private taskService: TaskService) { }
  taskList: Task[] = [];

  ngOnInit() {
    this.taskList = this.taskService.getAllTask();
  }

  openNewItem() {
    this.router.navigate(['/new']);
  }

}
