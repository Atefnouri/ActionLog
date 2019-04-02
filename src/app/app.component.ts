import { Component, OnInit } from '@angular/core';
import { ActionlogService } from './actionlog.service';
import { ActionLog } from './actionlog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ActionLog';
  public ac: ActionLog;

  constructor(private actionLogService:ActionlogService){
    this.ac = {
      AlDate : new Date(),
      AlDesc: 'test Action Log',
      AlObject: {  id:15,user:'atef'},
      AlUlrSnap: 'user/id/details',
      AlIp: '192.168.0.10',
      AlUser: '@AtefNouri',
    }
  }

  ngOnInit = () => {
  }

  public callLog = () => {
    this.actionLogService.printLog(this.ac);
  }

}
