import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 // public emptyCart: boolean = true;
  cartData=[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.cartData=this._dataService.getCartOption();
  }

  removeAllCart(){
    this.cartData=null
  }

  removeCart(i){
    this.cartData.splice(i, 1);
  }

}
