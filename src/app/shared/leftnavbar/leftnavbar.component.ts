import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { LoginService } from '../../services/login.service';
import { SharedService } from 'src/app/services/shared.service';
import { HttpHeaders } from '@angular/common/http';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab           //api
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ListViewService } from 'src/app/services/listview.service';
import { Searchparams } from 'src/app/models/searchparams';
//import { ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftnavbarComponent implements OnInit {
  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';
  folders: TreeNode[];
  selectedFiles: TreeNode[];
  searchParameters =new Searchparams();
  constructor(private _restService: RestService,
    private _loginservice: LoginService,
    private _sharedservice: SharedService,
    public _dataService: DataService,
    public router: Router,
    private _bcdata: BreadcrumbdataService,
    private listViewService: ListViewService
  ) {

  }
  @ViewChild('leftNav', null) leftNavigation: any;

  // public sessions;
  // private serviceURL = "/otmmapi/v5/`sess`ions";
  // private params ="username=vemachir&password=Oct2019$";
  public cbxFolderData = [];
assetId:any;
  ngOnInit() {
      //below 2 line form breadcurmb and expand tree when click on right pan
    // this.assetId =undefined;
    // this.listViewService.rightPanBS.subscribe(id => {
    //   this.assetId = id;
    //   console.log('from grid to left nav:',id);
    //   if(id!=undefined)
    //   this.getLeftSubMenu();
    // });
    // if(this.assetId==undefined)
      this.getLeftMenuData();
  }
  // pageLoads(){
  //   this.mainUlLi = "";
  //       this.mainUlLi += '<ul  class="sub-menu1" id="mainul">';
  // }
  // loadMenu(){
  //   this.getLeftMenuData();
  // }
  public mainUlLi: string = ""; public leftMenu; public showHideFlag: boolean;
  public folderId = "fba758190e7008bd4d73490c4ace221f36b2a1be";
  getLeftMenuData() {
    //console.log('leftnav');
    ///otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME
    var url = '/otmmapi/v5/folders/fba758190e7008bd4d73490c4ace221f36b2a1be/folders?load_type=system&limit=0';
    //
    //otmmapi/v5/folders/3633a39c8a6dfa5f53ec3e743631d1229d7cecca/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME
    this._sharedservice.getService(url
    ).subscribe(data => {
      this.leftMenu = data.folders_resource.folder_list.filter(filt => filt.data_type == "CONTAINER");
      //this.buildMenu();
        this.mainUlLi = "";

        this.mainUlLi += '<ul  class="sub-menu1" id="mainul">';
      
        for (var i = 0; i < this.leftMenu.length; i++) {
          //data-toggle="collapse" data-parent="#'+ this.leftMenu[i].asset_id + '"
          this.mainUlLi += '<li   class="sidebar-dropdown ' + this.leftMenu[i].asset_id + '"><i class="fa fa-angle-right icon-arrow-folder" aria-hidden="true"></i>' +
            '<a    class="folderClick ' + this.leftMenu[i].asset_id + '" >' +
            this.leftMenu[i].name +
            '</a>';
          this.mainUlLi += '</li>';
        }
        this.mainUlLi += '</ul>';
    if(this.leftMenu.length == 0 ){
      $('li.' + this.folderId + '>i').hide();
    } 

    });
  }
  removeChildren(par)
  {
    var e = $(par)[0].removeChild($(par)[0].childNodes[1]); 
        console.log(e)
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
  }
  public subMenu: string;
  public show:string = "none";
  flg=false;
  getLeftSubMenu() {
    if(this.assetId !=undefined)
    this.folderId=this.assetId;
    // if(this.show == "block")
    // this.show = "none";
    // else
    // this.show = "block";
    
    this.flg=false;
    //var serviceUrl='/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
    var serviceUrl='/otmmapi/v5/folders/' + this.folderId + '/folders?load_type=system&limit=0';
    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
      //this._dataService.setOption(data.folder_children.asset_list);

      this.leftMenu = data.folders_resource.folder_list.filter(filt => filt.data_type == "CONTAINER");
      event.stopPropagation();
      this.subMenu = "";
      this.subMenu += '<ul class="sub-menu" id="'+this.folderId+'" >';
      //[style.display]="'+this.show+'"
      for (var i = 0; i < this.leftMenu.length; i++) {
        //data-toggle="collapse" data-parent="#'+ this.leftMenu[i].asset_id + '" href="#'+ this.leftMenu[i].asset_id + '"
        this.subMenu += '<li  class="' + this.leftMenu[i].asset_id + '"><i class="fa fa-angle-right icon-arrow-folder" aria-hidden="true"></i>' +
          '<a   class="folderClick ' + this.leftMenu[i].asset_id + '"   >' +
          this.leftMenu[i].name +
          '</a>' +
          '</li>';

      }
      this.subMenu += '</ul>';
      if (this.leftMenu.length > 0) {
        if ($('.' + this.leftMenu[0].asset_id).length == 0) {
          $('li.' + this.folderId).append(this.subMenu);
          
        }
        else
        {
          $('li.' + this.folderId).append('');
          this.flg=true;
        }
      }
      this.prepareBreadcrumb('fromevent');
      if(this.flg){
       // this.removeChildren($('li.' + this.folderId));
        var par=$('li.' + this.folderId);
       $(par)[0].removeChild($(par)[0].childNodes[2]);
        $('li.' + this.folderId).append('');
      }
     
     // $('li.' + this.folderId).tottle
        //$('li.' + this.folderId).toggleCla('rotateicon');
        $('li.' + this.folderId + '>i').toggleClass('rotateicon');
        //$('li.' + this.folderId + '>a').toggleClass('activeFolder');
        $('.activeFolder').removeClass('activeFolder');
        $('li.' + this.folderId + '>a').addClass('activeFolder');
        if(this.leftMenu.length == 0 ){
          $('li.' + this.folderId + '>i').hide();
        } 
        //$('li.' + this.folderId ).siblings().children().hide();
        //showing list and gridview when assets loaded
        // this.searchParameters.search=false;
        // this.searchParameters.paging =false;
        // if(data.folders_resource.folder_list.length>0)
        // this.listViewService.listviewsortbtn(true);
        // else
        // this.listViewService.listviewsortbtn(false);

        this._dataService.setLeftNavOrSearch('leftNav');
        this.searchParameters=this._dataService.getSearchOption();

        this._dataService.setAssetId(this.folderId);

        //this.listViewService.fromLeftNavfunction('leftNav');

       //showing list and gridview when assets loaded

       if(this.searchParameters.gridList=="gridView"){
      this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
      //setTimeout(() => this.router.navigate(['layout/gridview']));
      setTimeout(() => this.router.navigate(['layout/gridview'], { queryParams: { assetId: this.folderId } }));
       }
       else
       {
        this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
        //setTimeout(() => this.router.navigate(['layout/listview']));
        setTimeout(() => this.router.navigate(['layout/listview'], { queryParams: { assetId: this.folderId } }));
       }
      //  //var htmlObject= $.parseHTML(this.mainUlLi);
      //console.log(this.subMenu);

    })
    
  }

  public childLevel: string = ""
  @HostListener('document:click', ['$event'])
  tdClicked(elem) {
      //below 2 line form breadcurmb and expand tree when click on right pan
  //  this.assetId=undefined;
  //  this.listViewService.clickRightPanFun(undefined);

    if (elem.target.className.indexOf('folderClick') >= 0) {
      this.folderId = elem.srcElement.classList[1];
      this.childLevel = elem.srcElement.classList[2];
      this.getLeftSubMenu();
      //this.prepareBreadcrumb();
    }
  }

  prepareBreadcrumb(param) {
if(param=='fromevent'){
    var $this = $('a.' + this.folderId),
      $bc = $('<div class="item"></div>');

    $this.parents('li').each(function (n, li) {
      var $a = $(li).children('a').clone();
      $bc.prepend(' / ', $a);
    });
    $('.breadcrumb').html($bc);

    console.log('breadcrumb:', $bc.prepend('<a href="/layout">Home</a>')[0].innerHTML)
    this._bcdata.breadcrumbsfunction($bc);
  }
    return false;

  }

  

  // getLeftMenuData_bac(){

  //   this._sharedservice.getService('/otmmapi/v5/folders/fba758190e7008bd4d73490c4ace221f36b2a1be/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
  //   ).subscribe(data => {
  //    //this.folders=data;

  //    for (var i=0;i<data.folder_children.asset_list.length;i++)
  //    {
  //     let fol={
  //       label:data.folder_children.asset_list[i].name,
  //       data: "Node 2",
  //         expandedIcon: "fa fa-folder-open",
  //         collapsedIcon: "fa fa-folder",
  //         leaf: false

  //     }
  //     this.cbxFolderData.push(fol);
  //    }
  //    this.folders=this.cbxFolderData;
  //    console.log(this.folders);

  //   });
  // }

  loadNode(event) {
    if (event.node) {
      alert(event.node)
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      // this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
    }
  }
  toggleFolder() {
    

      $(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
 
  }
  
}
