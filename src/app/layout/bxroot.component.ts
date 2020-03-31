import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-bxroot',
  templateUrl: './bxroot.component.html',
  styleUrls: ['./bxroot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BxrootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }

}
