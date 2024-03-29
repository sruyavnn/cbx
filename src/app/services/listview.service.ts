import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListViewService {
  //sending top downloads row data to right panel
  trtopDownloadData:any;
  topDownload:BehaviorSubject<any>;

  //sending treelistview row data to right panel
  trListViewData:any;
  trListView:BehaviorSubject<any>;

  listFlags:false;
  listFlagSort: BehaviorSubject<boolean>;

  pagingObj:any;
  pagingBS:BehaviorSubject<boolean>;

  rightPanObj:any;
  rightPanBS:BehaviorSubject<any>;

  leftnavObj:any;
  leftnavBS:BehaviorSubject<boolean>;

  bcObjBS:any;
  bcArrBS:BehaviorSubject<any>;

  constructor() {
    this.listFlagSort  = new BehaviorSubject(this.listFlags);
    this.pagingBS  = new BehaviorSubject(this.pagingObj);
    this.leftnavBS  = new BehaviorSubject(this.leftnavObj);
    this.rightPanBS  = new BehaviorSubject(this.rightPanObj);
    //sending top downloads row data to right panel
    this.topDownload  = new BehaviorSubject(this.trtopDownloadData);
    //sending treelistview row data to right panel
    this.trListView  = new BehaviorSubject(this.trListViewData);

    this.bcArrBS  = new BehaviorSubject(this.bcObjBS);
  }
 //sending top downloads row data to right panel
  trRightPanel(newUser){
    this.topDownload.next(newUser);
  }
//sending treelistview row data to right panel
  trListViewRP(listviewUser){
    this.trListView.next(listviewUser);
  }

  listviewsortbtn(flag) {
    this.listFlagSort.next(flag);
  }

  clickRightPanFun(obj) {
    this.rightPanBS.next(obj);
  }

  pagingfunction(flag){
    this.pagingBS.next(flag);
  }
  fromLeftNavfunction(param){
    this.leftnavBS.next(param);
  }
  bcFun(param){
    this.bcArrBS.next(param);
  }
}