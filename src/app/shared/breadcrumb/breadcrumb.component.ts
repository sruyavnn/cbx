import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { registerEscClick } from 'ngx-bootstrap/utils/triggers';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
import { stringify } from 'querystring';
//import { bcMenuItem } from 'src/app/models/breadcrumb';
declare var $: any;

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  //prop = new props();
  count: number;
  //_bcObj: bcMenuItem[];
  bcObj: any;
  arr=[];
  constructor(
    private _bcdata: BreadcrumbdataService
  ) { }
  items = [];
  bcData:any
  home: MenuItem = { icon: 'pi pi-home' };
  ngOnInit() {

    this._bcdata.count.subscribe(c => {
      this.count = c;
    });
    this._bcdata.breadCrumbBS.subscribe(bc => {
      if(bc!=undefined){
        this.removeChildren();
        bc[0].lastChild.style.fontWeight="bold";
        $('#bc').append(bc[0]);
        console.log('asasaaasa')
      }
    });
   

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
