import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _sharedservice: SharedService,) { }
  
  ngOnInit() {
    
  }
  public userDetails;
  getprofile(){
    var url = '/otmmapi/v5/users/me';
    this._sharedservice.getService(url).subscribe(data => {
    this.userDetails=data.user_resource.user;
    console.log(this.userDetails);
    this.showModal = true; // Show-Hide Modal Check
  })
  }


  showModal : boolean;
  
  onClick(event)
  {
    this.getprofile();
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

}
