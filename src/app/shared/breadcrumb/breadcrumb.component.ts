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
      console.log(bc);
      this.bcData=bc
    })

  }

  bcClick(item){
    var arr=[];

    var index = this.bcData.indexOf(item);
    this.bcData.splice(index + 1, this.bcData.length - (index + 1) );
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
     setTimeout(() => this.router.navigate(['layout/treelistview'], { queryParams: { assetId: item.asset_id } }));
    // for (let index = 0; index < this.bcData.length; index++) {
      
    //   if(this.bcData[index].asset_id==assetId){
    //     arr.push(this.bcData[index]);
    //     this.bcData=arr;
    //      this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    // setTimeout(() => this.router.navigate(['layout/listview'], { queryParams: { assetId: assetId } }));

    //  }
    //  arr.push(this.bcData[index]);
      
    // }
   
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
