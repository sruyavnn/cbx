import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import {ListViewService} from '../../../services/listview.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
  selector: 'app-top-downloads',
  templateUrl: './top-downloads.component.html',
  styleUrls: ['./top-downloads.component.css']
})
export class TopDownloadsComponent implements OnInit {
  trtopDownloadData:any;
  selectAll:boolean;
  constructor(private _sharedservice: SharedService, private listViewService: ListViewService, private spinner: NgxSpinnerService,) {
    
  }
  topDownloadData: any;
  selectedRows: ItopDownload[];
  items: any;
  btnEnableDisable: boolean =  true;

  ngOnInit() {
    this.getTopDownloadsData();
    //this.topDownladgrouping();
    $(".topd-table tr").click(function(){
      
     
  });​
 
  } 
 
  getTopDownloadsData() {
    console.log('cars');

    this._sharedservice.getService('/otmmapi/v5/folders/c7c0b34a5fa903aacec8a0b5525cf6b8d9a016f5/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
    ).subscribe(data => {
      console.log('in cars');

      if (window.location.host.split(':')[0] == "localhost") {
        var topdData = data.folder_children.asset_list.filter(fl => fl.data_type != "undefined");
        for (var i = 0; i < topdData.length; i++) {
          topdData[i].rendition_content.preview_content.url = "https://cdam-dev.cisco.com" + topdData[i].rendition_content.preview_content.url;
          topdData[i].isSelected=false;
        
        }
        this.topDownloadData = topdData;

        //this.fourTtopDownloadData = this.chunkArray(4);
      }
      else {
        var topdData  = data.folder_children.asset_list.filter(fl => fl.data_type != "undefined");
        for (var i = 0; i < topdData.length; i++) {
          //topdData[i].rendition_content.preview_content.url = "https://cdam-dev.cisco.com" + topdData[i].rendition_content.preview_content.url;
          topdData[i].isSelected=false;
        
        }
        this.topDownloadData = topdData;
        // this.fourTtopDownloadData = this.chunkArray(4);
      }
      console.log(this.topDownloadData);
    });
  }

  //onclick func in topdownloads
  topDownloadsData(name){
    $('#' + name.asset_id).addClass("selected").siblings().removeClass("selected");
    this.listViewService.trRightPanel(name);
  }





  checkAll:boolean;
  checkUnAll(){
    if(this.checkAll){
      this.btnEnableDisable = false;
    }
    else {
      this.btnEnableDisable = true;
    }
      for (var i = 0; i < this.topDownloadData.length; i++) {
       if(this.checkAll){
          this.topDownloadData[i].isSelected=true;
      }
      else{
        this.topDownloadData[i].isSelected=false;

      }
    }
  }


  oneSelected(data){
    if(data.isSelected){
      this.topDownloadData.filter(x=>x.asset_id==data.asset_id)[0].isSelected=false;
    }
    else{
      this.topDownloadData.filter(x=>x.asset_id==data.asset_id)[0].isSelected=true;
    }
    if(this.topDownloadData.filter(x=>x.isSelected).length==this.topDownloadData.length){
      this.checkAll=true;
    }
    else{
      this.checkAll=false;
    }
    if(this.topDownloadData.filter(x=>x.isSelected).length>0){
      this.btnEnableDisable = true;
    }
    else {
      this.btnEnableDisable = false;
    }
  }
}

export interface ItopDownload {
  asset_id?;
  name?;

}


// checkUncheckAll() {
//   for (var i = 0; i < this.topDownloadData.length; i++) {
//     this.topDownloadData[i].isSelected = this.selectAll;
//   }
//   this.getCheckedItemList();
// }
// isAllSelected() {
//   this.selectAll = this.topDownloadData.every(function(item:any) {
//       return item.isSelected == true;
//     })
//   this.getCheckedItemList();
//  if(this.topDownloadData.length==this.checkedList.length){
//   this.selectAll==true;
//  }
//  else{
//   this.selectAll==false;

//  }
// }
// checkedList:any;
// getCheckedItemList(){
//   this.checkedList = [];
  
//   for (var i = 0; i < this.topDownloadData.length; i++) {
//     if(this.topDownloadData[i].isSelected)
//     this.checkedList.push(this.topDownloadData[i]);
//   }
//   //this.checkedList = JSON.stringify(this.checkedList);
 
// }