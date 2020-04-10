// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'cbx';
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router) { }

  ngOnInit(): void {
    window.localStorage['redirecturl']=window.location.href;
  //   if (window.location.host.split(':')[0] == "localhost") {
  //     this.router.navigate(['/']);
  //     var baseHref = 'http://localhost:4200';
  //     var baseHrefWithSlash = 'http://localhost:4200/';
  //     var baseHrefWithHash = 'http://localhost:4200/#/layout';
  //     var location = window.location.href;
  //     console.log(location);
  //     if (location == baseHref || location == baseHrefWithSlash) {
  //       console.log('navigating to base page');
  //       this.router.navigate(['/'])
  //     }
  //     else {
  //       var routerLink = location;
  //       console.log('navigating to ' + routerLink);
  //       this.router.navigate([routerLink]);
  //     }
  //   }
  //   else {
  //     this.router.navigate(['/']);
  //     var baseHref = 'https://digitalassets-dev.cisco.com/content/cbxui.html';
  //     var baseHrefWithSlash = 'https://digitalassets-dev.cisco.com/content/cbxui.html/';
  //     var baseHrefWithHash = 'https://digitalassets-dev.cisco.com/content/cbxui.html#';
  //     var location = window.location.href;
  //     console.log(location);
  //     if (location == baseHref || location == baseHrefWithSlash) {
  //       console.log('navigating to base page');
  //       this.router.navigate(['/'])
  //     }
  //     else {
  //       var routerLink = location.replace(baseHrefWithHash, '')
  //       console.log('navigating to ' + routerLink);
  //       this.router.navigate([routerLink]);
  //     }
  //   }
   }
  title = 'cbx';
}