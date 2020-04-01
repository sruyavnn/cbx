import { Component, OnInit } from '@angular/core';
import { ListViewService } from 'src/app/services/listview.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  
  trtopDownloadData;
  trListViewData;
  trProfileData;
  constructor(private listViewService:ListViewService) { }

  ngOnInit() {
    this.listViewService.topDownload.subscribe(a=> {
      this.trtopDownloadData=[];//empty
      this.trtopDownloadData=a;
    console.log('row data topdownload:',this.trtopDownloadData);
    });

    this.listViewService.trListView.subscribe(b=> {
      this.trListViewData=[];//empty
      this.trListViewData=b;
      
    console.log('row data ListView:',this.trListViewData);
    });

 
  }

  removeTopDownloadData(){
    this.trtopDownloadData=null
  }

  removeListViewRPData(){
    this.trListViewData=null
  }
 

  rpRowImgDownload(id){
    var url = '/otmmapi/v5/renditions/'+id+'?disposition=attachment';
    var link = document.createElement('a');
    link.href = url;
    link.click();
  }

  rpRowFolderDownload(id){
    // var url = '/otmmapi/v5/renditions/'+id+'?disposition=attachment';
    // var link = document.createElement('a');
    // link.href = url;
    // link.click();
    alert("folder download")
  }
}
