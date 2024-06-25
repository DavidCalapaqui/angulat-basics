import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) showNewTask!: boolean;
  @Output() showNewTaskEmitter = new EventEmitter<boolean>()


  onShowNewTask(){
    this.showNewTaskEmitter.emit(this.showNewTask);
  }
}
