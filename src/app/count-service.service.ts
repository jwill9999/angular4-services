import { Injectable } from '@angular/core';

@Injectable()
export class CountServiceService {
  addcount = 0;
  deletecount = 0;

  constructor() { }

  ngOnInit(){

}

  addCount(){
    this.addcount++;
    console.log(this.addcount)
  }

  deleteCount(){
    this.deletecount++;
    console.log(this.deletecount)
  }

}

//Here we have a service which has two methods
// addCount
// deleteCount

// This service can be injected into any constructor and used by that class
// be mindful however of where you provide the service
// Here its provided in the app.module globally
