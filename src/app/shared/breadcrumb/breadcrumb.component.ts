import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { registerEscClick } from 'ngx-bootstrap/utils/triggers';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
import { stringify } from 'querystring';
import { ListViewService } from 'src/app/services/listview.service';
import { Router } from '@angular/router';
//import { bcMenuItem } from 'src/app/models/breadcrumb';
declare var $: any;

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  bcObj: any;
  arr=[];
  constructor(
    private _bcdata: BreadcrumbdataService,
    private _lvService:ListViewService,
    public router: Router
  ) { }
  items = [];
  bcData:any
  home: MenuItem = { icon: 'pi pi-home' };
  ngOnInit() {

    // this._bcdata.count.subscribe(c => {
    //   this.count = c;
    // });
    // this._bcdata.breadCrumbBS.subscribe(bc => {
    //   if(bc!=undefined){
    //     this.removeChildren();
    //     bc[0].lastChild.style.fontWeight="bold";
    //     $('#bc').append(bc[0]);
    //     console.log('asasaaasa')
    //   }
    // });
   

    this._lvService.bcArrBS.subscribe(bc=>{
      if(bc!=undefined)
      {
        this.bcData=bc
      }
      else{
        let obj={
          asset_id:"home",
          name:"Home"
        }
        var arr=[]
        arr.push(obj);
        this.bcData=arr;
      }
    })

  }

  bcClick(item){
    if(item.asset_id=="home"){
      this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
     setTimeout(() => this.router.navigate(['/layout']));
    }
    else if(item.asset_id=="mycollections"){
      
    }
    else if(item.asset_id=="recentDownloads"){
      
    }
    else{
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
     setTimeout(() => this.router.navigate(['layout/treelistview'], { queryParams: { assetId: item.asset_id } }));
    }
   
  }
  removeChildren()
  {
    var e = $('#bc')[0]; 
        
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
  }


}
