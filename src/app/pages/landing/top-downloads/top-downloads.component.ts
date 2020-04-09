import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ListViewService } from '../../../services/listview.service';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Searchparams } from 'src/app/models/searchparams';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-top-downloads',
  templateUrl: './top-downloads.component.html',
  styleUrls: ['./top-downloads.component.css']
})
export class TopDownloadsComponent implements OnInit {
  subscribeunsubscribe: boolean = false;
  topDownloadsRowCartData = [];
  trtopDownloadData:any;
  selectAll:boolean;
  gridandlistview:boolean=false;

  assetId: string;
  httpClient: any;
  collectionsData: any;
  selectedCollection: string;
  constructor(private _sharedservice: SharedService,
    private listViewService: ListViewService,
    private spinner: NgxSpinnerService,
    private _dataService: DataService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {

  }
  topDownloadData: any;
  selectedRows: ItopDownload[];
  items: any;
  btnEnableDisable: boolean = true;

  searchParameters = new Searchparams();

 
  PageLimit:string="10";
  PageAfter:string="0";
  page:number=1;
  paginationFlag:boolean;

  ngOnInit() {
    this.getTopDownloadsData();
    //this.topDownladgrouping();
    $(".topd-table tr").click(function () {
    });

  }


  getTopDownloadsData() {
    //this.spinner.show();
    console.log('cars');
    this.assetId = 'c7c0b34a5fa903aacec8a0b5525cf6b8d9a016f5';
    // var serviceUrl='/otmmapi/v5/folders/'+this.assetId+'/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=full&after='+this.PageAfter+'&limit='+this.PageLimit+'&preference_id=ARTESIA.PREFERENCE.SPREADSHEETVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
    //var serviceUrl='/otmmapi/v5/folders/'+this.assetId+'/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=full&after='+this.PageAfter+'&limit='+this.PageLimit+'&preference_id=ARTESIA.PREFERENCE.SPREADSHEETVIEW.DISPLAYED_FIELDS&sort=asc_NAME'    
    var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=full&after=' + this.PageAfter + '&limit=' + this.PageLimit + '&sort=asc_NAME'

    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      console.log('in cars');
      if (window.location.host.split(':')[0] == "localhost") {
        var topdData = data.folder_children.asset_list.filter(fl => fl.data_type != "undefined");
        for (var i = 0; i < topdData.length; i++) {
          topdData[i].rendition_content.preview_content.url = "https://cdam-dev.cisco.com" + topdData[i].rendition_content.preview_content.url;
          topdData[i].isSelected = false;

        }
        this.topDownloadData = topdData;

        //this.fourTtopDownloadData = this.chunkArray(4);
      }
      else {
        var topdData = data.folder_children.asset_list.filter(fl => fl.data_type != "undefined");
        for (var i = 0; i < topdData.length; i++) {
          //topdData[i].rendition_content.preview_content.url = "https://cdam-dev.cisco.com" + topdData[i].rendition_content.preview_content.url;
          topdData[i].isSelected = false;

        }
        this.topDownloadData = topdData;
        // this.fourTtopDownloadData = this.chunkArray(4);
      }
      console.log(this.topDownloadData);
      //if(this.topDownloadData.length>10)
      this.spinner.hide();
    });
  }


  //onclick func in topdownloads
  topDownloadsData(name) {
    $('#' + name.asset_id).addClass("selected").siblings().removeClass("selected");
    var selectedLength = this.topDownloadData.filter(x => x.isSelected == true).length;
    if (selectedLength > 1) {
      this.listViewService.trRightPanel(null);
    }
    else {
      this.listViewService.trRightPanel(name);
    }
  }

   //using this function sending row data to cart
   addCartTopDownloads(cart){
    this.topDownloadsRowCartData=this._dataService.getCartOption();
    var length=this.topDownloadsRowCartData.filter(x=>x.asset_id==cart.asset_id).length;
    if(length==1 || length==0){
      this.topDownloadsRowCartData.push(cart);
    }
    this._dataService.setCartOption(this.topDownloadsRowCartData);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Asset Added to Cart Successfully' });
    console.log("cart Data:", this.topDownloadsRowCartData);
  }

  selection_context: any;
  buildAssetJson(assetid) {
    this.selection_context = {
      selection_context_param: {
        selection_context: {
          asset_ids: [assetid],
          asssetContentType: [],
          assetSubContentType: [],
          type: "com.artesia.asset.selection.AssetIdsSelectionContext",
          include_descendants: "NONE"
        }
      }
    };
    return this.selection_context;

  }

  //subscribe and unsubscribe
  subscribeAsset(obj) {
    obj.subscribed_to = true;
    var assetData = JSON.stringify(this.buildAssetJson(obj.asset_id));
    var url = "/otmmapi/v5/assets/subscriptions";
    //formdata
    let params = new HttpParams()
      .set('action', 'subscribe')
      .set('selection_context', assetData)
    this._sharedservice.postService(url, params).subscribe(result => {
      console.log('subsribeList', result);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Subscribed to 1 asset' });
    });
  }

  unSubscribeAsset(obj) {
    //this.subscribeunsubscribe=false;
    obj.subscribed_to = false;
    var deleteAssetUrl = '/otmmapi/v5/assets/subscriptions?action=un_subscribe&selection_context=%7B%22selection_context_param%22%3A%7B%22selection_context%22%3A%7B%22asset_ids%22%3A%5B%22' + obj.asset_id + '%22%5D%2C%22asssetContentType%22%3A%5B%5D%2C%22assetSubContentType%22%3A%5B%5D%2C%22type%22%3A%22com.artesia.asset.selection.AssetIdsSelectionContext%22%2C%22include_descendants%22%3A%22NONE%22%7D%7D%7D';
    this._sharedservice.deleteService(deleteAssetUrl).subscribe(result => {
      console.log('deletesSbsribeList', result);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Unsubscribed from 1 folder/asset.' });
      //this.subscribedbtnText="Subscribe";
    });
  }

  checkAll: boolean;
  checkUnAll() {
    if (this.checkAll) {
      
      this.btnEnableDisable = false;
    }
    else {
      this.btnEnableDisable = true;
    }
    for (var i = 0; i < this.topDownloadData.length; i++) {
      if (this.checkAll) {
        this.topDownloadData[i].isSelected = true;
      }
      else {
        this.topDownloadData[i].isSelected = false;

      }
    }
  }

  multiAssetDownloads() {
    var selectedAssetIds = [];
    var selectedContentType = [];
    for (let i = 0; i < this.topDownloadData.length; i++) {
      if (this.topDownloadData[i].isSelected) {
        var iframe = $('<iframe style="visibility: collapse;"></iframe>');
        $('body').append(iframe);
        var content = iframe[0].contentDocument;
        var url = '/otmmapi/v5/renditions/' + this.topDownloadData[i].rendition_content.preview_content.id;

        var form = '<form action="' + url + '" method="GET"><input type="hidden" name="disposition" value="attachment" /></form>';
        content.write(form);
        $('form', content).submit();
        setTimeout((function (iframe) {
          return function () {
            iframe.remove();
          }
        })(iframe), 2000);
      }
    }
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Assets Downloaded Successfully' });
  }

  mutltiAddtoCartDownloads() {
    for (let i = 0; i < this.topDownloadData.length; i++) {
      if (this.topDownloadData[i].isSelected) {
        this.topDownloadsRowCartData = this._dataService.getCartOption();
        var length = this.topDownloadsRowCartData.filter(x => x.asset_id == this.topDownloadData[i].asset_id).length;
        if (length == 1 || length == 0) {
          this.topDownloadsRowCartData.push(this.topDownloadData[i]);
        }
        this._dataService.setCartOption(this.topDownloadsRowCartData);
        }
     }
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Assets are Added to Cart' });
  }

  singleAssetDownload(id) {
    var url = '/otmmapi/v5/renditions/' + id + '?disposition=attachment';
    var link = document.createElement('a');
    link.href = url;
    link.click();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Asset Downloaded Successfully' });
  }

  checkUncheckAll() {
    for (var i = 0; i < this.topDownloadData.length; i++) {
      if (this.selectAll) {
        this.btnEnableDisable = false;
        this.topDownloadData[i].isSelected = true;
        
      }
      else {
        this.btnEnableDisable = true;
        this.topDownloadData[i].isSelected = false;
      }
    }
  }
  checkUncheckSingle(flag, asset_id) {
    var selectedLength = this.topDownloadData.filter(x => x.isSelected == true).length;
    if (selectedLength > 0) {
      this.btnEnableDisable = false;
      if (selectedLength > 1) {
        this.listViewService.trRightPanel(null);
      }

    }
    else {
      this.btnEnableDisable = true;
    }
    if (selectedLength == this.topDownloadData.length) {
      this.selectAll = true;
    }
    else {
      this.selectAll = false;
    }

  }

  searchKeyword: string = "";
  getSearchData() {
    this.spinner.show();
    let params = new HttpParams()
      .set('keyword_query', '(' + this.searchKeyword + ')')
      .set('load_type', 'metadata')
      .set('load_multilingual_values', 'true')
      .set('level_of_detail', 'slim')
      .set('after', this.PageAfter)
      .set('limit', this.PageLimit)
      .set('multilingual_language_code', 'en_US')
      .set('folder_filter_type', 'all')
      .set('folder_filter', this.assetId)
      .set('search_config_id', '3')
      .set('keyword_scope_id', '3')
      .set('preference_id', 'ARTESIA.PREFERENCE.SPREADSHEETVIEW.DISPLAYED_FIELDS')
      ;
    var url = "/otmmapi/v5/search/text";
    this._sharedservice.postService(url, params).subscribe(result => {
      console.log('AssetList', result);
      //this.searchParameters.totalhitcount=result.search_result_resource.search_result.total_hit_count;
      this.topDownloadData = result.search_result_resource.asset_list;

      // if(this.topDownloadData.length>0)
      // this.listViewService.listviewsortbtn(true);
      // else
      // this.listViewService.listviewsortbtn(false);


      this.spinner.hide();
    },
      (err: any) => {
        this.spinner.hide();

      }
    );
  }
  paginateNext() {
    this.PageAfter = String(this.page * 10);
    this.page = this.page - 1;
    this.getSearchData();
  }
  paginatePrev() {
    this.page = this.page - 1;
    this.PageAfter = String(this.page * 10);
    this.getSearchData();
  }
  closeResult: string;

  addToCollections(modalContent) {
    this.spinner.show();
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      ariaLabelledBy: 'modal-basic-title',
      size: 'md'
    };

    var serviceUrl = '/otmmapi/v5/lightboxes'
    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      this.selectedCollection = "";
      this.collectionsData = data.lightboxes_resource.lightbox;

      this.modalService.open(modalContent, ngbModalOptions).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      this.spinner.hide();

    },
      (err: any) => {
        this.spinner.hide();

      }
    )
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }
    // else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // }
    else {
      return `with: ${reason}`;
    }
  }
  addAssets() {
    var serviceUrl = 'otmmapi/v5/lightboxes/49e8d72a1279a604a8ae0dc54af5ac67d9d9f270/assets';

    var selection_context = {
      selection_context_param:
      {
        selection_context: {
          asset_ids: ["49e8d72a1279a604a8ae0dc54af5ac67d9d9f270"],
          asssetContentType: [],
          assetSubContentType: [],
          type: "com.artesia.asset.selection.AssetIdsSelectionContext",
          include_descendants: "ALL"
        }
      }
    };
    this._sharedservice.patchService(serviceUrl,  JSON.stringify(selection_context)
    ).subscribe(data => {
      this.selectedCollection = "";
      this.collectionsData = data.lightboxes_resource.lightbox;


      this.spinner.hide();

    },
      (err: any) => {
        this.spinner.hide();

      }
    )
  }
  createNewCollection() {

  }

}

export interface ItopDownload {
  asset_id?;
  name?;

}


// addToCollections(modalContent){
//   this.spinner.show();
//   let ngbModalOptions: NgbModalOptions = {
//     backdrop : 'static',
//     keyboard : false,
//     ariaLabelledBy: 'modal-basic-title'
// };

// var serviceUrl = '/otmmapi/v5/lightboxes'
//   this._sharedservice.getService(serviceUrl
//   ).subscribe(data => {
//     this.collectionsData=data;

//     this.modalService.open(modalContent, ngbModalOptions).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//     this.spinner.hide();

//   },
//       (err: any) => {
//           this.spinner.hide();

//       }
//   )
// }
