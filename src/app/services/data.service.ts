import { Injectable } from '@angular/core';
import { Searchparams } from '../models/searchparams';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  assetId: string;
 

  constructor() { }
  //sending topdownloads row data to cart
  topDownloadsRowCartData = [];
  private treeData = {};
  searchParamsData =new Searchparams();
  fromLeftNavOrSearch="";



  //private globalSearchData = {};  

  
 setOption(value) {      
    this.treeData = value;  
  }  
  
  getOption() {  
    return this.treeData;  
  }  

   //creating get method for sending topdownloads row data to cart
   getCartOption() {  
    return this.topDownloadsRowCartData;  
  } 
  //creating set method for sending topdownloads row data to cart
  setCartOption(value) {      
    this.topDownloadsRowCartData = value;  
  } 

  setSearchOption(value) {      
    this.searchParamsData = value;  
  }  
  
  getSearchOption() {  
    return this.searchParamsData;  
  }  

  setLeftNavOrSearch(value){
    this.fromLeftNavOrSearch= value;  
  }
  getLeftNavOrSearch(){
    return this.fromLeftNavOrSearch;  
  }

  setAssetId(folderId) {
    this.assetId = folderId;  
  }
  getAssetId(){
    return this.assetId;  
  }
  // setGlobalSearchData(value) {      
  //   this.globalSearchData = value;  
  // }  
  
  // getGlobalSearchData() {  
  //   return this.globalSearchData;  
  // }  
}
