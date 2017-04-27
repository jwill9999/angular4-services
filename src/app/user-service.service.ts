
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  constructor() { }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

    onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

  }

}


//Here we have a service which has two methods
// onSetToInactive
// onSetToActive

// This service can be injected into any constructor and used by that class
// be mindful however of where you provide the service
// Here its provided in the app.module globally
