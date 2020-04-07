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
    $(".app-root-left").addClass("toggle-menu");
    $(".menu-label").addClass('in-block');
    $(".menu-icon-bx").hide();
    $(".img-logo").addClass('d-initial');
    $(".bx-logo-text").addClass('block');
    $(".arrow-toggle").css('display', 'inline-block');
    $(".app-root-main").addClass('toggle-main');
    $("body").addClass("overlay");
  });
  $(".arrow-toggle").click(function() {
    $(".app-root-left").removeClass("toggle-menu");
    $(".menu-label").removeClass('in-block');
    $(".menu-icon-bx").show();
    $(".img-logo").removeClass('d-initial');
    $(".bx-logo-text").removeClass('block');
    $(".arrow-toggle").css('display', 'none');
    $(".app-root-main").removeClass('toggle-main');
    $("body").removeClass("overlay");
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
    // let obj={
    //   asset_id:"",
    //   name:"All files"
    // }
    // var arr=[]
    // arr.push(obj);
    // this.listViewService.bcFun(arr);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout/listview']));
    //this.spinner.hide();
  }
  mycollections(){
    //
    this.spinner.show();
    this.listViewService.trRightPanel(null);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout/listview']));
  }
  recentDownloads(){
    //  /layout/recent-downloads
    this.spinner.show();
    this.listViewService.trRightPanel(null);
    this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
    setTimeout(() => this.router.navigate(['layout/listview']));
  }
}
