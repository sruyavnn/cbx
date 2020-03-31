import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListViewService } from '../../services/listview.service';
import { HttpParams } from '@angular/common/http';
import { Searchparams } from 'src/app/models/searchparams';
import { NgxSpinnerService } from 'ngx-spinner';
import { TreeNode } from 'primeng/api';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
//import { TreeNode } from 'primeng/primeng';
declare var $:any;

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})

export class ListviewComponent implements OnInit {
  public anyData: TreeNode[];
  loading: boolean;
  searchParameters = new Searchparams();
  searchPerformflg: boolean;
  fromLeftNavOrSearch: string;
  assetId: string;
  leftNavPageLimit: string = "10";
  leftNavPageAfter: string = "0";
  selectedNode: TreeNode;
  totalRecords: number;
  childrenData: TreeNode[];
  constructor(private _dataService: DataService, private _sharedservice: SharedService,
    public router: Router, private listViewService: ListViewService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private _bcdata: BreadcrumbdataService,



  ) {
    //     this.activatedRoute.queryParams.subscribe(params => {
    //       this.assetId = params['assetId'];
    //   this._dataService.setAssetId(this.assetId);

    //       console.log(this.assetId);
    //     });
    // this.searchParameters = _dataService.getSearchOption();
    // this.fromLeftNavOrSearch = _dataService.getLeftNavOrSearch();
    // this.assetId = _dataService.getAssetId(); 
    $(document).ready(function(){
      // Add minus icon for collapse element which is open by default
      $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
      });
      
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });
  });
  }
  togCols: ItoggleCols[];
  toggleCols = new ToggleColumns();

  selectedColumns: any
  ngOnInit() {
    this.togCols = [
      { name: 'Asset State', code: 'asset_state' },
      { name: 'Expired', code: 'expired' },
      { name: 'Imported By', code: 'import_user_name' },
      { name: 'Mime Type', code: 'mime_type' },
      { name: 'Subscribe', code: 'subscribed_to' }
    ]
    // this.listViewService.listFlagSort.subscribe(c => {
    //   this.searchPerformflg = c;
    // });


    //   if(this.fromLeftNavOrSearch=="search"){
    //   this.getSearchData();
    // }
    // else{
    //   this.getTotalPageCountLeftNav();
    // }
  }
  onRowSelect(event) {
    //this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin});
}

  getTotalPageCountLeftNav() {
    this.spinner.show();

    var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D'
    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      //this._dataService.setOption(data.folder_children.asset_list);

      //this.anyData = data.folder_children.asset_list;
      this.searchParameters.totalhitcount = data.folder_resource.folder.container_child_counts.total_child_count;
      if (Number(this.searchParameters.totalhitcount) > 0) {
        this.listViewService.listviewsortbtn(true);
      }
      else {
        this.listViewService.listviewsortbtn(false);
      }
      this.getMainData();
    },
      (err: any) => {
        this.spinner.hide();

      })
  }

  getMainData() {
    this.spinner.show();
    //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
    // var serviceUrl='/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after='+this.leftNavPageAfter+'&limit='+this.leftNavPageLimit+'&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
    var serviceUrl = '/otmmapi/v5/folders/fba758190e7008bd4d73490c4ace221f36b2a1be/folders?load_type=system&limit=0';

    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      //this._dataService.setOption(data.folder_children.asset_list);

      //this.anyData = data.folder_children.asset_list;
      this.constructMainTreeTable(data.folders_resource.folder_list);
      //this.searchParameters.totalhitcount='0';
      this.spinner.hide();

    },
      (err: any) => {
        this.spinner.hide();

      })
  }

  constructMainTreeTable(treeData) {
    this.anyData = [];
    for (let i = 0; i < treeData.length; i++) {
      let node;
      if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
        node = {
          data: {
            asset_id: treeData[i].asset_id,
            name: treeData[i].name,
            date_last_updated: treeData[i].date_last_updated,
            url: './cbx/images/thumbnail_icons/folder-50px.png',
            //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
            download_count: 10 //need actual value
          },
          leaf: false,
          collapsedIcon: './cbx/images/thumbnail_icons/folder-50px.png',
          expandedIcon: './cbx/images/thumbnail_icons/folder-50px.png'
        };
      }
       else if(treeData[i].data_type== 'CONTAINER' && treeData[i].rendition_content){
         node = {
          data: {  
            asset_id:treeData[i].asset_id,
              name: treeData[i].name,
              date_last_updated:treeData[i].date_last_updated,
              url:treeData[i].rendition_content.thumbnail_content.url,
              //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
              download_count: 10 //need actual value
          },
          leaf: false
      };
      }

      else if(treeData[i].data_type== undefined && treeData[i].rendition_content.preview_content){
         node = {
          data: {  
            asset_id:treeData[i].asset_id,
              name: treeData[i].name,
              date_last_updated:treeData[i].date_last_updated,
              url:treeData[i].rendition_content.thumbnail_content.url,
              content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
              download_count: 10 //need actual value
          },
          leaf: true
      };
      }
      else if(treeData[i].data_type== undefined && treeData[i].rendition_content.pdf_preview_content){
        node = {
         data: {  
           asset_id:treeData[i].asset_id,
             name: treeData[i].name,
             date_last_updated:treeData[i].date_last_updated,
             url:treeData[i].rendition_content.thumbnail_content.url,
             content_size: treeData[i].rendition_content.pdf_preview_content.content_size/1024/1024 ,
             download_count: 10 //need actual value
         },
         leaf: true
     };
     }
      this.anyData.push(node);
    }
    console.log('tree data ', this.anyData);

  }
  constructChildrenTreeTable(treeData, event) {

    this.childrenData = [];
    for (let i = 0; i < treeData.length; i++) {
      let node;
      if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
        node = {
          data: {
            asset_id: treeData[i].asset_id,
            name: treeData[i].name,
            date_last_updated: treeData[i].date_last_updated,
            url: './cbx/images/thumbnail_icons/folder-50px.png',
            //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
            download_count: 10 //need actual value
          },
          leaf: false,
          collapsedIcon: './cbx/images/thumbnail_icons/folder-50px.png',
          expandedIcon: './cbx/images/thumbnail_icons/folder-50px.png'
        };
      }
      else if(treeData[i].data_type== 'CONTAINER' && treeData[i].rendition_content){
         node = {
          data: {  
            asset_id:treeData[i].asset_id,
              name: treeData[i].name,
              date_last_updated:treeData[i].date_last_updated,
              url:treeData[i].rendition_content.thumbnail_content.url,
              //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
              download_count: 10 //need actual value
          },
          leaf: false
      };
      }

      else if(treeData[i].data_type== undefined && treeData[i].rendition_content.preview_content){
         node = {
          data: {  
            asset_id:treeData[i].asset_id,
              name: treeData[i].name,
              date_last_updated:treeData[i].date_last_updated,
              url:treeData[i].rendition_content.thumbnail_content.url,
              content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
              download_count: 10 //need actual value
          },
          leaf: true
      };
      }
      else if(treeData[i].data_type== undefined && treeData[i].rendition_content.pdf_preview_content){
        node = {
         data: {  
           asset_id:treeData[i].asset_id,
             name: treeData[i].name,
             date_last_updated:treeData[i].date_last_updated,
             url:treeData[i].rendition_content.thumbnail_content.url,
             content_size: treeData[i].rendition_content.pdf_preview_content.content_size/1024/1024 ,
             download_count: 10 //need actual value
         },
         leaf: true
     };
     }
      this.childrenData.push(node);
    }
    console.log('tree children data ', this.childrenData);

  }
  assetNameClick(rowData){

    this.spinner.show();
    this.assetId=rowData.asset_id;
    //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
   var serviceUrl='/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after='+this.leftNavPageAfter+'&limit='+this.leftNavPageLimit+'&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';

  this._sharedservice.getService(serviceUrl
  ).subscribe(data => {
    this.constructMainTreeTable(data.folder_children.asset_list);
    // this.listViewService.bcFun(rowData);
    // this._bcdata.bcfunction(rowData);
    this.spinner.hide();

  },
    (err: any) => {
      this.spinner.hide();

    })
  }
  loadNodes(event) {
    
    this.getMainData();


  }
  getChildrenData(event){
    this.spinner.show();

      //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
     var serviceUrl='/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after='+this.leftNavPageAfter+'&limit='+this.leftNavPageLimit+'&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';

    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      //this._dataService.setOption(data.folder_children.asset_list);

      //this.anyData = data.folder_children.asset_list;
      this.constructChildrenTreeTable(data.folder_children.asset_list, event);
      //this.searchParameters.totalhitcount='0';

      const node = event.node;
      node.children = this.childrenData;
      this.anyData = [...this.anyData];
      this.spinner.hide();

    },
      (err: any) => {
        this.spinner.hide();

      })
  }
  onNodeExpand(event) {
    
    this.assetId=event.node.data.asset_id;
    this.getChildrenData(event);
           
            //this.files = [...this.files];

  }
  assetsViewPages(param, id) {
    this._dataService.setAssetId(id);
    if (param == 'asset') {
      console.log(id)
      this.router.navigate(['layout/assetdetails'], { queryParams: { assetId: id } });

    }
    else {
      this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
      //setTimeout(() => this.router.navigate(['layout/listview']));
      setTimeout(() => this.router.navigate(['layout/listview'], { queryParams: { assetId: id } }));


    }
  }

  getSearchData() {
    this.spinner.show();
    let params = new HttpParams()
      .set('keyword_query', '(' + this.searchParameters.searchKeyword + ')')
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
      .set('limit', this.searchParameters.limit);
    var url = "/otmmapi/v5/search/text";
    this._sharedservice.postService(url, params).subscribe(result => {
      //console.log('AssetList', result);  
      this.searchParameters.totalhitcount = result.search_result_resource.search_result.total_hit_count;
      this.anyData = result.search_result_resource.asset_list;

      if (this.anyData.length > 0)
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
  paginate(param) {
    if (this.fromLeftNavOrSearch == "search") {
      this.searchParameters.after = param.first;
      this.getSearchData();
    }
    else {
      this.leftNavPageAfter = param.first;
      this.getTotalPageCountLeftNav();
    }
  }

  ColSelectUnselect(obj) {
    console.log(obj);
    if (obj.value.length == 0) {
      this.toggleCols = new ToggleColumns();
    }
    else if (obj.value.length == this.togCols.length) {
      this.toggleCols.asset_state_visible = true;
      this.toggleCols.expired_visible = true;
      this.toggleCols.import_user_name_visible = true;
      this.toggleCols.mime_type_visible = true;
      this.toggleCols.subscribed_to_visible = true;

    }
    if (obj.itemValue != undefined) {
      if (obj.itemValue.code == "asset_state")
        this.toggleCols.asset_state_visible = !this.toggleCols.asset_state_visible;
      else if (obj.itemValue.code == "expired")
        this.toggleCols.expired_visible = !this.toggleCols.expired_visible;
      else if (obj.itemValue.code == "import_user_name")
        this.toggleCols.import_user_name_visible = !this.toggleCols.import_user_name_visible;
      else if (obj.itemValue.code == "mime_type")
        this.toggleCols.mime_type_visible = !this.toggleCols.mime_type_visible;
      else if (obj.itemValue.code == "subscribed_to")
        this.toggleCols.subscribed_to_visible = !this.toggleCols.subscribed_to_visible;

    }
  }

}

export class ToggleColumns {
  asset_state_visible: boolean = false;
  expired_visible: boolean = false;
  import_user_name_visible: boolean = false;
  mime_type_visible: boolean = false;
  subscribed_to_visible: boolean = false;
}
interface ItoggleCols {
  name: string,
  code: string
}
export interface IlistviewSelectedRow {
  asset_id?;
  name?;

}