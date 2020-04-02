import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    // myInterval = 5000;
    // activeSlideIndex = 0;
    public carouselData: any = []

    constructor(
        private _sharedservice: SharedService,
        private spinner: NgxSpinnerService,
    ) {
    }
    ngOnInit() {
        this.getCarouselData();
       
    }
 
    public couroselid;
    getCarouselData() {
        this.spinner.show();
        console.log('car');

        this._sharedservice.getService_textResponse('/otmmapi/carousel/getCarouselMetadata'
        ).subscribe(data => {
            this.carouselData = JSON.parse(data).result;
            //this.spinner.hide();
        });
    }
}
