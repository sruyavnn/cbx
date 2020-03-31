
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
//import { bcMenuItem } from '../models/breadcrumb';

@Injectable({
    providedIn: 'root'
  })
export class SearchbsService {
  
    searchObj:any;
    searchBS:BehaviorSubject<any>;

    constructor() {
     
      this.searchBS  = new BehaviorSubject(this.searchObj);


    }
  
    
      searchfunction(param){
        this.searchBS.next(param);
      }

}