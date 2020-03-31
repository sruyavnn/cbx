import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListViewService } from '../../services/listview.service';
declare var $:any;
@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit {
  flgSortBtn: boolean;
  constructor(public router: Router, private listViewService: ListViewService) { }

  ngOnInit() {
    this.listViewService.listFlagSort.subscribe(c => {
      this.flgSortBtn = c;
      });
  }

  listViewAssets(param){
    if(param=='listview'){
    $('#btn-list').addClass('activebx-glview');
    $('#btn-grid').removeClass('activebx-glview');
    this.router.navigate(['layout/listview']);
    }
    else{
    $('#btn-grid').addClass('activebx-glview');
    $('#btn-list').removeClass('activebx-glview');

    this.router.navigate(['layout/gridview']);

    }
      
     
  }

  
}
