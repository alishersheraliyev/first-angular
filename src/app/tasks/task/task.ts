import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskType } from './task.model';
import { Card } from '../../shared/card/card';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
