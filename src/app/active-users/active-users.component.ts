import { CountServiceService } from './../count-service.service';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];

  constructor(private userServiceService: UserServiceService, private countServiceService: CountServiceService) { }

  ngOnInit() {
    this.users = this.userServiceService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userServiceService.onSetToInactive(id)
    this.countServiceService.deleteCount();
  }
}


// Here we are injecting services into our constructor and using them in our methods

// OnInit gets data on initialisation via a service
