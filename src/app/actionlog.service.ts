import { Injectable } from '@angular/core';
import { ActionLog } from './actionlog.model';

@Injectable({
  providedIn: 'root'
})
export class ActionlogService {

  constructor() {


   }
  printLog(ac: ActionLog) {
   console.log(ac);
  }


}
