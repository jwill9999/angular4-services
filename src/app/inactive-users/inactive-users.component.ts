import { CountServiceService } from './../count-service.service';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users = [];

  constructor(private userServiceService: UserServiceService, private countServiceService: CountServiceService) { }

  ngOnInit() {
    this.users = this.userServiceService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userServiceService.onSetToActive(id);
    this.countServiceService.addCount();

  }
}

// Here we are injecting services into our constructor and using them in our methods
// OnInit gets data on initialisation via a service
