import { Component, OnInit } from '@angular/core';
import { ListViewService } from 'src/app/services/listview.service';
import { DataService } from 'src/app/services/data.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  topDownloadsRowCartData = [];
  trtopDownloadData;
  trListViewData;
  trProfileData;
  constructor(private listViewService:ListViewService,
    private _dataService: DataService,
    private messageService: MessageService) { }

  ngOnInit() {
    //receiving top downloads row data to right panel
    this.listViewService.topDownload.subscribe(a=> {
      this.trtopDownloadData=[];//empty
      this.trtopDownloadData=a;
    console.log('row data topdownload:',this.trtopDownloadData);
    });

    //receiving treelistview row data to right panel
    // this.listViewService.trListView.subscribe(b=> {
    //   this.trListViewData=[];//empty
    //   this.trListViewData=b;
      
    // console.log('row data ListView:',this.trListViewData);
    // });

 
  }

   //using this function sending row data to cart
   addCartTopDownloads(cart){
    this.topDownloadsRowCartData=this._dataService.getCartOption();
    var length=this.topDownloadsRowCartData.filter(x=>x.asset_id==cart.asset_id).length;
    if(length==0){
      this.topDownloadsRowCartData.push(cart);
    }
    
    this._dataService.setCartOption(this.topDownloadsRowCartData);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added 1 Asset to Cart' });
    console.log("cart Data:", this.topDownloadsRowCartData);
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
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '1 Image Downloaded Successfully' });
  }

  rpRowFolderDownload(id){
    // var url = '/otmmapi/v5/renditions/'+id+'?disposition=attachment';
    // var link = document.createElement('a');
    // link.href = url;
    // link.click();
    alert("folder download")
  }
}
