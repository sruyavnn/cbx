import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
import { ListViewService } from 'src/app/services/listview.service';
import { SearchbsService } from 'src/app/services/searchbs.service';
import { HttpParams } from '@angular/common/http';
import { Searchparams } from 'src/app/models/searchparams';
import {MessageService} from 'primeng/api';

declare var $:any;
@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  public anyData: any;
  assetHover: boolean = true;
  searchParameters =new Searchparams();
  searchPerformflg: boolean;
  pagingflg: boolean;
  fromLeftNavOrSearch:string="";
  assetId: any;
  leftNavPageLimit:string="10";
  leftNavPageAfter:string="0";
  public assetData: any;
  assetIdSubUnSub: any;
  
  constructor(
    private _dataService: DataService,
    //private spinner: NgxSpinnerService
    private _sharedservice: SharedService,
    public router: Router,
    private spinner: NgxSpinnerService,
    private listViewService: ListViewService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService

  ) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.assetId = params['assetId'];
      console.log(this.assetId);
      this._dataService.setAssetId(this.assetId);
    });
    this.searchParameters = _dataService.getSearchOption();
    this.fromLeftNavOrSearch = _dataService.getLeftNavOrSearch();
    this.assetId = _dataService.getAssetId();

    //this.anyData = _dataService.getOption();


  }

  ngOnInit() {
   
    $('[data-toggle="tooltip"]').tooltip();
    this.listViewService.listFlagSort.subscribe(c => {
      this.searchPerformflg = c;
    });
 

    if(this.fromLeftNavOrSearch=="search"){
    this.getSearchData();
  }
  else{
    this.getTotalPageCountLeftNav();
  }

  }

  getTotalPageCountLeftNav(){
    this.spinner.show();
    var serviceUrl='/otmmapi/v5/folders/'+ this.assetId +'?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D'
    this._sharedservice.getService(serviceUrl
      ).subscribe(data => {
        //this._dataService.setOption(data.folder_children.asset_list);
  
        //this.anyData = data.folder_children.asset_list;
       this.searchParameters.totalhitcount=data.folder_resource.folder.container_child_counts.total_child_count;
       if(Number(this.searchParameters.totalhitcount)>0){
        this.listViewService.listviewsortbtn(true);
       }
       else{
        this.listViewService.listviewsortbtn(false);
       }
       this.getLeftNavData(); 
      },
      (err: any) => {
        this.spinner.hide();

      }
      )
  }

  getLeftNavData() {
    //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
    var serviceUrl='/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after='+this.leftNavPageAfter+'&limit='+this.leftNavPageLimit+'&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      //this._dataService.setOption(data.folder_children.asset_list);

      this.anyData = data.folder_children.asset_list;
     //this.searchParameters.totalhitcount='0';
     this.spinner.hide();
    },
    (err: any) => {
      this.spinner.hide();

    })
  }

  assetOver() {
    this.assetHover = false;
  }
  assetOut() {
    this.assetHover = true;
  }
  folderAssetClick(objParam) {
    if (objParam.data_type == undefined) {
      //asset
      this.router.navigate(['layout/assetdetails'], { queryParams: { assetId: objParam.asset_id } });
    }
    else {
      
       this.assetId=objParam.asset_id;
      // this.getTotalPageCountLeftNav();
      this._dataService.setAssetId(this.assetId);
      //below line form breadcurmb and expand tree when click on right pan
      //this.listViewService.clickRightPanFun(this.assetId);


      this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
      //setTimeout(() => this.router.navigate(['layout/listview']));
      setTimeout(() => this.router.navigate(['layout/gridview'], { queryParams: { assetId: this.assetId } }));
    }
  }
  
  getSearchData() {
  this.spinner.show();
  let params = new HttpParams()
  .set('keyword_query', '('+this.searchParameters.searchKeyword+')')
  .set('load_type', 'metadata')
  .set('load_multilingual_values', 'true')
  .set('level_of_detail', 'slim')
  .set('multilingual_language_code', 'en_US')
  .set('folder_filter_type', 'all')
  .set('folder_filter', 'ARTESIA.PUBLIC.TREEN')
  .set('search_config_id', '3')
  .set('keyword_scope_id', '3')
  .set('preference_id', 'ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS')
  .set('after', this.searchParameters.after)
  .set('limit',  this.searchParameters.limit);
  var url = "/otmmapi/v5/search/text";
  this._sharedservice.postService(url, params).subscribe(result => {
    console.log('AssetList', result);  
    this.searchParameters.totalhitcount=result.search_result_resource.search_result.total_hit_count;
    this.anyData=result.search_result_resource.asset_list;

    if(this.anyData.length>0)
    this.listViewService.listviewsortbtn(true);
    else
    this.listViewService.listviewsortbtn(false);


    this.spinner.hide();
  },
  (err: any) => {
    this.spinner.hide();

  }
  );
}
paginate(param){
  if(this.fromLeftNavOrSearch=="search"){
    this.searchParameters.after=param.first;
    this.getSearchData();
  }
  else{
    this.leftNavPageAfter=param.first;
    this.getTotalPageCountLeftNav();
  }
}

copyLink(objdata){
  var link="";
  if(objdata.data_type== 'CONTAINER'){
    link=window.location.href.split('=')[0]+"="+objdata.asset_id;
  }
  else
  {
    link=window.location.href.split('=')[0].replace('gridview','assetdetails')+"="+objdata.asset_id;
  }
  const event = (e: ClipboardEvent) => {
    e.clipboardData.setData('text/plain', link);
    e.preventDefault();
    // ...('copy', e), as event is outside scope
    document.removeEventListener('copy',event);
}
document.addEventListener('copy', event);
document.execCommand('copy');
this.messageService.add({ severity: 'success', summary: 'Success', detail: objdata.name+' link copied to clipboard' });


}



 //Not using this function
 getFoldersData(assetId) {
  this.spinner.show();
  //var url = '/otmmapi/v5/folders/' + assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
  var serviceUrl='/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after='+this.leftNavPageAfter+'&limit='+this.leftNavPageLimit+'&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';

  this._sharedservice.getService(serviceUrl
  ).subscribe(data => {
    console.log('in leftnav');
    this.anyData = data.folder_children.asset_list;
    //this.assetData = data.folders_resource.folder_list.filter(filt=>filt.data_type !="CONTAINER");
    this.spinner.hide();

  },
    (err: any) => {
      this.spinner.hide();

    })
    ;
}
selection_context:any;
buildAssetJson(){
  this.selection_context={selection_context_param:{selection_context:{asset_ids:[this.assetIdSubUnSub],
    asssetContentType:[],
    assetSubContentType:[],
    type: "com.artesia.asset.selection.AssetIdsSelectionContext",
    include_descendants: "NONE"
  }}};
  return this.selection_context;
  
}
subscribeFolder(obj){
  this.assetIdSubUnSub=obj.asset_id;
  var assetData = JSON.stringify(this.buildAssetJson());
  //formdata
  let params = new HttpParams()
  .set('action', 'subscribe')
  .set('selection_context', assetData)

var url = "/otmmapi/v5/assets/subscriptions";

this._sharedservice.postService(url, params).subscribe(result => {
console.log('subsribeList', result);  
// if(result.status==200){
//   //toaster
this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Subscribed to 1 asset' });
obj.subscribed_to=true;

// }    
});
}

unSubscribeFolder(obj){
  this.assetIdSubUnSub=obj.asset_id;

  var deleteAssetUrl ='/otmmapi/v5/assets/subscriptions?action=un_subscribe&selection_context=%7B%22selection_context_param%22%3A%7B%22selection_context%22%3A%7B%22asset_ids%22%3A%5B%22'+this.assetIdSubUnSub+'%22%5D%2C%22asssetContentType%22%3A%5B%5D%2C%22assetSubContentType%22%3A%5B%5D%2C%22type%22%3A%22com.artesia.asset.selection.AssetIdsSelectionContext%22%2C%22include_descendants%22%3A%22NONE%22%7D%7D%7D';
      this._sharedservice.deleteService(deleteAssetUrl).subscribe(result => {
        console.log('deletesSbsribeList', result);  
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Unsubscribed from 1 folder/asset.' });
        obj.subscribed_to=false;
      });
}
}
