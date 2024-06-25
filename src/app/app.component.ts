import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf} from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent, NewTaskComponent, NgFor, NgIf]
})
export class AppComponent {

    users = DUMMY_USERS;
    selectedUserId = 'u1';

    get selectedUser(){
        return this.users.find(({id}) => id ===  this.selectedUserId );
    }

    @Output() select = new EventEmitter()


    onSelectUser(id: string){
        console.log(`Selected user with id: ${id}`);
        this.selectedUserId = id;
    }


}
