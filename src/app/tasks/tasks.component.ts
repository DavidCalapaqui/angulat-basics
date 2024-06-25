import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;

  showNewTask = false;


  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master angular',
      summary: 'Learn all the basic and advanced features',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master angular',
      summary: 'Learn all the basic and advanced features',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Master angular',
      summary: 'Learn all the basic and advanced features',
      dueDate: '2025-12-31'
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }


  onCompleteTask(id: string) {
    //
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onNewTaskClick() {
    this.showNewTask = !this.showNewTask;
    console.log(`Showinr o hidding new task form: ${this.showNewTask}`);
  }

  getShowNewTask(){
    return this.getShowNewTask
  }


}
