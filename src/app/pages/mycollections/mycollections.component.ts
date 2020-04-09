
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
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.css']
})
export class MycollectionsComponent implements OnInit {

  constructor(
    private _dataService: DataService, private _sharedservice: SharedService,
        public router: Router, private listViewService: ListViewService,
        private spinner: NgxSpinnerService,
        private activatedRoute: ActivatedRoute,
        private _bcdata: BreadcrumbdataService,
  ) { }

  ngOnInit() {
   this.getMyCollections();
  }
  getMyCollections(){
    this.spinner.show();
    var serviceUrl = '/otmmapi/v5/lightboxes'
    this._sharedservice.getService(serviceUrl
    ).subscribe(data => {
       console.log("collections: ",data);
       this.spinner.hide();

    },
        (err: any) => {
            this.spinner.hide();

        }
    )
  }

}
