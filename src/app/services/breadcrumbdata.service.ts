
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
//import { bcMenuItem } from '../models/breadcrumb';

@Injectable({
    providedIn: 'root'
  })
export class BreadcrumbdataService {
    counter = 1;
    count: BehaviorSubject<number>;

    flgS=false;
    flgSort: BehaviorSubject<boolean>;


    //bcObj : bcMenuItem[];
    //bcObjArr: BehaviorSubject<bcMenuItem[]>;

    breadCrumbObj:any;
    breadCrumbBS:BehaviorSubject<any>;
    arr:any;
    //items: bcMenuItem[];

    searchObj:any;
    searchBS:BehaviorSubject<any>;

    constructor() {
      this.flgSort  = new BehaviorSubject(this.flgS);
      this.count  = new BehaviorSubject(this.counter);
      //this.bcObjArr  = new BehaviorSubject(this.bcObj);
      this.breadCrumbBS  = new BehaviorSubject(this.breadCrumbObj);
      this.searchBS  = new BehaviorSubject(this.searchObj);


    }
  
    nextCount() {
      this.count.next(++ this.counter);
    }
    bcnextCount(arr) {
              
        //this.bcObjArr.next(arr);
      }
      breadcrumbsfunction(param){
        this.breadCrumbBS.next(param);
      }
      searchfunction(param){
        this.searchBS.next(param);
      }
      sortbtn(flg) {
              
        this.flgSort.next(flg);
      }
}