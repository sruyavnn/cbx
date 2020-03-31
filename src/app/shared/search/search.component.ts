import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListViewService } from 'src/app/services/listview.service';
import { BreadcrumbdataService } from 'src/app/services/breadcrumbdata.service';
import { SearchbsService } from 'src/app/services/searchbs.service';
import { Searchparams } from 'src/app/models/searchparams';
declare var $: any;


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  flgSortBtn: boolean;
  searchParameters =new Searchparams();
  assetId: string;
  constructor(
    private _sharedService: SharedService,
    public _dataService: DataService,
    public router: Router,
    private spinner: NgxSpinnerService,
    private listViewService: ListViewService,
    //private _searchdata: SearchbsService,


  ) { 
    this.assetId=this._dataService.getAssetId();
  }

  ngOnInit() {
    
    this.listViewService.listFlagSort.subscribe(c => {
      this.flgSortBtn = c;
    });

  }

  GlobalSearch() {
    this.assetId=this._dataService.getAssetId();
    this._dataService.setLeftNavOrSearch('search');

    if (this.searchParameters.gridList == "gridView" || this.searchParameters.gridList == "") {
      this.searchParameters.gridList = "gridView";
      this._dataService.setSearchOption(this.searchParameters);

      this.router.navigateByUrl('/layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['/layout/gridview'],{ queryParams: { assetId: this.assetId } }));
    }
    else {
      this._dataService.setSearchOption(this.searchParameters);
      this.router.navigateByUrl('/layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['/layout/listview'],{ queryParams: { assetId: this.assetId } }));
    }
  }
  sortBy() {
    this.assetId=this._dataService.getAssetId();
    if (this.searchParameters.gridList == "gridView" || this.searchParameters.gridList == "") {
      this.searchParameters.gridList = "gridView";
      this._dataService.setSearchOption(this.searchParameters);

      this.router.navigateByUrl('/layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['/layout/gridview'],{ queryParams: { assetId: this.assetId } }));
    }
    else {
      this._dataService.setSearchOption(this.searchParameters);
      this.router.navigateByUrl('/layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['/layout/listview'],{ queryParams: { assetId: this.assetId } }));
    }
  }
  listViewAssets(param) {
    
    //this._dataService.setLeftNavOrSearch('search');

    this.assetId=this._dataService.getAssetId();
    if (param == 'listview') {

      this.searchParameters.gridList = 'listView';
      $('#btn-list').addClass('activebx-glview');
      $('#btn-grid').removeClass('activebx-glview');
      this._dataService.setSearchOption(this.searchParameters);
      this.router.navigateByUrl('/layout/assets', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/layout/listview'],{ queryParams: { assetId: this.assetId } }));
    }
    else {
      this.searchParameters.gridList = 'gridView';

      $('#btn-grid').addClass('activebx-glview');
      $('#btn-list').removeClass('activebx-glview');
      this._dataService.setSearchOption(this.searchParameters);
      this.router.navigateByUrl('/layout/assets', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/layout/gridview'],{ queryParams: { assetId: this.assetId } }));
    }
  }
}


