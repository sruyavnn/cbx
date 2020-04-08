import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _sharedservice: SharedService,) { }

  ngOnInit() {
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
