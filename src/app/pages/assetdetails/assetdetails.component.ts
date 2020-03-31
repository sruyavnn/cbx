import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-assetdetails',
  templateUrl: './assetdetails.component.html',
  styleUrls: ['./assetdetails.component.css']
})
export class AssetdetailsComponent implements OnInit {
  subscribedbtnText: string;
  public resumeName;
  constructor( private _sharedservice: SharedService, 
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService) {
  }   
  assetId:string;
    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
        this.assetId = params['assetId'];
        console.log(this.assetId);
      });
      this.searchAssetsList();
    }  

    public assetServiceData;
    searchAssetsList(){
          this._sharedservice.getService('/otmmapi/v5/assets/'+this.assetId+'?load_type=custom&level_of_detail=slim&data_load_request=%7B%22data_load_request%22%3A%7B%22load_multilingual_field_values%22%3A%22true%22%2C%22load_subscribed_to%22%3A%22true%22%2C%22load_asset_content_info%22%3A%22true%22%2C%22load_metadata%22%3A%22true%22%2C%22load_inherited_metadata%22%3A%22true%22%2C%22load_thumbnail_info%22%3A%22true%22%2C%22load_preview_info%22%3A%22true%22%2C%20%22load_pdf_preview_info%22%3A%22true%22%2C%20%22load_3d_preview_info%22%20%3A%20%22true%22%2C%22load_destination_links%22%3A%22true%22%2C%20%22load_security_policies%22%3A%22true%22%2C%22load_path%22%3A%22true%22%7D%7D'
          ).subscribe(result => {
           this.assetServiceData = result.asset_resource.asset;
           if(this.assetServiceData.subscribed_to){
            this.subscribedbtnText="Unsubscribe";
           }
           else{
            this.subscribedbtnText="Subscribe";
           }
        });
    }

  selection_context:any;
  buildAssetJson(){
    this.selection_context={selection_context_param:{selection_context:{asset_ids:[this.assetId],
      asssetContentType:[],
      assetSubContentType:[],
      type: "com.artesia.asset.selection.AssetIdsSelectionContext",
      include_descendants: "NONE"
    }}};
    return this.selection_context;
    
  }

  subscribeAsset(){
    if(this.subscribedbtnText=="Subscribe"){
    var assetData = JSON.stringify(this.buildAssetJson());
        //formdata
        let params = new HttpParams()
        .set('action', 'subscribe')
        .set('selection_context', assetData)
    
      var url = "/otmmapi/v5/assets/subscriptions";

      this._sharedservice.postService(url, params).subscribe(result => {
      //console.log('subsribeList', result);  
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Subscribed to 1 asset' });
      this.subscribedbtnText="Unsubscribe";
    });
  }
  else
    {
       var deleteAssetUrl ='/otmmapi/v5/assets/subscriptions?action=un_subscribe&selection_context=%7B%22selection_context_param%22%3A%7B%22selection_context%22%3A%7B%22asset_ids%22%3A%5B%22'+this.assetId+'%22%5D%2C%22asssetContentType%22%3A%5B%5D%2C%22assetSubContentType%22%3A%5B%5D%2C%22type%22%3A%22com.artesia.asset.selection.AssetIdsSelectionContext%22%2C%22include_descendants%22%3A%22NONE%22%7D%7D%7D';
      this._sharedservice.deleteService(deleteAssetUrl).subscribe(result => {
        //console.log('deletesSbsribeList', result);  
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Unsubscribed from 1 folder/asset.' });
        this.subscribedbtnText="Subscribe";
      });

    }
  }

  downloadAssets(id){
    //let params = new HttpParams()
    //.set('disposition', 'attachment')
    var url = '/otmmapi/v5/renditions/'+id+'?disposition=attachment';
    var link = document.createElement('a');
    link.href = url;
    link.click();
  //this._sharedservice.getService_textResponse(url).subscribe(result => {
  //console.log('downloadAsset', result);  
  }
  
}

