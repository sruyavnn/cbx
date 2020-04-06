
import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListViewService } from '../../services/listview.service';
import { HttpParams } from '@angular/common/http';
import { Searchparams } from 'src/app/models/searchparams';
import { NgxSpinnerService } from 'ngx-spinner';
import { TreeNode } from 'primeng/api';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
declare var $: any;

@Component({
    selector: 'app-treelistview',
    templateUrl: './treelistview.component.html',
    styleUrls: ['./treelistview.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TreelistviewComponent implements OnInit {

    @ViewChild('leftNav', null) leftNavigation: any;

    private anyData: any;
    private assetId: string = "fba758190e7008bd4d73490c4ace221f36b2a1be";
    assetIdPaging: string = "fba758190e7008bd4d73490c4ace221f36b2a1be";
    public assetIdCollapsed: string
    private leftNavPageLimit: string = "10";
    private leftNavPageAfter: string = "0";
    public tableRow: string = "";
    private collapseExpandFlag: boolean;
    private tableRowChild: string;
    private assetName = "";
    searchParameters = new Searchparams();
    childDataList: any;
    parentDataList: any;

    
    constructor(private _dataService: DataService, private _sharedservice: SharedService,
        public router: Router, private listViewService: ListViewService,
        private spinner: NgxSpinnerService,
        private activatedRoute: ActivatedRoute,
        private _bcdata: BreadcrumbdataService,
    ) { 
        
    this.activatedRoute.queryParams.subscribe(params => {
       if(params['assetId']!=undefined){
        this.assetId = params['assetId'];
        this.assetIdPaging = params['assetId'];

       }
        else{
        this.assetId = "fba758190e7008bd4d73490c4ace221f36b2a1be";
        this.assetIdPaging = "fba758190e7008bd4d73490c4ace221f36b2a1be";

        }
        // console.log(this.assetId);
        // this._dataService.setAssetId(this.assetId);
      });
  
    }
   

    ngOnInit() {

        var baseHref = 'http://localhost:4200';
        var baseHrefWithSlash = 'http://localhost:4200/';
        var baseHrefWithHash = 'http://localhost:4200/#';
        var location = window.location.href;
        console.log(location);
        if(location == baseHref || location == baseHrefWithSlash){
        console.log('navigating to base page')
        this.router.navigate(['/'])
        }
        else{
        var routerLink = location.replace(baseHrefWithHash,'')
        console.log('navigating to '+routerLink);
        this.router.navigate([routerLink]);
        }
        this.getTotalPageCount();
    }

    listViewRowData(listviewname){
        this.listViewService.trListViewRP(listviewname);
      }
    getTotalPageCount() {
        this.spinner.show();
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D'
        this._sharedservice.getService(serviceUrl
        ).subscribe(data => {
            //this._dataService.setOption(data.folder_children.asset_list);

            //this.anyData = data.folder_children.asset_list;
            this.searchParameters.totalhitcount = data.folder_resource.folder.container_child_counts.total_child_count;
           
            this.getMainData();
        },
            (err: any) => {
                this.spinner.hide();

            }
        )
    }

    getMainData() {
        this.spinner.show();
        var serviceUrl = "";
        if (this.assetId == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/folders?load_type=system&limit=0';
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        else {
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        this._sharedservice.getService(serviceUrl
        ).subscribe(data => {
            // if (this.assetId == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //     this.constructMainTreeTable(data.folders_resource.folder_list);
            // }
            // else {
                this.parentDataList=data.folder_children.asset_list;
                this.constructMainTreeTable(data.folder_children.asset_list);
                //this._bcdata.bcfunction(rowData);

            //}

            this.spinner.hide();

        },
            (err: any) => {
                this.spinner.hide();

            })
    }

    getMainDataPaging() {
        this.spinner.show();
        var serviceUrl = "";
        if (this.assetIdPaging == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/folders?load_type=system&limit=0';
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetIdPaging + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        else {
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetIdPaging + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        this._sharedservice.getService(serviceUrl
        ).subscribe(data => {
            // if (this.assetId == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //     this.constructMainTreeTable(data.folders_resource.folder_list);
            // }
            // else {
                this.constructMainTreeTable(data.folder_children.asset_list);
                //this._bcdata.bcfunction(rowData);

            //}

            this.spinner.hide();

        },
            (err: any) => {
                this.spinner.hide();

            })
    }

    constructMainTreeTable(treeData) {
        try {
            this.anyData = [];
            this.tableRow = "";
            treeData = treeData.filter(x => x.name != "NOT SPECIFIED");
            for (let i = 0; i < treeData.length; i++) {
                var lastModifiedDate = this.getFormattedDate(new Date(treeData[i].date_last_updated));
                if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
                    var rowData =JSON.stringify(treeData[i]);
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                        //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value=' + rowData + '> '+
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="./cbx/images/folder-default.png"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                else if (treeData[i].data_type == 'CONTAINER' && treeData[i].rendition_content) {
                    //{{treeData[i].rendition_content.thumbnail_content.url}}
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                        
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';

                }
                 //Static thumbnail for content type Video
                 else if(treeData[i].content_type == 'VIDEO'){
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                       
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +
                        // '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        // '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="./cbx/images/mime_video96.png" style="height:36px; width:36px" class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        //'2.4mb' +
                        (treeData[i].master_content_info.content_size/1024/1024).toFixed(2)+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.preview_content) {
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                   // '<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                        
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +

                        // '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        // '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        (treeData[i].rendition_content.preview_content.content_size/1024/1024).toFixed(2)+'mb'  +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.pdf_preview_content) {
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                      
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.pdf_preview_content.url + '"   class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        //'2.4mb' +
                        (treeData[i].rendition_content.pdf_preview_content.content_size/1024/1024).toFixed(2)+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //this.anyData.push(node);
            }
            
            //console.log('tree data ', this.anyData);
            //console.log(this.tableRow);
            if(this.tableRow==""){
                this.tableRow="Assets not available";
                this.searchParameters.totalhitcount=0;
            }
        }
        catch (Error) {
            console.log('catch error in constructMainTreeTable: ', Error.message)
        }

    }
    assetData;
    assetDetails(){
          this._sharedservice.getService('/otmmapi/v5/assets/'+this.assetId+'?load_type=custom&level_of_detail=slim&data_load_request=%7B%22data_load_request%22%3A%7B%22load_multilingual_field_values%22%3A%22true%22%2C%22load_subscribed_to%22%3A%22true%22%2C%22load_asset_content_info%22%3A%22true%22%2C%22load_metadata%22%3A%22true%22%2C%22load_inherited_metadata%22%3A%22true%22%2C%22load_thumbnail_info%22%3A%22true%22%2C%22load_preview_info%22%3A%22true%22%2C%20%22load_pdf_preview_info%22%3A%22true%22%2C%20%22load_3d_preview_info%22%20%3A%20%22true%22%2C%22load_destination_links%22%3A%22true%22%2C%20%22load_security_policies%22%3A%22true%22%2C%22load_path%22%3A%22true%22%7D%7D'
          ).subscribe(result => {
           this.assetData = result.asset_resource.asset;
         
        });
    }
    @HostListener('document:click', ['$event'])
    rowClicked(elem) {
        if(elem.target.className.indexOf('title-Cell') >= 0
        || elem.target.className.indexOf('Cell') >= 0
        || elem.target.className.indexOf('icons-files-cart') >= 0
        || elem.target.className.indexOf('icons-files-download') >= 0
        || elem.target.className.indexOf('icons-files-options') >= 0) {
            var asset_id = elem.target.className.split(' ')[1];
            this._sharedservice.getService('/otmmapi/v5/assets/'+asset_id+'?load_type=custom&level_of_detail=slim&data_load_request=%7B%22data_load_request%22%3A%7B%22load_multilingual_field_values%22%3A%22true%22%2C%22load_subscribed_to%22%3A%22true%22%2C%22load_asset_content_info%22%3A%22true%22%2C%22load_metadata%22%3A%22true%22%2C%22load_inherited_metadata%22%3A%22true%22%2C%22load_thumbnail_info%22%3A%22true%22%2C%22load_preview_info%22%3A%22true%22%2C%20%22load_pdf_preview_info%22%3A%22true%22%2C%20%22load_3d_preview_info%22%20%3A%20%22true%22%2C%22load_destination_links%22%3A%22true%22%2C%20%22load_security_policies%22%3A%22true%22%2C%22load_path%22%3A%22true%22%7D%7D'
            ).subscribe(result => {
             this.assetData = result.asset_resource.asset;
             if(this.assetData==null){
                this.listViewService.trRightPanel(null);
              }
           else{
            this.listViewService.trRightPanel(this.assetData);
           }
          });
        }
       else if (elem.target.className.indexOf('fa fa-plus') == 0) {
            
           this.assetId = elem.target.className.split(' ')[2];

            var plusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.');
            var minusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.').replace('fa-plus', 'fa-minus').replace('hide-plus', 'hide-minus');
            $('.trow.'+this.assetId).css('background-color','#F5F5F5');
            var spanLabel=$('.assetNameClick.'+this.assetId);
            $(spanLabel).attr("id", "bc");
            this.expandRow(plusCls, minusCls);
            // $(plusCls).hide();
            // $(minusCls).removeClass('hide-minus');

        }
        else if (elem.target.className.indexOf('fa fa-minus') == 0) {
            this.assetIdCollapsed = elem.target.className.split(' ')[2];

            var minusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.');
            var plusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.').replace('fa-minus', 'fa-plus').replace('hide-minus', 'hide-plus');
            $('.trow.'+this.assetId).css('background-color','')
            var spanLabel=$('.assetNameClick.'+this.assetId);
            $(spanLabel).removeAttr("id", "bc");
            this.collapseRow(plusCls, minusCls);
            // $(minusCls).addClass('hide-minus');
            // $(plusCls).show();
        }
        else if (elem.target.className.indexOf('assetNameClick') >= 0) {
            
            this.assetIdPaging=this.assetId = elem.target.className.split(' ')[1];
            var assetNameCls = elem.target.className.replace(' ', '.').replace(' ', '.');
            var assetName = $('.' + assetNameCls)[0].innerText;
            
            var parents=$('.'+assetNameCls).parents().find('#bc');
            for(var i=0;i<parents.length;i++){

                console.log(" parent assetId:"+parents[i].className.split(' ')[1]+ " patent asset Name: "+ parents[i].innerText);

             //if(parents[i].className.indexOf('assetNameClick') >= 0)
             //console.log(parents[i].children[2])
             //console.log(parents[i][0])
 
            }
            console.log("assetId :"+this.assetId+ "assetName :"+ assetName);
            //this.getTotalPageCount();
            this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
            //setTimeout(() => this.router.navigate(['layout/listview']));
            setTimeout(() => this.router.navigate(['layout/listview'], { queryParams: { assetId: this.assetId } }));
         
        }
        else if(elem.target.className.indexOf('loadMore') >= 0){
           this.assetIdPaging= this.assetId = elem.target.className.split(' ')[1];
           this.getTotalPageCount();
            //this.getMainData();

        }
    }
    getChildTotalPageCount(plusCls, minusCls) {
        this.spinner.show();
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D'
        this._sharedservice.getService(serviceUrl
        ).subscribe(data => {
            //this._dataService.setOption(data.folder_children.asset_list);

            //this.anyData = data.folder_children.asset_list;
            this.searchParameters.totalhitcountChild = data.folder_resource.folder.container_child_counts.total_child_count;
           
            this.getChildTreeDta(plusCls, minusCls);
        },
            (err: any) => {
                this.spinner.hide();

            }
        )
    }
    getChildTreeDta(plusCls, minusCls){
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.leftNavPageAfter + '&limit=' + this.leftNavPageLimit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        this._sharedservice.getService(serviceUrl
        ).subscribe(data => {
            this.childDataList=data.folder_children.asset_list;

            this.constructChildTreeTable(data.folder_children.asset_list);
            if ($('.trow.' + this.assetId).length > 0) {
                $('.trow.' + this.assetId).append(this.tableRowChild);
            }
            if ($('.child-Row.' + this.assetId).length > 0) {
                $('.child-Row.' + this.assetId).append(this.tableRowChild);
            }

            $(plusCls).hide();
            $(minusCls).removeClass('hide-minus');
            this.spinner.hide();

        },
            (err: any) => {
                this.spinner.hide();

            })
    }
    expandRow(plusCls, minusCls) {
        this.spinner.show();
        this.getChildTotalPageCount(plusCls, minusCls);
        //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
      
    }
    collapseRow(plusCls, minusCls) {
        this.spinner.show();

        $('#collapse' + this.assetIdCollapsed)[0].remove();

        $(minusCls).addClass('hide-minus');
        $(plusCls).show();
        this.spinner.hide();

    }
    constructChildTreeTable(treeData) {
        try {
            this.anyData = [];
            this.tableRowChild = '<div id="collapse' + this.assetId + '">';
            treeData = treeData.filter(x => x.name != "NOT SPECIFIED");
            for (let i = 0; i < treeData.length; i++) {
                console.log('error: ', i)
                var lastModifiedDate = this.getFormattedDate(new Date(treeData[i].date_last_updated));
                var rowData=JSON.stringify(treeData[i]);
                //static folder image from application folder
                if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                   // '<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                      
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="./cbx/images/thumbnail_icons/folder-50px.png"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //dynamic folder image from database/service
                else if (treeData[i].data_type == 'CONTAINER' && treeData[i].rendition_content) {
                    //{{treeData[i].rendition_content.thumbnail_content.url}}
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                       
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';

                }
                //Static thumbnail for content type Video
                else if(treeData[i].content_type == 'VIDEO'){
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                       
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +
                        // '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        // '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="./cbx/images/mime_video96.png" style="height:36px; width:36px" class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        //'2.4mb' +
                        (treeData[i].master_content_info.content_size/1024/1024).toFixed(2)+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //dynamic asset image from database/service
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.preview_content) {
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                     
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +
                        // '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        // '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        //'2.4mb' +
                        (treeData[i].rendition_content.preview_content.content_size/1024/1024).toFixed(2)+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //dynamic pdf/word/xl/office asset image from database/service

                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.pdf_preview_content) {
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                    //'<input type="hidden" id="hidden' + treeData[i].asset_id + '"  name="hidden' + treeData[i].asset_id + '" value="' + rowData + '"> '+
                     
                    ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +

                        '</span>' +
                        '<span> ' +
                        //src="'+treeData[i].rendition_content.pdf_preview_content.url+'"
                        '<img src="' + treeData[i].rendition_content.pdf_preview_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        lastModifiedDate +
                        '</div>' +

                        ' <div class="Cell ' + treeData[i].asset_id + '">' +
                        //'2.4mb' +
                        (treeData[i].rendition_content.pdf_preview_content.content_size/1024/1024).toFixed(2)+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart ' + treeData[i].asset_id + '"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download ' + treeData[i].asset_id + '"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options ' + treeData[i].asset_id + '"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1 ' + treeData[i].asset_id + '" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +

                        '</a>' +

                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //this.anyData.push(node);
            }
            if(Number(this.searchParameters.totalhitcountChild)>10){
                this.tableRowChild +='<div class="loadMoreDiv"><button class="loadMore '+ this.assetId + ' btn btn-primary btn-bx bx-btnspace " type="button">'+
                'Load More</button></div>';
            }
            this.tableRowChild += '</div>';
           
            //console.log(this.tableRowChild);
        }
        catch (Error) {
            console.log("catch block error in constructChildTreeTable function", Error.message);
        }
        //console.log('tree data ', this.anyData);



    }
    getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return month + '/' + day + '/' + year;
    }
    paginate(param){
        this.searchParameters.after=param.first;
        this.getMainDataPaging();
        // if(this.fromLeftNavOrSearch=="search"){
        //   this.searchParameters.after=param.first;
        //   this.getSearchData();
        // }
        // else{
        //   this.leftNavPageAfter=param.first;
        //   this.getTotalPageCountLeftNav();
        // }
      }
}
