import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-bxroot',
  templateUrl: './bxroot.component.html',
  styleUrls: ['./bxroot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BxrootComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
    
    // if (window.location.host.split(':')[0] == "localhost") {
    //   this.router.navigate(['/']);
    //   var baseHref = 'http://localhost:4200';
    //   var baseHrefWithSlash = 'http://localhost:4200/';
    //   var baseHrefWithHash = 'http://localhost:4200/#/layout';
    //   var location = window.location.href;
    //   console.log(location);
    //   if (location == baseHref || location == baseHrefWithSlash) {
    //     console.log('navigating to base page');
    //     this.router.navigate(['/'])
    //   }
    //   else {
    //     var routerLink = location;
    //     console.log('navigating to ' + routerLink);
    //     this.router.navigate([routerLink]);
    //   }
    // }
  }

}
