import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor() { 
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

}
