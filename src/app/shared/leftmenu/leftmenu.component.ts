import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListViewService } from 'src/app/services/listview.service';
declare var $:any;
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor(
    public router: Router,
    private spinner: NgxSpinnerService,
    private listViewService: ListViewService,

  ) { 
    $(document).ready(function(){
      // Add minus icon for collapse element which is open by default
      $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
      });
      
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });
  });

  }

  ngOnInit() {
    $('.left-menu-item .home-menu').click(function(){
      $('.left-menu-item .home-menu').removeClass('active');
      $(this).addClass('active');
  })
  
  $(".menu-container").click(function() {
    alert('test');
    
  });
  }
  myFunction(event) {
    event.classList.toggle("change");
  }
  homeClick(){
   // this.spinner.show();
    this.listViewService.trRightPanel(null);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout']));
    //this.spinner.hide();
  }

  allAssetsClick(){
    this.spinner.show();
    this.listViewService.trRightPanel(null);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout/treelistview']));
    //this.spinner.hide();
  }
  mycollections(){
    //
    this.spinner.show();
    this.listViewService.trRightPanel(null);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout/treelistview']));
  }
  recentDownloads(){
    //  /layout/recent-downloads
    this.spinner.show();
    this.listViewService.trRightPanel(null);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout/treelistview']));
  }
}
