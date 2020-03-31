import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
selector: 'app-carousel',
templateUrl: './carousel.component.html',
styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
// myInterval = 5000;
// activeSlideIndex = 0;
public carouselData :any = []

constructor(private _sharedservice: SharedService) {
}
ngOnInit() {
    this.getCarouselData();
}
public couroselid;
getCarouselData(){
    
console.log('car');

this._sharedservice.getService_textResponse('/otmmapi/carousel/getCarouselMetadata'
).subscribe(data => {
this.carouselData = JSON.parse(data).result;
// var carouselData=carouselData;
// for(var i=0;i<carouselData.length;i++){
// carouselData[i].rendition_content.preview_content.url="https://cdam-dev.cisco.com"+carouselData[i].rendition_content.preview_content.url;
//

console.log(this.carouselData);



});
}
}
