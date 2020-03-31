import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { TreeNode } from 'primeng/api/treenode';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-leftnavmain',
  templateUrl: './leftnavmain.component.html',
  styleUrls: ['./leftnavmain.component.css']
})
export class LeftnavmainComponent implements OnInit {
  leftMenu: any;
  
  constructor(
    private _sharedservice: SharedService,
    public router: Router,
    public _dataService: DataService,
    private spinner: NgxSpinnerService

  ) { }
  tempLazyFiles = [];
  tempLazyChildFiles = [];
  treeData: any[];
  modifiedTreeData;
  selectedFiles: TreeNode[];



  ngOnInit() {
    this.getLeftMenuData();
  }

  getLeftMenuData() {
    this.spinner.show();

    console.log('leftnav');
    ///otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME
    //var url='/otmmapi/v5/folders/fba758190e7008bd4d73490c4ace221f36b2a1be/folders?load_type=system&limit=0';
    var url='/otmmapi/v5/folders/fba758190e7008bd4d73490c4ace221f36b2a1be/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
           //
           //otmmapi/v5/folders/3633a39c8a6dfa5f53ec3e743631d1229d7cecca/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME
    this._sharedservice.getService(url
    ).subscribe(data => {//fba758190e7008bd4d73490c4ace221f36b2a1be/folders?load_type=system&limit=0
    console.log('in leftnav');
      //this._dataService.setOption(data.folders_resource.folder_list);
        this.treeData=data.folder_children.asset_list.filter(filt=>filt.data_type=="CONTAINER");
     // this.treeData = data.folders_resource.folder_list.filter(filt=>filt.data_type=="CONTAINER");

      this.tempLazyChildFiles = [];
      this.treeLoop();
    },
    (err: any) => {
    this.spinner.hide();
     
  })
    ;
  }

  treeLoop(){
    for (let obj of this.treeData) {
      this.modifiedTreeData = {};
          //if (obj[key] == true) {
            this.modifiedTreeData.label = obj["name"]
            this.modifiedTreeData.folderId = obj["asset_id"];
            this.modifiedTreeData.children= [{}];
            //this.modifiedTreeData.expandedIcon = "fa fa-folder-open";
            //this.modifiedTreeData.collapsedIcon = "fa fa-folder";
            // this.modifiedTreeData.leaf = true;
            // this.modifiedTreeData.icon = "fa fa-file-word-o";
          // } 
          // else {
          //   this.modifiedTreeData.icon = "fa fa-file-word-o";
          //   this.modifiedTreeData.leaf = true;
          // }
      
        //console.log("      key:", key, "value:", obj[key]);
      
      //console.log(this.modifiedTreeData);
      this.tempLazyFiles.push(this.modifiedTreeData);
      this.spinner.hide();
    }    
  }

  treeChildrenLoop(event){
    for (let obj of this.treeData) {
      this.modifiedTreeData = {};
          //if (obj[key] == true) {
            this.modifiedTreeData.label = obj["name"]
            this.modifiedTreeData.folderId = obj["asset_id"];
            this.modifiedTreeData.children= [{}];

      this.tempLazyChildFiles.push(this.modifiedTreeData);
    }
    //console.log(this.tempLazyFiles);
    event.node.children = this.tempLazyChildFiles;
    //event.node.nodeExpand=false;
    //!event.node.nodeExpand=false;

    this.spinner.hide();

    }    
  
   //function on selecting node
   nodeSelect(event) {
    this.nodeExpand(event);
    this.selectBranchId = event.node.folderId;

    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['layout/gridview']));

 
  }

    //Lazy Loading child tree on selecting node
    selectBranch;
    selectBranchId;
    nodeExpand(event) {
      if (event.node) {
        this.spinner.show();
        //if (event.node.leaf == false) {
          this.tempLazyChildFiles = [];
          //let serviceUrl = '/otmmapi/v5/folders/'+event.node.folderId+'/folders?load_type=system&limit=0';
         // let seviceUrl=''
            let serviceUrl='/otmmapi/v5/folders/'+event.node.folderId+'/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';


          this._sharedservice.getService(serviceUrl).
            subscribe(
              data => {
                this._dataService.setOption(data.folder_children.asset_list);
               // this._dataservice=result.folders_resource.folder_list;
                this.treeData=data.folder_children.asset_list.filter(filt=>filt.data_type=="CONTAINER");

                //this.treeData = result.folders_resource.folder_list.filter(filt=>filt.data_type=="CONTAINER");
                this.treeChildrenLoop(event);
                this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
                setTimeout(() => this.router.navigate(['layout/gridview']));
              },
              (err: any) => {
                this.spinner.hide();
              })
        //}
        // if (event.node.parent == undefined){
        //   this.selectBranch = event.node.path = event.node.label;
        // }
        // else{
        //   this.selectBranch = event.node.path = event.node.parent.path + "/" + event.node.label
        // }
          
      }
    }

    
}
