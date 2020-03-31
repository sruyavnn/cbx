import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
declare var $:any;

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(private _sharedservice: SharedService) { 
  
  }
  ngOnInit() {
    $('.navbar-nav .nav-link').click(function(){
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
  })
  }
  profileDetails(event){
    this.getprofile();

  }
  public userDetails;
  getprofile(){
    var url = '/otmmapi/v5/users/me';
    this._sharedservice.getService(url).subscribe(data => {
    this.userDetails=data.user_resource.user;
    console.log(this.userDetails);
    //this.showModal = true; // Show-Hide Modal Check
  })

}




}
  
