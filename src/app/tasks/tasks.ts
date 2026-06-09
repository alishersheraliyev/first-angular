import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, NewTask],
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
