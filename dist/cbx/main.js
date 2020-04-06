(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layout/bxlayout.module": "./src/app/layout/bxlayout.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-checkauth></app-checkauth>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkauth/checkauth.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkauth/checkauth.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n  \r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta charset=\"utf-8\">\r\n\t<head>\r\n\t\t<title>Doc Exchange - Check Authorization</title>\r\n        <!-- <base href=\"/alfext/ui/\"> -->\r\n        <!-- <base href=\"/cbx/ui/\"> -->\r\n\t</head>\r\n\t<body>\r\n    \r\n\t<form method=\"GET\" id=\"tokenForm\" name=\"implicitCodeForm\" >\r\n\t\t\t<input type=\"hidden\" id=\"client_id\" name=\"client_id\" > \r\n\t\t\t<input type=\"hidden\" id=\"response_type\" name=\"response_type\" >\r\n\t\t\t<input type=\"hidden\" id=\"redirect_uri\" name=\"redirect_uri\" >\r\n\t</form>\r\n\t\r\n    </body>\r\n    </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bxroot.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bxroot.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"col-12\">\r\n    <div class=\"row\">\r\n      <div class=\"test col-sm-12 col-md-10 col-lg-8 col-xl-6\">Test</div>\r\n    </div>\r\n  </div> -->\r\n<div class=\"container-fluid p-bx-0\">\r\n    <div class=\"col-12 p-bx-0\">\r\n        <div class=\"row p-m-0 main-page\">\r\n            <div class=\"app-root-left p-bx-0 col-2\"><app-leftmenu></app-leftmenu></div>\r\n            <div class=\"app-root-main col-10 p-r-0 page-content\">\r\n                <div class=\"row p-m-0\">\r\n                    <div class=\"col-12\"><app-topmenu></app-topmenu></div>\r\n                    <div class=\"col-12 p-bx-0\">\r\n                        <div class=\"row p-m-0\">\r\n                    <div class=\"app-body-main col-sm-12 col-md-12 col-lg-9\"><router-outlet></router-outlet></div>\r\n                    <div class=\"app-body-announcement col-lg-3 p-r-0\"><app-announcements></app-announcements></div>\r\n                </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n    \r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"row p-m-0\">\r\n            <div class=\"col-12 p-bx-0\">\r\n                <app-footer></app-footer>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assets/assets.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assets/assets.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>assets works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/carousel/carousel.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/carousel/carousel.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#00bceb\" type=\"ball-clip-rotate\">\r\n  <p style=\"font-size: 20px; color:#fff\">Please wait...</p>\r\n</ngx-spinner>\r\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n  <!-- Indicators -->\r\n  <ul class=\"carousel-indicators\">\r\n    <li data-target=\"#demo\" *ngFor=\"let x of carouselData let i = index\" attr.data-slide-to=\"{{i}}\" ngClass=\"{{i == 0 ? 'active' : ''}}\"></li>\r\n  </ul>\r\n\r\n  <!-- The slideshow -->\r\n  <div class=\"carousel-inner\">\r\n    <div *ngFor=\"let j of carouselData let index = index\" [ngClass]=\"index == 0 ? 'carousel-item active' : 'carousel-item'\">\r\n      <img src=\"{{j.objectID}}\" class=\"img-fluid\" alt=\"Cisco Image\" [attr.usemap]=\"'#' + j.assetId\" >\r\n      <map name=\"{{j.assetId}}\">\r\n        <area shape=\"rect\" coords=\"426,1,1,306\" alt=\"Computer\" href=\"{{j.leftUrl}}\" target=\"_blank\">\r\n        <area shape=\"rect\" coords=\"1023,1,427,305\" alt=\"Phone\" href=\"{{j.rightUrl}}\" target=\"_blank\">\r\n        </map>\r\n      <!-- <div class=\"coarousel-text-container\" >\r\n        <div class=\"carousel-text\">\r\n          <h3 class=\"carousel-heading\">Featured Collections</h3>\r\n          <span class=\"carousel-subtext\">This space will be used to promote new assets that are now available.</span>\r\n          <div class=\"btn-carousel\">\r\n          <button class=\"btn btn-primary btn-bxcarousel\">View assets</button>\r\n        </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/cart/cart.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/cart/cart.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let obj of cartData\" >\r\n  <p>{{obj?.name}}</p>\r\n  <p>{{obj?.asset_id}}</p>\r\n  <hr>\r\n  <i class=\"fa fa-remove\" (click)=\"removeTopDownloadData()\" aria-hidden=\"true\"></i>\r\n</div> -->\r\n\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr >\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Image</th>\r\n      <th scope=\"col\">Asset Id</th>\r\n      <th scope=\"col\">File Size</th>\r\n      <th><i class=\"fa fa-remove\" (click)=\"removeAllCart()\" aria-hidden=\"true\"></i></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let cart of cartData; let i=index\">\r\n      <td>{{cart?.name}}</td>\r\n      <td><img style=\"width: 50px;\" src={{cart?.rendition_content.thumbnail_content.url}} /></td>\r\n      <td>{{cart?.asset_id}}</td>\r\n      <td>{{cart.rendition_content.preview_content.content_size/1024/1024 | number : '1.2-2'}}mb</td>\r\n      <td><i class=\"fa fa-remove\" (click)=\"removeCart(i)\" aria-hidden=\"true\"></i></td>\r\n    </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-carousel></app-carousel>\r\n<app-top-downloads></app-top-downloads>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/top-downloads/top-downloads.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/top-downloads/top-downloads.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#00bceb\" type=\"ball-clip-rotate\">\r\n  <p style=\"font-size: 20px; color:#fff\">Please wait...</p>\r\n</ngx-spinner>\r\n<div class=\"p-bx-0 col-12 topd-container\">\r\n  <div class=\"row p-m-0\">\r\n  <div class=\"col-xs-12 col-lg-3 p-bx-0 top-d\">Top downloads</div>\r\n  <div class=\"col-xs-12 col-lg-9 p-bx-0 search-icons\">\r\n    <div class=\"col-xs-12 p-bx-0\">\r\n      <div class=\"row p-m-0\">\r\n    <div class=\"search-container col-xs-10 col-md-10 p-bx-0\">\r\n      <div class=\"form-group has-search\">\r\n        <span class=\"form-control-feedback\"></span>\r\n        <!-- <input type=\"text\" class=\"form-control home-search\" placeholder=\"Search\"> -->\r\n        <input type=\"text\" [(ngModel)]=\"searchKeyword\" (keydown.enter)=\"getSearchData($event)\"  class=\"form-control home-search\" placeholder=\"Search\">\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"grid-viewd col-xs-2 p-bx-0\">\r\n      <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n          <button type=\"button\" class=\"btn btn-primary gridview-btn\"></button>\r\n        </div>\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n          <button type=\"button\" class=\"btn btn-primary listview-btn\"></button>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row p-m-0 filter-home\">\r\n  <div class=\"col-lg-7 col-md-4 p-bx-0 filter\">\r\n    <form class=\"form-inline\">\r\n      <label for=\"filter\">Filter:</label>\r\n    <div class=\"dropdown filterbx\">\r\n      <button class=\"btn btn-secondary dropdown-toggle filter-dropdown\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        Monthly\r\n      </button>\r\n      <div class=\"dropdown-menu dropdown-option-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <a class=\"dropdown-item dropdown-option\" >Weekly</a>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-lg-5 col-md-8 p-bx-0\" style=\"text-align:right\">\r\n    <button type=\"button\" class=\"btn btn-primary btn-bx\" [disabled]=\"btnEnableDisable\">Add to collections</button>\r\n  <button type=\"button\" class=\"btn btn-primary btn-bx bx-btnspace\" [disabled]=\"btnEnableDisable\">Add to cart</button>\r\n  <button type=\"button\" class=\"btn btn-primary btn-bx\" [disabled]=\"btnEnableDisable\" (click)=\"mutltiAssetDownloads()\">Download</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row p-m-0 topd-table-container\">\r\n  <table class=\"table table-borderless topd-table\">\r\n    <thead>\r\n      <tr class=\"table-head-row\">\r\n        <th>\r\n          <p-checkbox name=\"groupname\"   [(ngModel)]=\"selectAll\" [binary]=\"true\" (onChange)=\"checkUncheckAll()\"></p-checkbox>\r\n\r\n         </th>\r\n         <!-- <th><label class=\"main\">\r\n\r\n          <input type=\"checkbox\" [(ngModel)]=\"checkAll\" name=\"chkHead\" (change)=\"checkUnAll()\">\r\n          <span class=\"geekmark\"></span>\r\n        </label> </th> -->\r\n        <th colspan=\"2\" class=\"name\">Name <i class=\"fa fa-chevron-down\"></i></th>\r\n        <th> <i class=\"fa fa-chevron-down\"></i></th>\r\n        <th colspan=\"4\" class=\"file-size\">File size <i class=\"fa fa-chevron-down\"></i></th>\r\n      </tr>\r\n    </thead>\r\n    <div class=\"\"></div>\r\n    <tbody>\r\n      <tr *ngFor = \"let rowData of topDownloadData\" (click)=\"topDownloadsData(rowData)\" class=\"row-topd\" id=\"{{rowData.asset_id}}\">\r\n        <!-- <td class=\"row-checkbox\">\r\n          <label class=\"main\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"rowData.isSelected\" name=\"{{rowData.asset_id}}\" (change)=\"oneSelected(rowData)\"> \r\n            <span class=\"geekmark\"></span> \r\n        </label>\r\n        </td> -->\r\n        <td>\r\n        <p-checkbox  [(ngModel)]=\"rowData.isSelected\" [binary]=\"true\"   (onChange)=\"checkUncheckSingle($event, rowData?.asset_id)\"></p-checkbox>\r\n\r\n        </td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\">\r\n\r\n          <span \r\n            *ngIf=\"rowData?.data_type== undefined && rowData?.rendition_content\" class=\"asset-pannel\">\r\n            <img src={{rowData?.rendition_content.thumbnail_content.url}}\r\n              class=\"img-fluid list-asset-size list-asset-hover\">\r\n          </span>\r\n          </div>\r\n          </td>\r\n          <td class=\"row-title\">\r\n          {{rowData?.name}}\r\n          \r\n        </td>\r\n        <td class=\"row-download-count\">\r\n            123\r\n        </td>\r\n        <td class=\"row-file-size\">\r\n          {{rowData?.rendition_content.preview_content.content_size/1024/1024 | number : '1.2-2'}}mb\r\n        </td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\" (click)=\"addCartTopDownloads(rowData)\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\" (click)=\"singleAssetDownload(rowData?.rendition_content.preview_content.id)\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\"  role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\"  (click)=\"singleAssetDownload(rowData?.rendition_content.preview_content.id)\">Download</a>\r\n            <a class=\"dropdown-item\"  (click)=\"addCartTopDownloads(rowData)\">Add to cart</a>\r\n            <a class=\"dropdown-item\" >Add to collections</a>\r\n            <a name=\"{{rowData?.asset_id}}\" class=\"dropdown-item\" (click)=\"subscribeAsset(rowData)\" *ngIf=\"!rowData?.subscribed_to\">Subscribe</a>\r\n            <a name=\"{{rowData?.asset_id}}\" class=\"dropdown-item\"  (click)=\"unSubscribeAsset(rowData)\" *ngIf=\"rowData?.subscribed_to\">Unsubscribe</a>\r\n            <a class=\"dropdown-item\" >Copy url</a>\r\n            <a class=\"dropdown-item\" >View file info</a>\r\n          </div>\r\n        </div></td>\r\n        \r\n      </tr>\r\n      <div class=\"spacer\"></div>\r\n      <!-- <tr class=\"row-topd\" *ngFor = >\r\n        <td class=\"row-checkbox\"><label class=\"content\">\r\n          <input type=\"checkbox\" checked=\"checked\">\r\n          <span class=\"checkmark\"></span>\r\n        </label> </td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Powerpoint_Presentation_Templates</td>\r\n        <td class=\"row-download-count\">478</td>\r\n        <td class=\"row-file-size\">71.5mb</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr> -->\r\n    </tbody>\r\n  </table>\r\n  <form name=\"pagingfrm\">\r\n    <div class=\"pagination-topd col-12 p-bx-0\" *ngIf=\"paginationFlag\">\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ul class=\"pagination justify-content-center\">\r\n          <li class=\"page-item \" [attr.disabled]=\"page == 1\">\r\n            <a class=\" previous-btn\" name=\"1\" (click)=\"paginatePrev()\" >Previous</a>\r\n          </li>\r\n          <li class=\"\"><a class=\"page-link page-number\" >{{page}}</a></li>\r\n          \r\n          <li class=\"page-item\" [attr.disabled]=\"page==2\">\r\n            <a class=\"next-btn\" name=\"2\" (click)=\"paginateNext()\" >Next</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listview/listview.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listview/listview.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-bx-0 col-12 topd-container folder-container\">\r\n  <div class=\"row p-m-0\">\r\n  <div class=\"col-md-3 p-bx-0 top-d\">All Files</div>\r\n  <div class=\"col-9 p-bx-0\">\r\n    <div class=\"col-md-12 p-bx-0\">\r\n      <div class=\"row p-m-0\">\r\n    <div class=\"search-container col-sm-10 col-md-10 p-bx-0\">\r\n      <div class=\"form-group has-search\">\r\n        <span class=\"form-control-feedback\"></span>\r\n        <input type=\"text\" class=\"form-control home-search\" placeholder=\"Search\">\r\n      </div>\r\n    </div>\r\n    <div class=\"grid-viewd col-md-2 p-bx-0\">\r\n      <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n          <button type=\"button\" class=\"btn btn-primary gridview-btn\"></button>\r\n        </div>\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n          <button type=\"button\" class=\"btn btn-primary listview-btn\"></button>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row p-m-0 filter-home\">\r\n  <div class=\"col-md-7 p-bx-0 filter\">\r\n    <form class=\"form-inline\">\r\n      <label for=\"filter\">Filter:</label>\r\n    <div class=\"dropdown filterbx\">\r\n      <button class=\"btn btn-secondary dropdown-toggle filter-dropdown\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        All available assets\r\n      </button>\r\n      <div class=\"dropdown-menu dropdown-option-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <a class=\"dropdown-item dropdown-option\" href=\"#\">Monthly</a>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-5 p-bx-0\" style=\"text-align:right\">\r\n    <button type=\"button\" class=\"btn btn-primary btn-bx\">Add to collections</button>\r\n  <button type=\"button\" class=\"btn btn-primary btn-bx bx-btnspace\">Add to cart</button>\r\n  <button type=\"button\" class=\"btn btn-primary btn-bx\">Download</button>\r\n  </div>\r\n</div>\r\n<div class=\"row p-m-0 topd-table-container\">\r\n  <table class=\"table table-borderless topd-table\"  >\r\n    <thead>\r\n      <tr class=\"table-head-row\">\r\n        <th></th>\r\n        <th colspan=\"2\" class=\"name\">Name <i class=\"fa fa-chevron-down\"></i></th>\r\n        <th> last modified<i class=\"fa fa-chevron-down\"></i></th>\r\n        <th colspan=\"4\" class=\"file-size\">File size <i class=\"fa fa-chevron-down\"></i></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"panel\">\r\n      <tr class=\"row-topd\" data-toggle=\"collapse\" data-target=\"#demo1\">\r\n        <td class=\"row-checkbox\" ><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">7/4/2019</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n        \r\n      </tr>\r\n      <!-- <tr id=\"demo1\" class=\"row-topd collapse show row-topd-inner\">\r\n          <td class=\"row-checkbox\" ></td>\r\n          <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n          <td class=\"row-title\">Brand Assets</td>\r\n          <td class=\"row-download-count\">7/4/2019</td>\r\n          <td class=\"row-file-size\">-</td>\r\n          <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n          <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n          <td class=\"row-options\"><div class=\"dropdown show\">\r\n            <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n             \r\n            </a>\r\n          \r\n            <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n              <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n              <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n            </div>\r\n          </div></td>\r\n    </tr> -->\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">4/10/19</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">1/2/2020</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">2/1/2020</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">2/12/2020</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">3/1/2020</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">3/15/2020</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      <tr class=\"row-topd\">\r\n        <td class=\"row-checkbox\"><i class=\"fa fa-plus\"></i></td>\r\n        <td class=\"row-thumbnail-main\"><div class=\"row-thumbnail\"></div></td>\r\n        <td class=\"row-title\">Brand Assets</td>\r\n        <td class=\"row-download-count\">3/21/2020</td>\r\n        <td class=\"row-file-size\">-</td>\r\n        <td class=\"row-addcart\"><div class=\"addcart\"></div></td>\r\n        <td class=\"row-download\"><div class=\"download-row\"></div></td>\r\n        <td class=\"row-options\"><div class=\"dropdown show\">\r\n          <a class=\"dropdown-toggle topd-options\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           \r\n          </a>\r\n        \r\n          <div class=\"dropdown-menu optons-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Download</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to cart</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Add to collections</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Subscribe</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Copy url</a>\r\n            <a class=\"dropdown-item\" href=\"#\">View file info</a>\r\n          </div>\r\n        </div></td>\r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n  <div class=\"pagination-topd col-12 p-bx-0\">\r\n    <nav aria-label=\"Page navigation example\">\r\n      <ul class=\"pagination justify-content-center\">\r\n        <li class=\"page-item disabled\">\r\n          <a class=\" previous-btn\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n        </li>\r\n        <li class=\"\"><a class=\"page-link page-number\" href=\"#\">1</a></li>\r\n        \r\n        <li class=\"page-item\">\r\n          <a class=\"next-btn\" href=\"#\">Next</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"col-md-12 col-12 p-bx-0\">\r\n                <div class=\"row p-bx-0\">\r\n                    <div class=\"emp-profile\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"profile-img\">\r\n                                        <img src=\"./cbx/images/default.png\" alt=\"\"/>\r\n                                        <div class=\"file btn btn-lg btn-primary\">\r\n                                            Change Photo\r\n                                            <input type=\"file\" name=\"file\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"profile-head\">\r\n                                                <h5>\r\n                                                    Test\r\n                                                </h5>\r\n  \r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"row\">\r\n                               \r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"tab-content profile-tab\" id=\"myTabContent\">\r\n                                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <label>User Id</label>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <p>Test123</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <label>Name</label>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <p>Test</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <label>Email</label>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <p>test@cisco.com</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <label>Phone</label>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                            <p>123 456 7890</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                   \r\n                                        </div>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>           \r\n                    </div>\r\n                    </div>\r\n                   \r\n                </div>\r\n                \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/treelistview/treelistview.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/treelistview/treelistview.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#00bceb\" type=\"ball-clip-rotate\">\r\n    <p style=\"font-size: 20px; color:#fff\">Please wait...</p>\r\n</ngx-spinner>\r\n  <div class=\"p-bx-0 col-12 topd-container1\">\r\n    <div class=\"row p-m-0\">\r\n    <div class=\"col-md-3 p-bx-0 top-d\">All Files</div>\r\n    <div class=\"col-9 p-bx-0\">\r\n      <div class=\"col-md-12 p-bx-0\">\r\n        <div class=\"row p-m-0\">\r\n      <div class=\"search-container col-sm-10 col-md-10 p-bx-0\">\r\n        <div class=\"form-group has-search\">\r\n          <span class=\"form-control-feedback\"></span>\r\n          <input type=\"text\" class=\"form-control home-search\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-viewd col-md-2 p-bx-0\">\r\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n            <button type=\"button\" class=\"btn btn-primary gridview-btn\"></button>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n            <button type=\"button\" class=\"btn btn-primary listview-btn\"></button>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-m-0 filter-home1\">\r\n    <div class=\"col-md-7 p-bx-0 filter\">\r\n      <form class=\"form-inline\">\r\n        <label for=\"filter\">Filter:</label>\r\n      <div class=\"dropdown filterbx\">\r\n        <button class=\"btn btn-secondary dropdown-toggle filter-dropdown\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          All available assets\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-option-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n          <a class=\"dropdown-item dropdown-option\" href=\"#\">Weekly</a>\r\n        </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-5 p-bx-0\" style=\"text-align:right\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-bx\" >Add to collections</button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-bx bx-btnspace\" >Add to cart</button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-bx\" >Download</button>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  \r\n<div class=\"Table\">\r\n    <div class=\"Title\">\r\n        <!-- <p>This is a Table</p> -->\r\n    </div>\r\n    <div class=\"Heading\">\r\n        <!-- <div class=\"Cell\">\r\n            <p>Heading 1</p>\r\n        </div>\r\n        <div class=\"Cell\">\r\n            <p>Heading 2</p>\r\n        </div>\r\n        <div class=\"Cell\">\r\n            <p>Heading 3</p>\r\n        </div> -->\r\n    </div>\r\n    <div id=\"data\" [innerHTML]=\"tableRow  | safeHtml\"></div>\r\n    <!-- <div class=\"Row\">\r\n        <div class=\"title-Cell\">\r\n            <p>Row 1 Column 1</p>\r\n        </div>\r\n        <div class=\"Cell\">\r\n            <p>Row 1 Column 2</p>\r\n        </div>\r\n        <div class=\"Cell\">\r\n            <p>Row 1 Column 3</p>\r\n        </div>\r\n    </div> -->\r\n    <!-- <div class=\"pagination-topd col-12 p-bx-0\">\r\n        <nav aria-label=\"Page navigation example\">\r\n          <ul class=\"pagination justify-content-center\">\r\n            <li class=\"page-item disabled\">\r\n              <a class=\" previous-btn\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n            </li>\r\n            <li class=\"\"><a class=\"page-link page-number\" href=\"#\">1</a></li>\r\n            \r\n            <li class=\"page-item\">\r\n              <a class=\"next-btn\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div> -->\r\n\r\n<!-- <div>\r\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n</div> -->\r\n      <div class=\"row col-12 text-center\" *ngIf=\"searchParameters.totalhitcount>10\">\r\n        <div class=\"col-12 text-center\">\r\n            <p-paginator [rows]=\"searchParameters.limit\" [totalRecords]=\"searchParameters.totalhitcount\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/announcements/announcements.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/announcements/announcements.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row p-m-0 announcement-top\">\r\n    <!-- <div class=\"col-sm-12 rightmenu\">\r\n        <div>\r\n            <h6 class=\"Announcemens\">Announcements</h6>\r\n            <span class=\"newBx\">New BX is here!</span>\r\n            <p class=\"checkOut\">Check out what we have done with the new Brand Exchange.</p>\r\n        </div>\r\n        <div class=\"borderTest\">\r\n        </div>\r\n        <div>\r\n            <span class=\"featured\">Featured collections</span>\r\n            <p class=\"checkOut-featured\">Featured collections can be found <a href=\"#\">here.</a></p>\r\n        </div>\r\n    </div>\r\n     -->\r\n\r\n     <div class=\"row p-m-0\">\r\n        <div class=\"col-sm-12 rightmenu\" >\r\n            <div  *ngIf=\"!trtopDownloadData && !trListViewData\">\r\n            <div>\r\n                <h6 class=\"Announcemens\">Announcements</h6>\r\n                <span class=\"newBx\">New BX is here!</span>\r\n                <p class=\"checkOut\">Check out what we have done with the new Brand Exchange.</p>\r\n            </div>\r\n            <!-- <div class=\"borderTest\">\r\n            </div> -->\r\n            <div>\r\n                <span class=\"featured\">Featured collections</span>\r\n                <p class=\"checkOut-featured\">Featured collections can be found <a href=\"#\">here.</a></p>\r\n            </div>\r\n        </div> \r\n        <div *ngIf=\"trtopDownloadData!=null\">\r\n            \r\n            <div class=\"col-sm-12 p-bx-0\">\r\n                <i class=\"fa fa-remove\" (click)=\"removeTopDownloadData()\" aria-hidden=\"true\"></i>\r\n                <div>\r\n                    <p class=\"newBxName\">{{trtopDownloadData.name}} &nbsp;&nbsp;&nbsp;&nbsp; </p>\r\n                   <div class=\"img-anpunce\"> <img class=\"resImg img-fluid\" src={{trtopDownloadData.rendition_content.thumbnail_content.url}}></div>\r\n                </div>\r\n                <div class=\"cart\">\r\n                    <img src=\"./cbx/images/buttons-with-icons/add-to-cart_inactive.png\" class=\"img-cart\"/>\r\n                </div>\r\n                <div class=\"download\">\r\n                    <img (click)=\"rpRowImgDownload(trtopDownloadData.rendition_content.preview_content.id)\" src=\"./cbx/images/buttons-with-icons/download_Inactive.png\" class=\"img-download\"/>\r\n                </div>\r\n                <div class=\"ellipsis\">\r\n                    <img src=\"./cbx/images/buttons-with-icons/options_inactive.png\" class=\"img-options\"/>\r\n                </div>\r\n                <div>\r\n                    <span class=\"newBx\">updated: {{trtopDownloadData.date_last_updated | date: 'dd/MM/yyyy' }}</span>\r\n                    <p class=\"checkOut-featured\">Updated old links, fixed types in instruction guide, fixed file type error</p>\r\n                </div>\r\n                <div>\r\n                    <ul class=\"lastModified\">\r\n                        <li>Last modified by: {{trtopDownloadData.metadata_state_user_name}}</li>\r\n                        <li>Total Downloads: 144k</li>\r\n                        <li>Asset Size: {{trtopDownloadData.rendition_content.preview_content.content_size/1024/1024 | number : '1.2-2'}}mb</li>\r\n                    </ul>\r\n                </div>\r\n                <!-- <div class=\"borderTest\">\r\n                </div> -->\r\n                <div>\r\n                    <ul class=\"createdBy\">\r\n                        <li>Created by: Matero, Sarah</li>\r\n                        <li>Expiration date: 11/12/2028</li>\r\n                        <li>Asset id: {{trtopDownloadData.asset_id}}</li>\r\n                        <li>Legal rights exist: No</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n       \r\n        <div *ngIf=\"trListViewData!=null\">\r\n            <div class=\"col-sm-12 p-bx-0\">\r\n                <i class=\"fa fa-remove\" (click)=\"removeListViewRPData()\" aria-hidden=\"true\"></i>\r\n                <div>\r\n                    <p class=\"newBxName\">{{trListViewData.name}} &nbsp;&nbsp;&nbsp;&nbsp; </p>\r\n                   <div class=\"img-anpunce\"> \r\n                       <img class=\"resImg img-fluid\" src=\"../../../cbx/images/thumbnail_icons/folder-50px.png\" /> \r\n                        <!-- <span *ngIf=\"rowData?.data_type== 'CONTAINER' && !rowData?.rendition_content\" class=\"asset-pannel\">\r\n                            <img src=\"./cbx/images/thumbnail_icons/folder-50px.png\" class=\"img-fluid list-folder-size list-asset-hover\">\r\n                        </span>\r\n                        <span  *ngIf=\"rowData?.data_type== 'CONTAINER' && rowData?.rendition_content\" class=\"asset-pannel\">\r\n                        <img src={{rowData?.rendition_content.thumbnail_content.url}} class=\"img-fluid list-asset-size list-asset-hover\">\r\n                        </span>\r\n                        <span  *ngIf=\"rowData?.data_type== undefined && rowData?.rendition_content\" class=\"asset-pannel\">\r\n                            <img src={{rowData?.rendition_content.thumbnail_content.url}} class=\"img-fluid list-asset-size list-asset-hover\">\r\n                        </span> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"cart\">\r\n                    <img src=\"../../../cbx/images/buttons-with-icons/add-to-cart_inactive.png\" class=\"img-cart\"/>\r\n                </div>\r\n                <div class=\"download\">\r\n                    <img (click)=\"rpRowFolderDownload(trListViewData.rendition_content.thumbnail_content.id)\" src=\"../../../cbx/images/buttons-with-icons/download_Inactive.png\" class=\"img-download\"/>\r\n                </div>\r\n                <div class=\"ellipsis\">\r\n                    <img src=\"../../../cbx/images/buttons-with-icons/options_inactive.png\" class=\"img-options\"/>\r\n                </div>\r\n                <div>\r\n                    <span class=\"newBx\">updated: {{trListViewData.date_last_updated | date: 'MM/dd/yyyy'}}</span>\r\n                    <p class=\"checkOut-featured\">Updated old links, fixed types in instruction guide, fixed file type error</p>\r\n                </div>\r\n                <div>\r\n                    <ul class=\"lastModified\">\r\n                        <li>Last modified by: Matero, Sarah</li>\r\n                        <li>Total Downloads: 144k</li>\r\n                        <li>Asset Size: {{trListViewData.content_size | number : '1.2-2'}}mb</li>\r\n                    </ul>\r\n                </div>\r\n                <!-- <div class=\"borderTest\">\r\n                </div> -->\r\n                <div>\r\n                    <ul class=\"createdBy\">\r\n                        <li>Created by: Matero, Sarah</li>\r\n                        <li>Expiration date: 11/12/2028</li>\r\n                        <li>Asset id: {{trListViewData.asset_id}}</li>\r\n                        <li>Legal rights exist: No</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        </div>\r\n       \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-bx-0 bx-footer\">\r\n    <div class=\"container\">\r\n<div class=\"row p-bx-0\">\r\n    <div class=\"col-md-11 p-bx-0\">\r\n        <div class=\"footer-links\">\r\n            <ul>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/contact-cisco.html\">Contacts</a></li>\r\n                <li><a href=\"https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ\">Feedback</a></li>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/help.html\">Help</a></li>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/sitemap.html\">Site Map</a></li>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/legal/terms-conditions.html\">Terms & Conditions</a></li>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/legal/privacy-full.html\">Privacy Statemnent</a></li>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies\">Cookies</a></li>\r\n                <li><a href=\"//www.cisco.com/c/en/us/about/legal/trademarks.html\">Trademarks</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-1 p-bx-0\"><a href=\"https://www.cisco.com/\"><img src=\"./cbx/images/bx-logo-footer.png\" class=\"logo-footer\"></a></div>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/leftmenu/leftmenu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/leftmenu/leftmenu.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.4)\" size=\"medium\" color=\"#00bceb\" type=\"ball-clip-rotate\">\r\n    <p style=\"font-size: 20px; color:#fff\">Please wait...</p>\r\n  </ngx-spinner>\r\n<div class=\"leftnav-container\">\r\n<div class=\"bx-logo\">\r\n    <img src=\"./cbx/images/Cisco_Logo_no_TM_Sky_Blue-RGB.png\" class=\"img-logo\">\r\n    <div class=\"bx-logo-text\">\r\n        Brand Exchange\r\n    </div>\r\n    <div class=\"menu-icon-bx\">\r\n        <div class=\"menu-container\" (click)=\"myFunction($event)\">\r\n            <div class=\"bar1\"></div>\r\n            <div class=\"bar2\"></div>\r\n            <div class=\"bar3\"></div>\r\n          </div>\r\n    </div>\r\n</div>\r\n<div class=\"left-menu-list\">\r\n    <div class=\"left-menu-item\">\r\n     <div class=\"left-menu-item-home\">\r\n        <a href=\"javascript:;\" (click)=\"homeClick()\" class=\"home-menu active\">\r\n            <!-- routerLink=\"/layout\" routerLinkActive=\"active\" -->\r\n       <span class=\"home-icon\"></span>\r\n       <span class=\"menu-label\">Home</span></a>\r\n     </div>\r\n    </div>\r\n     <div class=\"left-menu-item\">\r\n        <div class=\"left-menu-item-files\">\r\n            <a href=\"javascript:;\" (click)=\"allAssetsClick()\" class=\"home-menu\">\r\n                <!-- routerLink=\"/layout/listview\" -->\r\n           <span class=\"home-icon\"></span>\r\n           <span class=\"menu-label\">All files</span></a>\r\n         </div>\r\n    </div>\r\n    <div class=\"left-menu-item\">\r\n        <div class=\"left-menu-item-collections\">\r\n            <a href=\"javascript:;\" (click)=\"mycollections()\" class=\"home-menu\">\r\n           <span class=\"home-icon\"></span>\r\n           <span class=\"menu-label\">My collections</span></a>\r\n         </div>\r\n    </div>\r\n    <div class=\"left-menu-item\">\r\n        <div class=\"left-menu-item-downloads\">\r\n            <a href=\"javascript:;\" (click)=\"recentDownloads()\" routerLink=\"\" class=\"home-menu\">\r\n           <span class=\"home-icon\"></span>\r\n           <span class=\"menu-label\">Recent downloads</span></a>\r\n         </div>\r\n    </div>\r\n</div>\r\n<div class=\"useful-container\">\r\n    <div class=\"bs-example\">\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingOne\">\r\n                    <div class=\"mb-0\">\r\n                        <span type=\"button\" class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseOne\"> Cisco Brand Exchange </span><span><i class=\"left fa fa-plus\"></i></span>\t\t\t\t\t\t\t\t\t\r\n                    </div>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body cbe-body\">\r\n                        <ul>\r\n                            <li><a routerLink=\"/layout\" routerLinkActive=\"active\">Home</a></li>\r\n                            <li><a href=\"https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ\" target=\"_blank\">Give feedback</a></li>\r\n                            <li><a href=\"https://cdam-dev.cisco.com/otmm/ux-html/index.html?p=folders\" target=\"_blank\">Asset import</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingTwo\">\r\n                    <div class=\"mb-0\">\r\n                        <span type=\"button\" class=\"btn btn-link \" data-toggle=\"collapse\" data-target=\"#collapseTwo\"> Need Help?</span><span> <i class=\"left fa fa-plus\"></i></span>\r\n                    </div>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"collapse \" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body cbe-body\">\r\n                        <ul>\r\n                            <li><a href=\"#\">Home</a></li>\r\n                            <li><a href=\"#\">Give feedback</a></li>\r\n                            <li><a href=\"#\">Asset import</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingThree\">\r\n                    <div class=\"mb-0\">\r\n                        <span type=\"button\" class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseThree\"> Resources</span><span> <i class=\"left fa fa-plus\"></i></span>                     \r\n                    </div>\r\n                <!-- </div> -->\r\n\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body cbe-body\">\r\n                        <ul>\r\n                            <li><a href=\"#\">Home</a></li>\r\n                            <li><a href=\"#\">Give feedback</a></li>\r\n                            <li><a href=\"#\">Asset import</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topmenu/topmenu.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topmenu/topmenu.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row p-m-0 topmenu-container\">\r\n    <div class=\"col-md-9 col-sm-7 p-bx-0\">\r\n        <div class=\"bread-crums\">\r\n            <nav aria-label=\"breadcrumb \">\r\n                <ol class=\"breadcrumb bx-breadcrumb\">\r\n                  <li class=\"breadcrumb-item active\" aria-current=\"page\"><a routerLink=\"/layout\" >Home</a></li>\r\n                </ol>\r\n              </nav>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-5 p-bx-0\">\r\n        <div class=\"topnav-icons navbar \">\r\n            \r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"announcements nav-item\"><a routerLink=\"/layout\" class=\"nav-link active\"></a></li>\r\n                <li class=\"cart nav-item\"> <a routerLink=\"/layout/cart\" class=\"nav-link\"></a></li>\r\n                <li class=\"notifications nav-item\"><a routerLink=\"/layout\" class=\"nav-link\" ></a></li>\r\n                <li class=\"profile nav-item\" (click)=\"profileDetails($event)\"><a routerLink=\"/layout/profile-deails\" class=\"nav-link\" ></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _checkauth_checkauth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkauth/checkauth.component */ "./src/app/checkauth/checkauth.component.ts");



// import { LandingComponent } from './pages/landing/landing.component';

//import { AssetsComponent } from './pages/assets/assets.component';
var routes = [{
        path: '',
        component: _checkauth_checkauth_component__WEBPACK_IMPORTED_MODULE_3__["CheckauthComponent"]
    },
    {
        path: 'layout',
        //canActivate: [LoginGuard],
        // loadChildren: './layout/layout.module#LayoutModule',
        loadChildren: './layout/bxlayout.module#BxlayoutModule',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cbx';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_bxlayout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/bxlayout.module */ "./src/app/layout/bxlayout.module.ts");
/* harmony import */ var _checkauth_checkauth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkauth/checkauth.component */ "./src/app/checkauth/checkauth.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm5/primeng-tree.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/fesm5/primeng-checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm5/elements.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



















//import { AssetdetailsComponent } from './pages/assetdetails/assetdetails.component';
//import { ProfiledetailsComponent } from './shared/profiledetails/profiledetails.component';
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        console.log("in NG Boot Strap");
        var appElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_15__["createCustomElement"])(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], { injector: this.injector });
        customElements.define('cbx-ng', appElement);
    };
    AppModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                //   HeaderComponent,
                //  // BxrootComponent,
                //   FooterComponent,
                //   LeftnavbarComponent,
                //   LandingComponent,
                //   AssetsComponent,
                _checkauth_checkauth_component__WEBPACK_IMPORTED_MODULE_7__["CheckauthComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _layout_bxlayout_module__WEBPACK_IMPORTED_MODULE_6__["BxlayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_12__["TreeModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"].forRoot()
            ],
            providers: [_services_rest_service__WEBPACK_IMPORTED_MODULE_9__["RestService"], _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], primeng_api__WEBPACK_IMPORTED_MODULE_17__["MessageService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"], useValue: '/' }],
            // bootstrap: [AppComponent],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkauth/checkauth.component.css":
/*!***************************************************!*\
  !*** ./src/app/checkauth/checkauth.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrYXV0aC9jaGVja2F1dGguY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/checkauth/checkauth.component.ts":
/*!**************************************************!*\
  !*** ./src/app/checkauth/checkauth.component.ts ***!
  \**************************************************/
/*! exports provided: CheckauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckauthComponent", function() { return CheckauthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var CheckauthComponent = /** @class */ (function () {
    function CheckauthComponent(_restService, _loginservice, _sharedservice, router) {
        this._restService = _restService;
        this._loginservice = _loginservice;
        this._sharedservice = _sharedservice;
        this.router = router;
        //private serviceURL = "/otmmapi/v5/sessions";
        this.serviceURL = "/cbx-app/login";
        this.params = "username=vemachir&password=Oct2019$";
        this.tokenData = null;
        this.resourceData = null;
    }
    CheckauthComponent.prototype.ngOnInit = function () {
        //this.getSessionData();
        console.log('oninit');
        var tokenConfigurationDev = {
            implicitCodeForm: "https://cdam-dev.cisco.com/otdsws/login",
            clientId: "cbxcustom",
            responseType: "token",
            //redirectUri: window.location.href
            //redirectUri: "http://cdam-app-dev-01:11090/cbx"
            redirectUri: "https://cdam-dev.cisco.com/cbx/"
        };
        var accessToken = sessionStorage.getItem("AccessToken");
        if (window.location.host.split(':')[0] == "localhost") {
            this.getSessionData();
        }
        else if (location.href.indexOf('#access_token=') >= 0 && accessToken == null) {
            this.getToken();
        }
        else {
            document.getElementById("tokenForm").setAttribute("action", tokenConfigurationDev.implicitCodeForm);
            document.getElementById("client_id").setAttribute("value", tokenConfigurationDev.clientId);
            document.getElementById("response_type").setAttribute("value", tokenConfigurationDev.responseType);
            document.getElementById("redirect_uri").setAttribute("value", tokenConfigurationDev.redirectUri);
            document.forms["implicitCodeForm"].submit();
        }
    };
    CheckauthComponent.prototype._bkp_ngOnInit = function () {
        //this.getSessionData();
        console.log('oninit');
        var tokenConfigurationDev = {
            implicitCodeForm: "https://cdam-dev.cisco.com/otdsws/login",
            clientId: "cbxcustom",
            responseType: "token",
            //redirectUri: window.location.href
            //redirectUri: "http://cdam-app-dev-01:11090/cbx"
            redirectUri: "https://cdam-dev.cisco.com/cbx/"
        };
        var accessToken = sessionStorage.getItem("AccessToken");
        if (location.href.split('#').length == 3 && accessToken == null) {
            //debugger;
            this.getToken();
        }
        else if (location.href.split('#').length == 2 && accessToken == null) {
            console.log('calling sso page');
            if (window.location.host.split(':')[0] == "localhost") {
                this.getSessionData();
            }
            else {
                //if(window.location.host.toString().indexOf('-dev') !== -1){
                document.getElementById("tokenForm").setAttribute("action", tokenConfigurationDev.implicitCodeForm);
                document.getElementById("client_id").setAttribute("value", tokenConfigurationDev.clientId);
                document.getElementById("response_type").setAttribute("value", tokenConfigurationDev.responseType);
                document.getElementById("redirect_uri").setAttribute("value", tokenConfigurationDev.redirectUri);
                document.forms["implicitCodeForm"].submit();
                //}
            }
        }
        else {
        }
    };
    CheckauthComponent.prototype.getSessionData = function () {
        var _this = this;
        console.log('session');
        this._loginservice.getSessionJSON_Get(this.serviceURL).subscribe(function (data) {
            console.log('in session');
            window.localStorage['session'] = data;
            sessionStorage['session'] = data;
            console.log(localStorage);
            _this.router.navigate(['/layout']);
        });
    };
    CheckauthComponent.prototype.getToken = function () {
        var _this = this;
        debugger;
        console.log('Token');
        this._loginservice.getTokenJSON('/otdsws/rest/authentication/headers').subscribe(function (data) {
            //console.log('In Token, ', data);
            _this.tokenData = data;
            _this.getResourceId();
            //this.router.navigate(['/layout']);
        });
    };
    CheckauthComponent.prototype.getResourceId = function () {
        var _this = this;
        console.log('Resource');
        this._loginservice.getTokenJSON('/otmmapi/v5/systemdetails').subscribe(function (data) {
            //console.log('In Resource, ', data);
            _this.resourceData = data.system_details_resource.system_details_map.entry[4].value;
            _this.getDubTicket();
            //this.router.navigate(['/layout']);
        });
    };
    CheckauthComponent.prototype.getDubTicket = function () {
        var _this = this;
        var params = {
            "ticket": this.tokenData.ticket,
            "targetResourceId": this.resourceData
        };
        this._loginservice.postDubToken('/otdsws/rest/authentication/ticketforresource', params).subscribe(function (data) {
            //console.log('dub Ticket, ', data);
            _this.getJsessionId(data.ticket);
            //this.router.navigate(['/layout']);
        });
    };
    CheckauthComponent.prototype.getJsessionId = function (ticket) {
        var _this = this;
        var frmData = new FormData();
        frmData.append('OTDSTicket', ticket);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]().set('OTDSTicket', ticket);
        // var params = {
        //   "OTDSTicket": ticket,
        // }
        this._loginservice.postJsessionId('/otmm', params).subscribe(function (data) {
            //console.log('Jsession, ', data);
            _this.getAuthToken();
            //this.router.navigate(['/layout']);
        }, function (error) {
            if (error.status == 302 || error.status == 307 || error.status == 200) {
                //this.getAuthToken();
            }
        });
    };
    CheckauthComponent.prototype.getAuthToken = function () {
        var _this = this;
        console.log('AuthToken');
        this._loginservice.getTokenJSON('/otmmapi/v5/sessions').subscribe(function (data) {
            console.log(' in AuthToken, ', data);
            window.localStorage['session'] = JSON.stringify(data.session_resource.session);
            sessionStorage['session'] = JSON.stringify(data.session_resource.session);
            _this.router.navigate(['/layout']);
        });
    };
    CheckauthComponent.ctorParameters = function () { return [
        { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CheckauthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkauth',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkauth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkauth/checkauth.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkauth.component.css */ "./src/app/checkauth/checkauth.component.css")).default]
        })
    ], CheckauthComponent);
    return CheckauthComponent;
}());



/***/ }),

/***/ "./src/app/layout/bxlayout-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/bxlayout-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BXlayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BXlayoutRoutingModule", function() { return BXlayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bxroot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bxroot.component */ "./src/app/layout/bxroot.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _shared_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/leftmenu/leftmenu.component */ "./src/app/shared/leftmenu/leftmenu.component.ts");
/* harmony import */ var _shared_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/announcements/announcements.component */ "./src/app/shared/announcements/announcements.component.ts");
/* harmony import */ var _shared_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/topmenu/topmenu.component */ "./src/app/shared/topmenu/topmenu.component.ts");
/* harmony import */ var _pages_treelistview_treelistview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/treelistview/treelistview.component */ "./src/app/pages/treelistview/treelistview.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_landing_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/landing/cart/cart.component */ "./src/app/pages/landing/cart/cart.component.ts");
/* harmony import */ var _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/assets/assets.component */ "./src/app/pages/assets/assets.component.ts");












var routes = [
    {
        path: '', component: _bxroot_component__WEBPACK_IMPORTED_MODULE_3__["BxrootComponent"],
        children: [
            { path: '', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
            { path: 'listview', component: _pages_treelistview_treelistview_component__WEBPACK_IMPORTED_MODULE_8__["TreelistviewComponent"] },
            { path: 'collections', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
            { path: 'recent-downloads', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
            { path: 'cart', component: _pages_landing_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"] },
            { path: 'profile-deails', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
            // { path: 'collections', component: AssetsComponent },
            // { path: 'gridview', component: GridviewComponent },
            // { path: 'assets', component: AssetsComponent },
            // { path: 'search', component: SearchComponent },
            // { path: 'profile', component: ProfiledetailsComponent },
            // { path: 'listview', component: ListviewComponent },
            // { path: 'assetdetails', component: AssetdetailsComponent },
            //new
            { path: 'leftmenu', component: _shared_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_5__["LeftmenuComponent"] },
            { path: 'announcements', component: _shared_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_6__["AnnouncementsComponent"] },
            { path: 'topmenu', component: _shared_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_7__["TopmenuComponent"] },
            { path: 'assets', component: _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_11__["AssetsComponent"] },
        ]
    }
];
var BXlayoutRoutingModule = /** @class */ (function () {
    function BXlayoutRoutingModule() {
    }
    BXlayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BXlayoutRoutingModule);
    return BXlayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/bxlayout.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layout/bxlayout.module.ts ***!
  \*******************************************/
/*! exports provided: BxlayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BxlayoutModule", function() { return BxlayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bxroot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bxroot.component */ "./src/app/layout/bxroot.component.ts");
/* harmony import */ var _bxlayout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bxlayout-routing.module */ "./src/app/layout/bxlayout-routing.module.ts");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/fesm5/primeng-tree.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panelmenu */ "./node_modules/primeng/fesm5/primeng-panelmenu.js");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm5/primeng-table.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm5/primeng-accordion.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/fesm5/primeng-paginator.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/fesm5/primeng-multiselect.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm5/primeng-tooltip.js");
/* harmony import */ var _shared_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/leftmenu/leftmenu.component */ "./src/app/shared/leftmenu/leftmenu.component.ts");
/* harmony import */ var _shared_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/announcements/announcements.component */ "./src/app/shared/announcements/announcements.component.ts");
/* harmony import */ var _shared_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/topmenu/topmenu.component */ "./src/app/shared/topmenu/topmenu.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages/landing/carousel/carousel.component */ "./src/app/pages/landing/carousel/carousel.component.ts");
/* harmony import */ var _pages_landing_top_downloads_top_downloads_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pages/landing/top-downloads/top-downloads.component */ "./src/app/pages/landing/top-downloads/top-downloads.component.ts");
/* harmony import */ var _pages_listview_listview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pages/listview/listview.component */ "./src/app/pages/listview/listview.component.ts");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/fesm5/primeng-treetable.js");
/* harmony import */ var _pages_treelistview_treelistview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pages/treelistview/treelistview.component */ "./src/app/pages/treelistview/treelistview.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/fesm5/primeng-checkbox.js");
/* harmony import */ var _pages_landing_cart_cart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../pages/landing/cart/cart.component */ "./src/app/pages/landing/cart/cart.component.ts");
/* harmony import */ var _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pages/assets/assets.component */ "./src/app/pages/assets/assets.component.ts");

































var BxlayoutModule = /** @class */ (function () {
    function BxlayoutModule() {
    }
    BxlayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _bxroot_component__WEBPACK_IMPORTED_MODULE_4__["BxrootComponent"],
                _shared_leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_19__["LeftmenuComponent"],
                _shared_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_20__["AnnouncementsComponent"],
                _shared_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_21__["TopmenuComponent"],
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeHtmlPipe"],
                _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _pages_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__["CarouselComponent"],
                _pages_landing_top_downloads_top_downloads_component__WEBPACK_IMPORTED_MODULE_25__["TopDownloadsComponent"],
                _pages_listview_listview_component__WEBPACK_IMPORTED_MODULE_26__["ListviewComponent"],
                _pages_treelistview_treelistview_component__WEBPACK_IMPORTED_MODULE_28__["TreelistviewComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
                _pages_landing_cart_cart_component__WEBPACK_IMPORTED_MODULE_31__["CartComponent"],
                _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_32__["AssetsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _bxlayout_routing_module__WEBPACK_IMPORTED_MODULE_5__["BXlayoutRoutingModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_6__["TreeModule"],
                primeng_panelmenu__WEBPACK_IMPORTED_MODULE_7__["PanelMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_13__["AccordionModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_14__["PaginatorModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_16__["ToastModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__["MultiSelectModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
                primeng_treetable__WEBPACK_IMPORTED_MODULE_27__["TreeTableModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_30__["CheckboxModule"]
            ]
        })
    ], BxlayoutModule);
    return BxlayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/bxroot.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/bxroot.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-nav{\r\n    background-color: #f4f4f4;\r\n    overflow: auto;\r\n    max-width: 21% !important;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 21%;\r\n}\r\n.footer-section{\r\n    min-height: 96px;\r\n    background-color: #1D4572;\r\n}\r\n.landing-page {\r\n    max-width: 78%;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 78%;\r\n}\r\n.sort-by-main{\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.main-page {\r\n    min-height: 750px;\r\n}\r\n@media (max-width: 767px) { \r\n    .left-nav {\r\n    max-width: 100% !important;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n    }\r\n    .landing-page {\r\n        max-width: 100%;\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 100%;\r\n    }\r\n    .landing-page {\r\n        margin-top:20px\r\n    }\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2J4cm9vdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQWE7WUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQWE7WUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7SUFDQSwwQkFBMEI7SUFDMUIsbUJBQWM7WUFBZCxjQUFjO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBYztnQkFBZCxjQUFjO0lBQ2xCO0lBQ0E7UUFDSTtJQUNKO0NBQ0giLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYnhyb290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDIxJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDIxJTtcclxufVxyXG4uZm9vdGVyLXNlY3Rpb257XHJcbiAgICBtaW4taGVpZ2h0OiA5NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFENDU3MjtcclxufVxyXG4ubGFuZGluZy1wYWdlIHtcclxuICAgIG1heC13aWR0aDogNzglO1xyXG4gICAgZmxleDogMCAwIDc4JTtcclxufVxyXG4uc29ydC1ieS1tYWlue1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcclxufVxyXG4ubWFpbi1wYWdlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDc1MHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5sZWZ0LW5hdiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmxhbmRpbmctcGFnZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmxhbmRpbmctcGFnZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4XHJcbiAgICB9XHJcbiB9Il19 */");

/***/ }),

/***/ "./src/app/layout/bxroot.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/bxroot.component.ts ***!
  \********************************************/
/*! exports provided: BxrootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BxrootComponent", function() { return BxrootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BxrootComponent = /** @class */ (function () {
    function BxrootComponent() {
    }
    BxrootComponent.prototype.ngOnInit = function () {
        $("#close-sidebar").click(function () {
            $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function () {
            $(".page-wrapper").addClass("toggled");
        });
    };
    BxrootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bxroot',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bxroot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bxroot.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bxroot.component.css */ "./src/app/layout/bxroot.component.css")).default]
        })
    ], BxrootComponent);
    return BxrootComponent;
}());



/***/ }),

/***/ "./src/app/models/searchparams.ts":
/*!****************************************!*\
  !*** ./src/app/models/searchparams.ts ***!
  \****************************************/
/*! exports provided: Searchparams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchparams", function() { return Searchparams; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Searchparams = /** @class */ (function () {
    function Searchparams() {
        this.gridList = "gridView";
        this.searchKeyword = "";
        this.after = "0";
        this.limit = "10";
        this.totalhitcount = 0;
        this.totalhitcountChild = 0;
        // public search:boolean=false;
        // public paging:boolean=true;
    }
    return Searchparams;
}());



/***/ }),

/***/ "./src/app/pages/assets/assets.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/assets/assets.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assets/assets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/assets/assets.component.ts ***!
  \**************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetsComponent = /** @class */ (function () {
    function AssetsComponent() {
    }
    AssetsComponent.prototype.ngOnInit = function () {
    };
    AssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assets',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assets/assets.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets.component.css */ "./src/app/pages/assets/assets.component.css")).default]
        })
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/carousel/carousel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/landing/carousel/carousel.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  .carousel-image{\r\n    width: 100%;\r\n    height: 280px !important;\r\n  }\r\n  .carousel-indicators li {\r\n    width: 5px;\r\n    height: 5px;\r\n    border-radius: 50%;\r\n    background: #00BCEB 0% 0% no-repeat padding-box;\r\n    border: 2px solid #fff;\r\n    margin: 0px 7px;\r\n  }\r\n  .carousel-indicators .active {\r\n    width: 7px;\r\n    height: 7px;\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    border: 2px solid #00BCEB;\r\n  }\r\n  .carousel-text {\r\n    position: absolute;\r\n    right: 20%;\r\n    top: 24%;\r\n    left: 6%;\r\n    z-index: 10;\r\n  }\r\n  .carousel-heading {\r\n    color: #1D4572;\r\n    font-family: 'CiscoSans-ExtraLight';\r\n    font-size: 35px;\r\n    margin-bottom: -2px;\r\n  }\r\n  .carousel-subtext {\r\n    color: #1D4572;\r\n    font-size: 10px;\r\n    display: block;\r\n    font-family: 'CiscoSans-Bold';\r\n  }\r\n  .btn-bxcarousel {\r\n    background-color: #00bceb;\r\n    border: 2px solid #fff;\r\n    border-radius: 25px;\r\n    font-size: 12px;\r\n    padding: 3px 9px;\r\n    color: #1D4572;\r\n    font-family: 'CiscoSans-Regular';\r\n  }\r\n  .btn-carousel {\r\n    margin-top: 23px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFdBQVc7SUFDWCx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCwrQ0FBK0M7SUFDL0MseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuY2Fyb3VzZWwtaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwQkNFQiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgbWFyZ2luOiAwcHggN3B4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwQkNFQjtcclxuICB9XHJcbiAgLmNhcm91c2VsLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIHRvcDogMjQlO1xyXG4gICAgbGVmdDogNiU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgLmNhcm91c2VsLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMxRDQ1NzI7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1FeHRyYUxpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1zdWJ0ZXh0IHtcclxuICAgIGNvbG9yOiAjMUQ0NTcyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1Cb2xkJztcclxuICB9XHJcbiAgLmJ0bi1ieGNhcm91c2VsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZWI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICBjb2xvcjogIzFENDU3MjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLVJlZ3VsYXInO1xyXG4gIH1cclxuICAuYnRuLWNhcm91c2VsIHtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/carousel/carousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/carousel/carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(_sharedservice, spinner) {
        this._sharedservice = _sharedservice;
        this.spinner = spinner;
        // myInterval = 5000;
        // activeSlideIndex = 0;
        this.carouselData = [];
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.getCarouselData();
    };
    CarouselComponent.prototype.getCarouselData = function () {
        var _this = this;
        this.spinner.show();
        console.log('car');
        this._sharedservice.getService_textResponse('/otmmapi/carousel/getCarouselMetadata').subscribe(function (data) {
            _this.carouselData = JSON.parse(data).result;
            //this.spinner.hide();
        });
    };
    CarouselComponent.ctorParameters = function () { return [
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/carousel/carousel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.css */ "./src/app/pages/landing/carousel/carousel.component.css")).default]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/cart/cart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/landing/cart/cart.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/landing/cart/cart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/cart/cart.component.ts ***!
  \******************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(_dataService) {
        this._dataService = _dataService;
        // public emptyCart: boolean = true;
        this.cartData = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cartData = this._dataService.getCartOption();
    };
    CartComponent.prototype.removeAllCart = function () {
        this.cartData = null;
    };
    CartComponent.prototype.removeCart = function (i) {
        this.cartData.splice(i, 1);
    };
    CartComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/cart/cart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/pages/landing/cart/cart.component.css")).default]
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
        //this.getSessionData();
    };
    LandingComponent.prototype.getSessionData = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/pages/landing/landing.component.css")).default]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/top-downloads/top-downloads.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/landing/top-downloads/top-downloads.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topd-container {\r\n  margin-top: 20px;\r\n}\r\n.top-d {\r\n  font-family: 'CiscoSans-Light';\r\n  font-size: 18px;\r\n}\r\n.form-control-feedback {\r\n  background: url('search_inactive.png') no-repeat left;\r\n  background-size: contain;\r\n  width: 18px;\r\n  height: 18px;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 8px;\r\n  bottom: 4px;\r\n}\r\n.home-search {\r\n  padding-left: 32px;\r\n  border-radius: 17px;\r\n  height: 28px;\r\n  font-size: 13px;\r\n  border: 1px solid #E6E6E6;\r\n  width: 96%;\r\n  -webkit-transition: width 0.4s ease-in-out;\r\n  -webkit-transition: width 0.3s ease-in-out;\r\n  transition: width 0.3s ease-in-out;\r\n}\r\n.home-search:hover {\r\n  border: 1px solid #0B93DB;\r\n}\r\n.home-search:focus {\r\n  \r\n  box-shadow: none;\r\n  border: 1px solid #0B93DB;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: #808080;\r\n  font-size: 12px;\r\n}\r\n::-moz-placeholder {\r\n  color: #808080;\r\n  font-size: 12px;\r\n}\r\n::-ms-input-placeholder {\r\n  color: #808080;\r\n  font-size: 12px;\r\n}\r\n::placeholder {\r\n  color: #808080;\r\n  font-size: 12px;\r\n}\r\n.has-search {\r\n  float: right;\r\n    position: relative;\r\n    width: 50%;\r\n}\r\n.gridview-btn {\r\n  width: 28px;\r\n  height: 28px;\r\n  background: url('grid_folder_view_inactive.png') no-repeat left;\r\n  background-color: none;\r\n  border-radius: none;\r\n  border: none;\r\n  background-size: contain;\r\n}\r\n.gridview-btn:hover {\r\n  background: url('grid_folder_view_hover.png') no-repeat left;\r\n  width: 28px;\r\n  height: 28px;\r\n  background-size: contain;\r\n}\r\n.gridview-btn:focus {\r\n  background: url('grid_folder_view_active.png') no-repeat left;\r\n  width: 28px;\r\n  height: 28px;\r\n  background-size: contain;\r\n  box-shadow: none;\r\n}\r\n.listview-btn {\r\n  width: 28px;\r\n  height: 28px;\r\n  background: url('List-view_inactive.png') no-repeat left;\r\n  background-color: none;\r\n  border-radius: none;\r\n  border: none;\r\n  background-size: contain;\r\n}\r\n.listview-btn:hover {\r\n  width: 28px;\r\n  height: 28px;\r\n  background: url('List-view_hover.png') no-repeat left;\r\n  background-color: none;\r\n  border-radius: none;\r\n  border: none;\r\n  background-size: contain;\r\n}\r\n.listview-btn:focus {\r\n  width: 28px;\r\n  height: 28px;\r\n  background: url('List-view_active.png') no-repeat left;\r\n  background-color: none;\r\n  border-radius: none;\r\n  border: none;\r\n  background-size: contain;\r\n  box-shadow: none;\r\n}\r\n.filter-home {\r\n  margin-top: 8px;\r\n}\r\n.filterbx {\r\n  margin-left: 8px;\r\n}\r\n.filter-home label {\r\n  font-size: 13px;\r\n}\r\n.filter-dropdown, .filter-dropdown:focus, .filter-dropdown:active {\r\n  border-radius: 16px;\r\n  height: 28px;\r\n  width: 100px;\r\n  font-size: 12px;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #f5f5f5;\r\n    color: #3C3C3C;\r\n    text-align: left;\r\n    box-shadow: none;\r\n}\r\n.filter-dropdown:not(:disabled):not(.disabled):active, .filter-dropdown:not(:disabled):not(.disabled).active, .show > .filter-dropdown.dropdown-toggle {\r\n  color: #3C3C3C;\r\n  background-color: #f5f5f5;\r\n  border-color: #f5f5f5;\r\n}\r\n.show > .filter-dropdown.dropdown-toggle:focus {\r\n  box-shadow: none;\r\n}\r\n.dropdown-option-menu {\r\n  padding: 0px;\r\n    margin: 0px;\r\n    border:none;\r\n}\r\n.dropdown-option {\r\n  background-color: #f5f5f5;\r\n    border-color: #f5f5f5;\r\n    border-radius: 16px;\r\n    height: 28px;\r\n    font-size: 13px;\r\n    padding-left: 14px;\r\n    width: 83%;\r\n}\r\n.btn-bx:disabled,.btn-bx:disabled:hover {\r\n  background-color: #fff;\r\n  border: 2px solid #e6e6e6;\r\n  border-radius: 23px;\r\n  color: #808080;\r\n  font-family: 'CiscoSans-Medium';\r\n  font-size: 11px;\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n.btn-bx:disabled:hover {\r\n  cursor: no-drop;\r\n}\r\n.btn-bx {\r\n  background-color: #fff;\r\n  border: 2px solid #00BCEB;\r\n  border-radius: 23px;\r\n  color: #1D4572;\r\n  font-family: 'CiscoSans-Medium';\r\n  font-size: 11px;\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n.btn-bx:focus{\r\n  box-shadow: none;\r\n}\r\n.btn-bx:hover, .btn-bx:focus  {\r\n  background-color: #0B93DB;\r\n  color: #fff;\r\n  border: 2px solid #0B93DB;\r\n}\r\n.bx-btnspace {\r\n  margin-left: 6px;\r\n  margin-right: 6px;\r\n}\r\n.btn-bx:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: none;\r\n}\r\n.topd-table-container {\r\n  margin-top:8px\r\n}\r\n.topd-table tr th {\r\n  font-weight: normal;\r\n}\r\n.table-head-row {\r\n  color: #808080;\r\n}\r\n.topd-options {\r\n  width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('options_inactive.png') no-repeat left;\r\n  background-size: contain;\r\n  position: relative;\r\n    top: 8px;\r\n}\r\n.topd-options:focus, .topd-options:hover {\r\n  width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('Options_hover.png') no-repeat left;\r\n  background-size: contain;\r\n}\r\n.row-topd.selected td {\r\n  color: #1e4471;\r\n}\r\n.addcart,.row-topd.selected td .addcart{\r\n  width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('add-to-cart_inactive.png') no-repeat left;\r\n  background-size: contain;\r\n  position: relative;\r\n    top: 8px;\r\n}\r\n.addcart:hover, .row-topd.selected td .addcart:hover{\r\n  width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('add-to-cart_hover.png') no-repeat left;\r\n  background-size: contain;\r\n}\r\n.download-row, .row-topd.selected td .download-row {\r\n  width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('download_Inactive.png') no-repeat left;\r\n  background-size: contain;\r\n  position: relative;\r\n    top: 8px;\r\n}\r\n.download-row:hover, .row-topd.selected td .download-row:hover {\r\n  width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('download_hover.png') no-repeat left;\r\n  background-size: contain;\r\n}\r\n.row-topd.selected td .download-row, .row-topd.selected td .addcart {\r\n  visibility: inherit;\r\n}\r\n.addcart, .download-row {\r\n  visibility: hidden;\r\n}\r\n/* table.topd-table tr:hover td .addcart, .table.topd-table tr:hover td .download-row, table.topd-table tr:focus td .addcart, .table.topd-table tr:focus td .download-row {\r\n  visibility: inherit;\r\n  } */\r\n.topd-table tr td {\r\n  padding: 0px;\r\n}\r\n.topd-table tr {\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n}\r\n.row-thumbnail {\r\n  width: 43px;\r\n  height: 45px;\r\n}\r\n.topd-table td {\r\n  vertical-align: middle;\r\n}\r\n.topd-table {\r\n  border-collapse: separate;\r\n    border-spacing: 0 8px;\r\n}\r\n.row-topd {\r\n  color: #808080;\r\n  font-size: 14px;\r\n  line-height: 47px;\r\n    min-height: 40px;\r\n    height: 40px;\r\n    box-shadow: 0 0 0 1px #E6E6E6;\r\n    border-radius: 10px;\r\n}\r\n.fa.fa-chevron-down {\r\n  color:#808080\r\n}\r\n.topd-options::after {\r\n  content: unset;\r\n}\r\n.file-size, .name {\r\n  color: #808080;\r\n  font-size: 12px;\r\n}\r\n.spacer {\r\n  min-height: 8px;\r\n}\r\n.selected {\r\n  cursor: pointer;\r\n  background-color: #F5F5F5;\r\n  color: #3C3C3C;\r\n}\r\n.optons-menu {\r\n  width: 160px;\r\n  height: auto;\r\n  border: 1px solid #808080;\r\n  box-shadow: 0px 3px 6px #00000029;\r\n  border-radius: 14px;\r\n  padding: 14px 18px;\r\n    line-height: initial;\r\n    left: -120px !important;\r\n}\r\n.optons-menu .dropdown-item {\r\n  font-size: 12px;\r\n  padding: 8px 0px;\r\n  color: #808080;\r\n}\r\n.optons-menu .dropdown-item:hover {\r\n  background-color: #fff;\r\n  color: #1D4572;\r\n}\r\n.optons-menu .dropdown-item:focus {\r\n  outline: none;\r\n}\r\n.previous-btn, .next-btn {\r\n  border-radius: 23px;\r\n    background-color: #fff;\r\n    color: #808080;\r\n    font-size: 12px;\r\n    padding: 6px 12px;\r\n    border: 1px solid #E6E6E6;  \r\n}\r\n.previous-btn:hover, .next-btn:hover {\r\n  text-decoration: none;\r\n  color: #1D4572;\r\n}\r\n.previous-btn:focus, .next-btn:focus {\r\n  outline: 0;\r\n}\r\n.page-number {\r\n    font-family: 'CiscoSans-Bold';\r\n    font-size: 12px;\r\n    color: #3C3C3C;\r\n    border: none;\r\n    padding: 7px;\r\n    margin: 0px 18px;\r\n}\r\n.row-checkbox {\r\n  width: 6%;\r\n\r\n}\r\n.img-fluid.list-asset-size.list-asset-hover {\r\n  height: 23px;\r\n    width: 34px;\r\n}\r\n.row-thumbnail-main {\r\n  width: 5%;\r\n}\r\n.row-title {\r\n  width: 62%;\r\n}\r\n.row-download-count {\r\n  width: 5%;\r\n}\r\n.row-file-size {\r\n  width: 8%;\r\n}\r\n.topd-table tr th {\r\n  padding: 0px 0px 6px 0px;\r\n}\r\n.pagination-topd {\r\n  margin-top: 16px;\r\n    margin-bottom: 60px;\r\n}\r\n.main { \r\n  display: block; \r\n  position: relative; \r\n  padding-left: 26px; \r\n  margin-bottom: 0px; \r\n  cursor: pointer; \r\n  font-size: 20px; \r\n}\r\n/* Hide the default checkbox */\r\ninput[type=checkbox] { \r\n  visibility: hidden; \r\n}\r\n/* Creating a custom checkbox \r\nbased on demand */\r\n.geekmark { \r\n  position: absolute;\r\n    top: 14px;\r\n    left: 10px;\r\n    height: 18px;\r\n    width: 18px;\r\n    background-color: #fff;\r\n    border: 2px solid #E6E6E6;\r\n    border-radius: 5px;\r\n}\r\n/* Specify the background color to be \r\nshown when checkbox is checked */\r\n.main input:checked ~ .geekmark { \r\n  background-color:#0B93DB; \r\n  border: 2px solid #0B93DB;\r\n}\r\n/* Checkmark to be shown in checkbox */\r\n/* It is not be shown when not checked */\r\n.geekmark:after { \r\n  content: \"\"; \r\n  position: absolute; \r\n  display: none; \r\n}\r\n/* Display checkmark when checked */\r\n.main input:checked ~ .geekmark:after { \r\n  display: block; \r\n}\r\n/* Styling the checkmark using webkit */\r\n/* Rotated the rectangle by 45 degree and  \r\nshowing only two border to make it look \r\nlike a tickmark */\r\n.main .geekmark:after { \r\n  left: 4px;\r\n    bottom: 3px;\r\n    width: 6px;\r\n    height: 12px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.search-container {\r\n  max-width: 85%;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 85%;\r\n}\r\n.grid-viewd {\r\n  max-width: 15%;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 15%;\r\n}\r\n@media (max-width: 1099px) {  \r\n  .has-search {\r\n    float: initial;\r\n  }\r\n  .search-icons {\r\n    margin-top: 12px;\r\n  }\r\n  .filter-dropdown {\r\n    width: 90px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90b3AtZG93bmxvYWRzL3RvcC1kb3dubG9hZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFEQUErRjtFQUMvRix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLDBDQUEwQztFQUMxQywwQ0FBa0M7RUFBbEMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUhBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFIQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBSEE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0RBQXVHO0VBQ3ZHLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsNERBQW9HO0VBQ3BHLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSw2REFBcUc7RUFDckcsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdEQUFnRztFQUNoRyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscURBQTZGO0VBQzdGLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzREFBOEY7RUFDOUYsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtJQUNWLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7SUFDVCxZQUFZO0VBQ2QscUJBQXFCO0VBQ3JCLHNEQUFnRztFQUNoRyx3QkFBd0I7RUFDeEIsa0JBQWtCO0lBQ2hCLFFBQVE7QUFDWjtBQUNBO0VBQ0UsV0FBVztJQUNULFlBQVk7RUFDZCxxQkFBcUI7RUFDckIsbURBQTZGO0VBQzdGLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztJQUNULFlBQVk7RUFDZCxxQkFBcUI7RUFDckIsMERBQW9HO0VBQ3BHLHdCQUF3QjtFQUN4QixrQkFBa0I7SUFDaEIsUUFBUTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0lBQ1QsWUFBWTtFQUNkLHFCQUFxQjtFQUNyQix1REFBaUc7RUFDakcsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxXQUFXO0lBQ1QsWUFBWTtFQUNkLHFCQUFxQjtFQUNyQix1REFBaUc7RUFDakcsd0JBQXdCO0VBQ3hCLGtCQUFrQjtJQUNoQixRQUFRO0FBQ1o7QUFDQTtFQUNFLFdBQVc7SUFDVCxZQUFZO0VBQ2QscUJBQXFCO0VBQ3JCLG9EQUE4RjtFQUM5Rix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0tBRUs7QUFFTDtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTOztBQUVYO0FBQ0E7RUFDRSxZQUFZO0lBQ1YsV0FBVztBQUNmO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZ0JBQWdCO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBS0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtpQkFDaUI7QUFDakI7RUFDRSxrQkFBa0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7Z0NBQ2dDO0FBQ2hDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjtBQUVBLHNDQUFzQztBQUN0Qyx3Q0FBd0M7QUFDeEM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLGNBQWM7QUFDaEI7QUFFQSx1Q0FBdUM7QUFDdkM7O2lCQUVpQjtBQUNqQjtFQUNFLFNBQVM7SUFDUCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7QUFDQTtFQUNFLGNBQWM7SUFDWixtQkFBYTtZQUFiLGFBQWE7QUFDakI7QUFDQTtFQUNFLGNBQWM7SUFDWixtQkFBYTtZQUFiLGFBQWE7QUFDakI7QUFHQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvdG9wLWRvd25sb2Fkcy90b3AtZG93bmxvYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wZC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRvcC1kIHtcclxuICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1MaWdodCc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvc2VhcmNoX2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA4cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbn1cclxuLmhvbWUtc2VhcmNoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNkU2RTY7XHJcbiAgd2lkdGg6IDk2JTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4uaG9tZS1zZWFyY2g6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwQjkzREI7XHJcbn1cclxuLmhvbWUtc2VhcmNoOmZvY3VzIHtcclxuICBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwQjkzREI7XHJcbn1cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5oYXMtc2VhcmNoIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5ncmlkdmlldy1idG4ge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9ncmlkX2ZvbGRlcl92aWV3X2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5ncmlkdmlldy1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL2dyaWRfZm9sZGVyX3ZpZXdfaG92ZXIucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4uZ3JpZHZpZXctYnRuOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9ncmlkX2ZvbGRlcl92aWV3X2FjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmxpc3R2aWV3LWJ0biB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL0xpc3Qtdmlld19pbmFjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4ubGlzdHZpZXctYnRuOmhvdmVyIHtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvTGlzdC12aWV3X2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5saXN0dmlldy1idG46Zm9jdXMge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9MaXN0LXZpZXdfYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmZpbHRlci1ob21lIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmZpbHRlcmJ4IHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi5maWx0ZXItaG9tZSBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5maWx0ZXItZHJvcGRvd24sIC5maWx0ZXItZHJvcGRvd246Zm9jdXMsIC5maWx0ZXItZHJvcGRvd246YWN0aXZlIHtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICBjb2xvcjogIzNDM0MzQztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5maWx0ZXItZHJvcGRvd246bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuZmlsdGVyLWRyb3Bkb3duOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuZmlsdGVyLWRyb3Bkb3duLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICMzQzNDM0M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLnNob3cgPiAuZmlsdGVyLWRyb3Bkb3duLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZHJvcGRvd24tb3B0aW9uLW1lbnUge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLmRyb3Bkb3duLW9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogODMlO1xyXG59XHJcbi5idG4tYng6ZGlzYWJsZWQsLmJ0bi1ieDpkaXNhYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbiAgZm9udC1mYW1pbHk6ICdDaXNjb1NhbnMtTWVkaXVtJztcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcbi5idG4tYng6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG4uYnRuLWJ4IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMEJDRUI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBjb2xvcjogIzFENDU3MjtcclxuICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1NZWRpdW0nO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbn1cclxuLmJ0bi1ieDpmb2N1c3tcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idG4tYng6aG92ZXIsIC5idG4tYng6Zm9jdXMgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI5M0RCO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwQjkzREI7XHJcbn1cclxuLmJ4LWJ0bnNwYWNlIHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbi5idG4tYng6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi50b3BkLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDo4cHhcclxufVxyXG4udG9wZC10YWJsZSB0ciB0aCB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udGFibGUtaGVhZC1yb3cge1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcblxyXG4udG9wZC1vcHRpb25zIHtcclxuICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9vcHRpb25zX2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxufVxyXG4udG9wZC1vcHRpb25zOmZvY3VzLCAudG9wZC1vcHRpb25zOmhvdmVyIHtcclxuICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9PcHRpb25zX2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4ucm93LXRvcGQuc2VsZWN0ZWQgdGQge1xyXG4gIGNvbG9yOiAjMWU0NDcxO1xyXG59XHJcbi5hZGRjYXJ0LC5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuYWRkY2FydHtcclxuICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9hZGQtdG8tY2FydF9pbmFjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4cHg7XHJcbn1cclxuLmFkZGNhcnQ6aG92ZXIsIC5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuYWRkY2FydDpob3ZlcntcclxuICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9hZGQtdG8tY2FydF9ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuLmRvd25sb2FkLXJvdywgLnJvdy10b3BkLnNlbGVjdGVkIHRkIC5kb3dubG9hZC1yb3cge1xyXG4gIHdpZHRoOiAyN3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2NieC9pbWFnZXMvYnV0dG9ucy13aXRoLWljb25zL2Rvd25sb2FkX0luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxufVxyXG4uZG93bmxvYWQtcm93OmhvdmVyLCAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmRvd25sb2FkLXJvdzpob3ZlciB7XHJcbiAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vY2J4L2ltYWdlcy9idXR0b25zLXdpdGgtaWNvbnMvZG93bmxvYWRfaG92ZXIucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuZG93bmxvYWQtcm93LCAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmFkZGNhcnQge1xyXG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcbn1cclxuLmFkZGNhcnQsIC5kb3dubG9hZC1yb3cge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4vKiB0YWJsZS50b3BkLXRhYmxlIHRyOmhvdmVyIHRkIC5hZGRjYXJ0LCAudGFibGUudG9wZC10YWJsZSB0cjpob3ZlciB0ZCAuZG93bmxvYWQtcm93LCB0YWJsZS50b3BkLXRhYmxlIHRyOmZvY3VzIHRkIC5hZGRjYXJ0LCAudGFibGUudG9wZC10YWJsZSB0cjpmb2N1cyB0ZCAuZG93bmxvYWQtcm93IHtcclxuICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG4gIH0gKi9cclxuICBcclxuLnRvcGQtdGFibGUgdHIgdGQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4udG9wZC10YWJsZSB0ciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucm93LXRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDQzcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi50b3BkLXRhYmxlIHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50b3BkLXRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgOHB4O1xyXG59XHJcbi5yb3ctdG9wZCB7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjRTZFNkU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZmEuZmEtY2hldnJvbi1kb3duIHtcclxuICBjb2xvcjojODA4MDgwXHJcbn1cclxuLnRvcGQtb3B0aW9uczo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IHVuc2V0O1xyXG59XHJcbi5maWxlLXNpemUsIC5uYW1lIHtcclxuICBjb2xvcjogIzgwODA4MDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNwYWNlciB7XHJcbiAgbWluLWhlaWdodDogOHB4O1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgY29sb3I6ICMzQzNDM0M7XHJcbn1cclxuLm9wdG9ucy1tZW51IHtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICBsZWZ0OiAtMTIwcHggIWltcG9ydGFudDtcclxufVxyXG4ub3B0b25zLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcbi5vcHRvbnMtbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzFENDU3MjtcclxufVxyXG4ub3B0b25zLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnByZXZpb3VzLWJ0biwgLm5leHQtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNkU2OyAgXHJcbn1cclxuLnByZXZpb3VzLWJ0bjpob3ZlciwgLm5leHQtYnRuOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMxRDQ1NzI7XHJcbn1cclxuLnByZXZpb3VzLWJ0bjpmb2N1cywgLm5leHQtYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcbi5wYWdlLW51bWJlciB7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1Cb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luOiAwcHggMThweDtcclxufVxyXG4ucm93LWNoZWNrYm94IHtcclxuICB3aWR0aDogNiU7XHJcblxyXG59XHJcbi5pbWctZmx1aWQubGlzdC1hc3NldC1zaXplLmxpc3QtYXNzZXQtaG92ZXIge1xyXG4gIGhlaWdodDogMjNweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG59XHJcbi5yb3ctdGh1bWJuYWlsLW1haW4ge1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG4ucm93LXRpdGxlIHtcclxuICB3aWR0aDogNjIlO1xyXG59XHJcbi5yb3ctZG93bmxvYWQtY291bnQge1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG4ucm93LWZpbGUtc2l6ZSB7XHJcbiAgd2lkdGg6IDglO1xyXG59XHJcbi50b3BkLXRhYmxlIHRyIHRoIHtcclxuICBwYWRkaW5nOiAwcHggMHB4IDZweCAwcHg7XHJcbn1cclxuLnBhZ2luYXRpb24tdG9wZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5tYWluIHsgXHJcbiAgZGlzcGxheTogYmxvY2s7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyBcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG4gIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgZm9udC1zaXplOiAyMHB4OyBcclxufSBcclxuXHJcbi8qIEhpZGUgdGhlIGRlZmF1bHQgY2hlY2tib3ggKi8gXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHsgXHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyBcclxufSBcclxuXHJcbi8qIENyZWF0aW5nIGEgY3VzdG9tIGNoZWNrYm94IFxyXG5iYXNlZCBvbiBkZW1hbmQgKi8gXHJcbi5nZWVrbWFyayB7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTZFNkU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59IFxyXG5cclxuLyogU3BlY2lmeSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBiZSBcclxuc2hvd24gd2hlbiBjaGVja2JveCBpcyBjaGVja2VkICovIFxyXG4ubWFpbiBpbnB1dDpjaGVja2VkIH4gLmdlZWttYXJrIHsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMEI5M0RCOyBcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMEI5M0RCO1xyXG59IFxyXG5cclxuLyogQ2hlY2ttYXJrIHRvIGJlIHNob3duIGluIGNoZWNrYm94ICovIFxyXG4vKiBJdCBpcyBub3QgYmUgc2hvd24gd2hlbiBub3QgY2hlY2tlZCAqLyBcclxuLmdlZWttYXJrOmFmdGVyIHsgXHJcbiAgY29udGVudDogXCJcIjsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBkaXNwbGF5OiBub25lOyBcclxufSBcclxuXHJcbi8qIERpc3BsYXkgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqLyBcclxuLm1haW4gaW5wdXQ6Y2hlY2tlZCB+IC5nZWVrbWFyazphZnRlciB7IFxyXG4gIGRpc3BsYXk6IGJsb2NrOyBcclxufSBcclxuXHJcbi8qIFN0eWxpbmcgdGhlIGNoZWNrbWFyayB1c2luZyB3ZWJraXQgKi8gXHJcbi8qIFJvdGF0ZWQgdGhlIHJlY3RhbmdsZSBieSA0NSBkZWdyZWUgYW5kICBcclxuc2hvd2luZyBvbmx5IHR3byBib3JkZXIgdG8gbWFrZSBpdCBsb29rIFxyXG5saWtlIGEgdGlja21hcmsgKi8gXHJcbi5tYWluIC5nZWVrbWFyazphZnRlciB7IFxyXG4gIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn0gXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDg1JTtcclxuICAgIGZsZXg6IDAgMCA4NSU7XHJcbn1cclxuLmdyaWQtdmlld2Qge1xyXG4gIG1heC13aWR0aDogMTUlO1xyXG4gICAgZmxleDogMCAwIDE1JTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDk5cHgpIHsgIFxyXG4gIC5oYXMtc2VhcmNoIHtcclxuICAgIGZsb2F0OiBpbml0aWFsO1xyXG4gIH1cclxuICAuc2VhcmNoLWljb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5maWx0ZXItZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/top-downloads/top-downloads.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing/top-downloads/top-downloads.component.ts ***!
  \************************************************************************/
/*! exports provided: TopDownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopDownloadsComponent", function() { return TopDownloadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_listview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/listview.service */ "./src/app/services/listview.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_searchparams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/searchparams */ "./src/app/models/searchparams.ts");









var TopDownloadsComponent = /** @class */ (function () {
    function TopDownloadsComponent(_sharedservice, listViewService, spinner, _dataService, messageService) {
        this._sharedservice = _sharedservice;
        this.listViewService = listViewService;
        this.spinner = spinner;
        this._dataService = _dataService;
        this.messageService = messageService;
        this.subscribeunsubscribe = false;
        this.topDownloadsRowCartData = [];
        this.btnEnableDisable = true;
        this.searchParameters = new src_app_models_searchparams__WEBPACK_IMPORTED_MODULE_8__["Searchparams"]();
        this.PageLimit = "10";
        this.PageAfter = "0";
        this.page = 1;
        this.searchKeyword = "";
    }
    TopDownloadsComponent.prototype.ngOnInit = function () {
        this.getTopDownloadsData();
        //this.topDownladgrouping();
        $(".topd-table tr").click(function () {
        });
    };
    TopDownloadsComponent.prototype.getTopDownloadsData = function () {
        var _this = this;
        //this.spinner.show();
        console.log('cars');
        this.assetId = 'c7c0b34a5fa903aacec8a0b5525cf6b8d9a016f5';
        // var serviceUrl='/otmmapi/v5/folders/'+this.assetId+'/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=full&after='+this.PageAfter+'&limit='+this.PageLimit+'&preference_id=ARTESIA.PREFERENCE.SPREADSHEETVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=full&after=' + this.PageAfter + '&limit=' + this.PageLimit + '&preference_id=ARTESIA.PREFERENCE.SPREADSHEETVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            console.log('in cars');
            if (window.location.host.split(':')[0] == "localhost") {
                var topdData = data.folder_children.asset_list.filter(function (fl) { return fl.data_type != "undefined"; });
                for (var i = 0; i < topdData.length; i++) {
                    topdData[i].rendition_content.preview_content.url = "https://cdam-dev.cisco.com" + topdData[i].rendition_content.preview_content.url;
                    topdData[i].isSelected = false;
                }
                _this.topDownloadData = topdData;
                //this.fourTtopDownloadData = this.chunkArray(4);
            }
            else {
                var topdData = data.folder_children.asset_list.filter(function (fl) { return fl.data_type != "undefined"; });
                for (var i = 0; i < topdData.length; i++) {
                    //topdData[i].rendition_content.preview_content.url = "https://cdam-dev.cisco.com" + topdData[i].rendition_content.preview_content.url;
                    topdData[i].isSelected = false;
                }
                _this.topDownloadData = topdData;
                // this.fourTtopDownloadData = this.chunkArray(4);
            }
            console.log(_this.topDownloadData);
            //if(this.topDownloadData.length>10)
            _this.spinner.hide();
        });
    };
    //onclick func in topdownloads
    TopDownloadsComponent.prototype.topDownloadsData = function (name) {
        $('#' + name.asset_id).addClass("selected").siblings().removeClass("selected");
        var selectedLength = this.topDownloadData.filter(function (x) { return x.isSelected == true; }).length;
        if (selectedLength > 1) {
            this.listViewService.trRightPanel(null);
        }
        else {
            this.listViewService.trRightPanel(name);
        }
    };
    //using this function sending row data to cart
    TopDownloadsComponent.prototype.addCartTopDownloads = function (cart) {
        this.topDownloadsRowCartData = this._dataService.getCartOption();
        var length = this.topDownloadsRowCartData.filter(function (x) { return x.asset_id == cart.asset_id; }).length;
        if (length == 0) {
            this.topDownloadsRowCartData.push(cart);
        }
        this._dataService.setCartOption(this.topDownloadsRowCartData);
        console.log("cart Data:", this.topDownloadsRowCartData);
    };
    TopDownloadsComponent.prototype.buildAssetJson = function (assetid) {
        this.selection_context = { selection_context_param: { selection_context: { asset_ids: [assetid],
                    asssetContentType: [],
                    assetSubContentType: [],
                    type: "com.artesia.asset.selection.AssetIdsSelectionContext",
                    include_descendants: "NONE"
                } } };
        return this.selection_context;
    };
    //subscribe and unsubscribe
    TopDownloadsComponent.prototype.subscribeAsset = function (obj) {
        var _this = this;
        //this.subscribeunsubscribe=true;
        obj.subscribed_to = true;
        var assetData = JSON.stringify(this.buildAssetJson(obj.asset_id));
        //formdata
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('action', 'subscribe')
            .set('selection_context', assetData);
        var url = "/otmmapi/v5/assets/subscriptions";
        this._sharedservice.postService(url, params).subscribe(function (result) {
            console.log('subsribeList', result);
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Subscribed to 1 asset' });
            //this.subscribedbtnText="Unsubscribe";
        });
    };
    TopDownloadsComponent.prototype.unSubscribeAsset = function (obj) {
        var _this = this;
        //this.subscribeunsubscribe=false;
        obj.subscribed_to = false;
        var deleteAssetUrl = '/otmmapi/v5/assets/subscriptions?action=un_subscribe&selection_context=%7B%22selection_context_param%22%3A%7B%22selection_context%22%3A%7B%22asset_ids%22%3A%5B%22' + obj.asset_id + '%22%5D%2C%22asssetContentType%22%3A%5B%5D%2C%22assetSubContentType%22%3A%5B%5D%2C%22type%22%3A%22com.artesia.asset.selection.AssetIdsSelectionContext%22%2C%22include_descendants%22%3A%22NONE%22%7D%7D%7D';
        this._sharedservice.deleteService(deleteAssetUrl).subscribe(function (result) {
            console.log('deletesSbsribeList', result);
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Unsubscribed from 1 folder/asset.' });
            //this.subscribedbtnText="Subscribe";
        });
    };
    TopDownloadsComponent.prototype.checkUnAll = function () {
        if (this.checkAll) {
            this.btnEnableDisable = false;
        }
        else {
            this.btnEnableDisable = true;
        }
        for (var i = 0; i < this.topDownloadData.length; i++) {
            if (this.checkAll) {
                this.topDownloadData[i].isSelected = true;
            }
            else {
                this.topDownloadData[i].isSelected = false;
            }
        }
    };
    TopDownloadsComponent.prototype.mutltiAssetDownloads = function () {
        var selectedAssetIds = [];
        var selectedContentType = [];
        for (var i = 0; i < this.topDownloadData.length; i++) {
            if (this.topDownloadData[i].isSelected) {
                var iframe = $('<iframe style="visibility: collapse;"></iframe>');
                $('body').append(iframe);
                var content = iframe[0].contentDocument;
                var url = '/otmmapi/v5/renditions/' + this.topDownloadData[i].rendition_content.preview_content.id;
                var form = '<form action="' + url + '" method="GET"><input type="hidden" name="disposition" value="attachment" /></form>';
                content.write(form);
                $('form', content).submit();
                setTimeout((function (iframe) {
                    return function () {
                        iframe.remove();
                    };
                })(iframe), 2000);
            }
        }
    };
    TopDownloadsComponent.prototype.singleAssetDownload = function (id) {
        var url = '/otmmapi/v5/renditions/' + id + '?disposition=attachment';
        var link = document.createElement('a');
        link.href = url;
        link.click();
    };
    TopDownloadsComponent.prototype.checkUncheckAll = function () {
        for (var i = 0; i < this.topDownloadData.length; i++) {
            if (this.selectAll) {
                this.btnEnableDisable = false;
                this.topDownloadData[i].isSelected = true;
            }
            else {
                this.btnEnableDisable = true;
                this.topDownloadData[i].isSelected = false;
            }
        }
    };
    TopDownloadsComponent.prototype.checkUncheckSingle = function (flag, asset_id) {
        var selectedLength = this.topDownloadData.filter(function (x) { return x.isSelected == true; }).length;
        if (selectedLength > 0) {
            this.btnEnableDisable = false;
            if (selectedLength > 1) {
                this.listViewService.trRightPanel(null);
            }
        }
        else {
            this.btnEnableDisable = true;
        }
        if (selectedLength == this.topDownloadData.length) {
            this.selectAll = true;
        }
        else {
            this.selectAll = false;
        }
    };
    TopDownloadsComponent.prototype.getSearchData = function () {
        var _this = this;
        this.spinner.show();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('keyword_query', '(' + this.searchKeyword + ')')
            .set('load_type', 'metadata')
            .set('load_multilingual_values', 'true')
            .set('level_of_detail', 'slim')
            .set('after', this.PageAfter)
            .set('limit', this.PageLimit)
            .set('multilingual_language_code', 'en_US')
            .set('folder_filter_type', 'all')
            .set('folder_filter', this.assetId)
            .set('search_config_id', '3')
            .set('keyword_scope_id', '3')
            .set('preference_id', 'ARTESIA.PREFERENCE.SPREADSHEETVIEW.DISPLAYED_FIELDS');
        var url = "/otmmapi/v5/search/text";
        this._sharedservice.postService(url, params).subscribe(function (result) {
            console.log('AssetList', result);
            //this.searchParameters.totalhitcount=result.search_result_resource.search_result.total_hit_count;
            _this.topDownloadData = result.search_result_resource.asset_list;
            // if(this.topDownloadData.length>0)
            // this.listViewService.listviewsortbtn(true);
            // else
            // this.listViewService.listviewsortbtn(false);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TopDownloadsComponent.prototype.paginateNext = function () {
        this.PageAfter = String(this.page * 10);
        this.page = this.page - 1;
        this.getSearchData();
    };
    TopDownloadsComponent.prototype.paginatePrev = function () {
        this.page = this.page - 1;
        this.PageAfter = String(this.page * 10);
        this.getSearchData();
    };
    TopDownloadsComponent.ctorParameters = function () { return [
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
        { type: _services_listview_service__WEBPACK_IMPORTED_MODULE_3__["ListViewService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
    ]; };
    TopDownloadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-downloads',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-downloads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/top-downloads/top-downloads.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-downloads.component.css */ "./src/app/pages/landing/top-downloads/top-downloads.component.css")).default]
        })
    ], TopDownloadsComponent);
    return TopDownloadsComponent;
}());

// checkUncheckAll() {
//   for (var i = 0; i < this.topDownloadData.length; i++) {
//     this.topDownloadData[i].isSelected = this.selectAll;
//   }
//   this.getCheckedItemList();
// }
// isAllSelected() {
//   this.selectAll = this.topDownloadData.every(function(item:any) {
//       return item.isSelected == true;
//     })
//   this.getCheckedItemList();
//  if(this.topDownloadData.length==this.checkedList.length){
//   this.selectAll==true;
//  }
//  else{
//   this.selectAll==false;
//  }
// }
// checkedList:any;
// getCheckedItemList(){
//   this.checkedList = [];
//   for (var i = 0; i < this.topDownloadData.length; i++) {
//     if(this.topDownloadData[i].isSelected)
//     this.checkedList.push(this.topDownloadData[i]);
//   }
//   //this.checkedList = JSON.stringify(this.checkedList);
// }


/***/ }),

/***/ "./src/app/pages/listview/listview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/listview/listview.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topd-container.folder-container {\r\n    margin-top: 0px;\r\n}\r\n.table-head-row {\r\n    color: #808080;\r\n}\r\n.topd-container {\r\n    margin-top: 20px;\r\n  }\r\n.top-d {\r\n    font-family: 'CiscoSans-Light';\r\n    font-size: 18px;\r\n  }\r\n.form-control-feedback {\r\n    background: url('search_inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    width: 18px;\r\n    height: 18px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 8px;\r\n    bottom: 4px;\r\n  }\r\n.home-search {\r\n    padding-left: 35px;\r\n    border-radius: 17px;\r\n    height: 28px;\r\n    font-size: 13px;\r\n    border: 1px solid #E6E6E6;\r\n    width: 96%;\r\n    -webkit-transition: width 0.4s ease-in-out;\r\n    -webkit-transition: width 0.3s ease-in-out;\r\n    transition: width 0.3s ease-in-out;\r\n  }\r\n.home-search:hover {\r\n    border: 1px solid #0B93DB;\r\n  }\r\n.home-search:focus {\r\n    \r\n    box-shadow: none;\r\n    border: 1px solid #0B93DB;\r\n  }\r\n.has-search {\r\n    float: right;\r\n      position: relative;\r\n      width: 53%;\r\n  }\r\n.gridview-btn {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('grid_folder_view_inactive.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n  }\r\n.gridview-btn:hover {\r\n    background: url('grid_folder_view_hover.png') no-repeat left;\r\n    width: 28px;\r\n    height: 28px;\r\n    background-size: contain;\r\n  }\r\n.gridview-btn:focus {\r\n    background: url('grid_folder_view_active.png') no-repeat left;\r\n    width: 28px;\r\n    height: 28px;\r\n    background-size: contain;\r\n    box-shadow: none;\r\n  }\r\n.listview-btn {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('List-view_inactive.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n  }\r\n.listview-btn:hover {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('List-view_hover.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n  }\r\n.listview-btn:focus {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('List-view_active.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n    box-shadow: none;\r\n  }\r\n.filter-home {\r\n    margin-top: 8px;\r\n  }\r\n.filterbx {\r\n    margin-left: 8px;\r\n  }\r\n.filter-home label {\r\n    font-size: 13px;\r\n  }\r\n.filter-dropdown, .filter-dropdown:focus, .filter-dropdown:active {\r\n    border-radius: 16px;\r\n    height: 28px;\r\n    width: 150px;\r\n    font-size: 12px;\r\n      background-color: #f5f5f5;\r\n      border: 1px solid #f5f5f5;\r\n      color: #3C3C3C;\r\n      text-align: left;\r\n      box-shadow: none;\r\n  }\r\n.filter-dropdown:not(:disabled):not(.disabled):active, .filter-dropdown:not(:disabled):not(.disabled).active, .show > .filter-dropdown.dropdown-toggle {\r\n    color: #3C3C3C;\r\n    background-color: #f5f5f5;\r\n    border-color: #f5f5f5;\r\n  }\r\n.show > .filter-dropdown.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n  }\r\n.dropdown-option-menu {\r\n    padding: 0px;\r\n      margin: 0px;\r\n      border:none;\r\n  }\r\n.dropdown-option {\r\n    background-color: #f5f5f5;\r\n      border-color: #f5f5f5;\r\n      border-radius: 16px;\r\n      height: 28px;\r\n      font-size: 13px;\r\n      padding-left: 14px;\r\n      width: 83%;\r\n  }\r\n.btn-bx-disabled {\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    border-radius: 23px;\r\n    color: #808080;\r\n    font-family: 'CiscoSans-Medium';\r\n    font-size: 11px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n  }\r\n.btn-bx {\r\n    background-color: #fff;\r\n    border: 2px solid #00BCEB;\r\n    border-radius: 23px;\r\n    color: #1D4572;\r\n    font-family: 'CiscoSans-Medium';\r\n    font-size: 11px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n  }\r\n.btn-bx:focus{\r\n    box-shadow: none;\r\n  }\r\n.btn-bx:hover, .btn-bx:focus  {\r\n    background-color: #0B93DB;\r\n    color: #fff;\r\n    border: 2px solid #0B93DB;\r\n  }\r\n.bx-btnspace {\r\n    margin-left: 6px;\r\n    margin-right: 6px;\r\n  }\r\n.btn-bx:not(:disabled):not(.disabled):active:focus {\r\n    box-shadow: none;\r\n  }\r\n.topd-table-container {\r\n    margin-top:8px\r\n  }\r\n.topd-table tr th {\r\n    font-weight: normal;\r\n  }\r\n.content {\r\n    display: block;\r\n      position: relative;\r\n      padding-left: 16px;\r\n      /* margin-bottom: 12px; */\r\n      cursor: pointer;\r\n      font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    padding-top:17px;\r\n  }\r\n.checkmark {\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 6px;\r\n      height: 18px;\r\n      width: 18px;\r\n      background-color: #fff;\r\n      border: 2px solid #E6E6E6;\r\n      border-radius: 5px;\r\n  }\r\n.checkmark:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n.checkmark input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n  }\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n.content input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n/* Style the checkmark/indicator */\r\n.content .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }\r\n.content input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n.topd-options {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('options_inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    position: relative;\r\n      top: 8px;\r\n  }\r\n.topd-options:focus, .topd-options:hover {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('Options_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.row-topd.selected td {\r\n    color: #1e4471;\r\n  }\r\n.addcart,.row-topd.selected td .addcart{\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('add-to-cart_inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    position: relative;\r\n      top: 8px;\r\n  }\r\n.addcart:hover, .row-topd.selected td .addcart:hover{\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('add-to-cart_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.download-row, .row-topd.selected td .download-row {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('download_Inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    position: relative;\r\n      top: 8px;\r\n  }\r\n.download-row:hover, .row-topd.selected td .download-row:hover {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('download_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.row-topd.selected td .download-row, .row-topd.selected td .addcart {\r\n    visibility: inherit;\r\n  }\r\n.addcart, .download-row {\r\n    visibility: hidden;\r\n  }\r\n/* table.topd-table tr:hover td .addcart, .table.topd-table tr:hover td .download-row, table.topd-table tr:focus td .addcart, .table.topd-table tr:focus td .download-row {\r\n    visibility: inherit;\r\n    } */\r\n.topd-table tr td {\r\n    padding: 0px;\r\n  }\r\n.topd-table tr {\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n  }\r\n.row-thumbnail {\r\n    width: 38px;\r\n    height: 38px;\r\n    background: url('folder-default.png') no-repeat left; \r\n    background-size: contain;\r\n  }\r\n.topd-table td {\r\n    vertical-align: middle;\r\n  }\r\n.topd-table {\r\n    border-collapse: separate;\r\n      border-spacing: 0 8px;\r\n  }\r\n.row-topd {\r\n    color: #808080;\r\n    font-size: 14px;\r\n    line-height: 51px;\r\n      min-height: 40px;\r\n      height: 40px;\r\n      box-shadow: 0 0 0 1px #E6E6E6;\r\n      border-radius: 10px;\r\n  }\r\n.fa.fa-chevron-down {\r\n    color:#808080\r\n  }\r\n.topd-options::after {\r\n    content: unset;\r\n  }\r\n.file-size, .name {\r\n    color: #808080;\r\n    font-size: 12px;\r\n  }\r\n.spacer {\r\n    min-height: 8px;\r\n  }\r\n.selected {\r\n    cursor: pointer;\r\n    background-color: #F5F5F5;\r\n    color: #3C3C3C;\r\n  }\r\n.optons-menu {\r\n    width: 160px;\r\n    height: auto;\r\n    border: 1px solid #808080;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 14px;\r\n    padding: 14px 18px;\r\n      line-height: initial;\r\n      left: -120px !important;\r\n  }\r\n.optons-menu .dropdown-item {\r\n    font-size: 12px;\r\n    padding: 8px 0px;\r\n    color: #808080;\r\n  }\r\n.optons-menu .dropdown-item:hover {\r\n    background-color: #fff;\r\n    color: #1D4572;\r\n  }\r\n.optons-menu .dropdown-item:focus {\r\n    outline: none;\r\n  }\r\n.previous-btn, .next-btn {\r\n    border-radius: 23px;\r\n      background-color: #fff;\r\n      color: #808080;\r\n      font-size: 12px;\r\n      padding: 6px 12px;\r\n      border: 1px solid #E6E6E6;  \r\n  }\r\n.previous-btn:hover, .next-btn:hover {\r\n    text-decoration: none;\r\n    color: #1D4572;\r\n  }\r\n.previous-btn:focus, .next-btn:focus {\r\n    outline: 0;\r\n  }\r\n.page-number {\r\n      font-family: 'CiscoSans-Bold';\r\n      font-size: 12px;\r\n      color: #3C3C3C;\r\n      border: none;\r\n      padding: 7px;\r\n      margin: 0px 18px;\r\n  }\r\n.row-checkbox {\r\n    width: 4%;\r\n  \r\n  }\r\n.row-thumbnail-main {\r\n    width: 5%;\r\n  }\r\n.row-title {\r\n    width: 60%;\r\n  }\r\n.row-download-count {\r\n    width: 11%;\r\n  }\r\n.row-file-size {\r\n    width: 8%;\r\n  }\r\n.topd-table tr th {\r\n    padding: 0px 0px 6px 0px;\r\n  }\r\n.fa.fa-plus, .fa.fa-minus {\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    color: #0B93DB;\r\n    position: relative;\r\n    left: 12px;\r\n}\r\n.pagination-topd {\r\n  margin-top: 16px;\r\n    margin-bottom: 60px;\r\n}\r\n.row-topd.row-topd-inner {\r\n  border-radius: 0px;\r\n  line-height: 37px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdHZpZXcvbGlzdHZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7QUFDQTtJQUNFLHFEQUEwRjtJQUMxRix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQywwQ0FBa0M7SUFBbEMsa0NBQWtDO0VBQ3BDO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxZQUFZO01BQ1Ysa0JBQWtCO01BQ2xCLFVBQVU7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwrREFBb0c7SUFDcEcsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSw0REFBaUc7SUFDakcsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLDZEQUFrRztJQUNsRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0RBQTZGO0lBQzdGLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxREFBMEY7SUFDMUYsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNEQUEyRjtJQUMzRixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7TUFDYix5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxZQUFZO01BQ1YsV0FBVztNQUNYLFdBQVc7RUFDZjtBQUNBO0lBQ0UseUJBQXlCO01BQ3ZCLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsVUFBVTtFQUNkO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFO0VBQ0Y7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUVGO0lBQ0ksY0FBYztNQUNaLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixlQUFlO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztNQUNQLFlBQVk7TUFDWixXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLHlCQUF5QjtNQUN6QixrQkFBa0I7RUFDdEI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUVBLGtDQUFrQztBQUNsQztJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUVoQyx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLHNEQUE2RjtJQUM3Rix3QkFBd0I7SUFDeEIsa0JBQWtCO01BQ2hCLFFBQVE7RUFDWjtBQUNBO0lBQ0UsV0FBVztNQUNULFlBQVk7SUFDZCxxQkFBcUI7SUFDckIsbURBQTBGO0lBQzFGLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsV0FBVztNQUNULFlBQVk7SUFDZCxxQkFBcUI7SUFDckIsMERBQWlHO0lBQ2pHLHdCQUF3QjtJQUN4QixrQkFBa0I7TUFDaEIsUUFBUTtFQUNaO0FBQ0E7SUFDRSxXQUFXO01BQ1QsWUFBWTtJQUNkLHFCQUFxQjtJQUNyQix1REFBOEY7SUFDOUYsd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO01BQ1QsWUFBWTtJQUNkLHFCQUFxQjtJQUNyQix1REFBOEY7SUFDOUYsd0JBQXdCO0lBQ3hCLGtCQUFrQjtNQUNoQixRQUFRO0VBQ1o7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLG9EQUEyRjtJQUMzRix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7O09BRUs7QUFFTDtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0RBQXdFO0lBQ3hFLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSx5QkFBeUI7TUFDdkIscUJBQXFCO0VBQ3pCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtNQUNmLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osNkJBQTZCO01BQzdCLG1CQUFtQjtFQUN2QjtBQUNBO0lBQ0U7RUFDRjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixrQkFBa0I7TUFDaEIsb0JBQW9CO01BQ3BCLHVCQUF1QjtFQUMzQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7SUFDRSxtQkFBbUI7TUFDakIsc0JBQXNCO01BQ3RCLGNBQWM7TUFDZCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHlCQUF5QjtFQUM3QjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNBO01BQ0ksNkJBQTZCO01BQzdCLGVBQWU7TUFDZixjQUFjO01BQ2QsWUFBWTtNQUNaLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDQTtJQUNFLFNBQVM7O0VBRVg7QUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXN0dmlldy9saXN0dmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGQtY29udGFpbmVyLmZvbGRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi50YWJsZS1oZWFkLXJvdyB7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxufVxyXG4udG9wZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLnRvcC1kIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUxpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9zZWFyY2hfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWFyY2gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNkU2RTY7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmhvbWUtc2VhcmNoOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwQjkzREI7XHJcbiAgfVxyXG4gIC5ob21lLXNlYXJjaDpmb2N1cyB7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMEI5M0RCO1xyXG4gIH1cclxuICAuaGFzLXNlYXJjaCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDUzJTtcclxuICB9XHJcbiAgLmdyaWR2aWV3LWJ0biB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL2dyaWRfZm9sZGVyX3ZpZXdfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmdyaWR2aWV3LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9ncmlkX2ZvbGRlcl92aWV3X2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5ncmlkdmlldy1idG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvZ3JpZF9mb2xkZXJfdmlld19hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5saXN0dmlldy1idG4ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9MaXN0LXZpZXdfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmxpc3R2aWV3LWJ0bjpob3ZlciB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL0xpc3Qtdmlld19ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAubGlzdHZpZXctYnRuOmZvY3VzIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvTGlzdC12aWV3X2FjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmZpbHRlci1ob21lIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgLmZpbHRlcmJ4IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIC5maWx0ZXItaG9tZSBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5maWx0ZXItZHJvcGRvd24sIC5maWx0ZXItZHJvcGRvd246Zm9jdXMsIC5maWx0ZXItZHJvcGRvd246YWN0aXZlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuZmlsdGVyLWRyb3Bkb3duOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmZpbHRlci1kcm9wZG93bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93ID4gLmZpbHRlci1kcm9wZG93bi5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICMzQzNDM0M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAuc2hvdyA+IC5maWx0ZXItZHJvcGRvd24uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1vcHRpb24tbWVudSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiA4MyU7XHJcbiAgfVxyXG4gIC5idG4tYngtZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1NZWRpdW0nO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIC5idG4tYngge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMEJDRUI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgY29sb3I6ICMxRDQ1NzI7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1NZWRpdW0nO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIC5idG4tYng6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuYnRuLWJ4OmhvdmVyLCAuYnRuLWJ4OmZvY3VzICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI5M0RCO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMEI5M0RCO1xyXG4gIH1cclxuICAuYngtYnRuc3BhY2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuICAuYnRuLWJ4Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAudG9wZC10YWJsZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDo4cHhcclxuICB9XHJcbiAgLnRvcGQtdGFibGUgdHIgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgLyogbWFyZ2luLWJvdHRvbTogMTJweDsgKi9cclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6MTdweDtcclxuICB9XHJcbiAgLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIGxlZnQ6IDZweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFNjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuY2hlY2ttYXJrOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIH1cclxuICAuY2hlY2ttYXJrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgfVxyXG4gIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jb250ZW50IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4gIC5jb250ZW50IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIC5jb250ZW50IGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgLnRvcGQtb3B0aW9ucyB7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9vcHRpb25zX2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICB9XHJcbiAgLnRvcGQtb3B0aW9uczpmb2N1cywgLnRvcGQtb3B0aW9uczpob3ZlciB7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9PcHRpb25zX2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAucm93LXRvcGQuc2VsZWN0ZWQgdGQge1xyXG4gICAgY29sb3I6ICMxZTQ0NzE7XHJcbiAgfVxyXG4gIC5hZGRjYXJ0LC5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuYWRkY2FydHtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvYnV0dG9ucy13aXRoLWljb25zL2FkZC10by1jYXJ0X2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICB9XHJcbiAgLmFkZGNhcnQ6aG92ZXIsIC5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuYWRkY2FydDpob3ZlcntcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvYnV0dG9ucy13aXRoLWljb25zL2FkZC10by1jYXJ0X2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAuZG93bmxvYWQtcm93LCAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmRvd25sb2FkLXJvdyB7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9kb3dubG9hZF9JbmFjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1yb3c6aG92ZXIsIC5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuZG93bmxvYWQtcm93OmhvdmVyIHtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvYnV0dG9ucy13aXRoLWljb25zL2Rvd25sb2FkX2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmRvd25sb2FkLXJvdywgLnJvdy10b3BkLnNlbGVjdGVkIHRkIC5hZGRjYXJ0IHtcclxuICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5hZGRjYXJ0LCAuZG93bmxvYWQtcm93IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLyogdGFibGUudG9wZC10YWJsZSB0cjpob3ZlciB0ZCAuYWRkY2FydCwgLnRhYmxlLnRvcGQtdGFibGUgdHI6aG92ZXIgdGQgLmRvd25sb2FkLXJvdywgdGFibGUudG9wZC10YWJsZSB0cjpmb2N1cyB0ZCAuYWRkY2FydCwgLnRhYmxlLnRvcGQtdGFibGUgdHI6Zm9jdXMgdGQgLmRvd25sb2FkLXJvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG4gICAgfSAqL1xyXG4gICAgXHJcbiAgLnRvcGQtdGFibGUgdHIgdGQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAudG9wZC10YWJsZSB0ciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5yb3ctdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2ZvbGRlci1kZWZhdWx0LnBuZycpIG5vLXJlcGVhdCBsZWZ0OyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLnRvcGQtdGFibGUgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLnRvcGQtdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDAgOHB4O1xyXG4gIH1cclxuICAucm93LXRvcGQge1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTFweDtcclxuICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0U2RTZFNjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmZhLmZhLWNoZXZyb24tZG93biB7XHJcbiAgICBjb2xvcjojODA4MDgwXHJcbiAgfVxyXG4gIC50b3BkLW9wdGlvbnM6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IHVuc2V0O1xyXG4gIH1cclxuICAuZmlsZS1zaXplLCAubmFtZSB7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnNwYWNlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgY29sb3I6ICMzQzNDM0M7XHJcbiAgfVxyXG4gIC5vcHRvbnMtbWVudSB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgIGxlZnQ6IC0xMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAub3B0b25zLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gIH1cclxuICAub3B0b25zLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMUQ0NTcyO1xyXG4gIH1cclxuICAub3B0b25zLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLnByZXZpb3VzLWJ0biwgLm5leHQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNkU2OyAgXHJcbiAgfVxyXG4gIC5wcmV2aW91cy1idG46aG92ZXIsIC5uZXh0LWJ0bjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzFENDU3MjtcclxuICB9XHJcbiAgLnByZXZpb3VzLWJ0bjpmb2N1cywgLm5leHQtYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIC5wYWdlLW51bWJlciB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUJvbGQnO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgbWFyZ2luOiAwcHggMThweDtcclxuICB9XHJcbiAgLnJvdy1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogNCU7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAucm93LXRodW1ibmFpbC1tYWluIHtcclxuICAgIHdpZHRoOiA1JTtcclxuICB9XHJcbiAgLnJvdy10aXRsZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAucm93LWRvd25sb2FkLWNvdW50IHtcclxuICAgIHdpZHRoOiAxMSU7XHJcbiAgfVxyXG4gIC5yb3ctZmlsZS1zaXplIHtcclxuICAgIHdpZHRoOiA4JTtcclxuICB9XHJcblxyXG4gIC50b3BkLXRhYmxlIHRyIHRoIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggNnB4IDBweDtcclxuICB9XHJcbiAgLmZhLmZhLXBsdXMsIC5mYS5mYS1taW51cyB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMwQjkzREI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG59XHJcbi5wYWdpbmF0aW9uLXRvcGQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4ucm93LXRvcGQucm93LXRvcGQtaW5uZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBsaW5lLWhlaWdodDogMzdweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/listview/listview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/listview/listview.component.ts ***!
  \******************************************************/
/*! exports provided: ListviewComponent, ToggleColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListviewComponent", function() { return ListviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleColumns", function() { return ToggleColumns; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_listview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/listview.service */ "./src/app/services/listview.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_searchparams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/searchparams */ "./src/app/models/searchparams.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_breadcrumbdata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/breadcrumbdata.service */ "./src/app/services/breadcrumbdata.service.ts");










var ListviewComponent = /** @class */ (function () {
    function ListviewComponent(_dataService, _sharedservice, router, listViewService, spinner, activatedRoute, _bcdata) {
        //     this.activatedRoute.queryParams.subscribe(params => {
        //       this.assetId = params['assetId'];
        //   this._dataService.setAssetId(this.assetId);
        this._dataService = _dataService;
        this._sharedservice = _sharedservice;
        this.router = router;
        this.listViewService = listViewService;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this._bcdata = _bcdata;
        this.searchParameters = new src_app_models_searchparams__WEBPACK_IMPORTED_MODULE_7__["Searchparams"]();
        this.leftNavPageLimit = "10";
        this.leftNavPageAfter = "0";
        this.toggleCols = new ToggleColumns();
        //       console.log(this.assetId);
        //     });
        // this.searchParameters = _dataService.getSearchOption();
        // this.fromLeftNavOrSearch = _dataService.getLeftNavOrSearch();
        // this.assetId = _dataService.getAssetId(); 
        $(document).ready(function () {
            // Add minus icon for collapse element which is open by default
            $(".collapse.show").each(function () {
                $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
            });
            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
            }).on('hide.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
            });
        });
    }
    ListviewComponent.prototype.ngOnInit = function () {
        this.togCols = [
            { name: 'Asset State', code: 'asset_state' },
            { name: 'Expired', code: 'expired' },
            { name: 'Imported By', code: 'import_user_name' },
            { name: 'Mime Type', code: 'mime_type' },
            { name: 'Subscribe', code: 'subscribed_to' }
        ];
        // this.listViewService.listFlagSort.subscribe(c => {
        //   this.searchPerformflg = c;
        // });
        //   if(this.fromLeftNavOrSearch=="search"){
        //   this.getSearchData();
        // }
        // else{
        //   this.getTotalPageCountLeftNav();
        // }
    };
    ListviewComponent.prototype.onRowSelect = function (event) {
        //this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin});
    };
    ListviewComponent.prototype.getTotalPageCountLeftNav = function () {
        var _this = this;
        this.spinner.show();
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            //this._dataService.setOption(data.folder_children.asset_list);
            //this.anyData = data.folder_children.asset_list;
            _this.searchParameters.totalhitcount = data.folder_resource.folder.container_child_counts.total_child_count;
            if (Number(_this.searchParameters.totalhitcount) > 0) {
                _this.listViewService.listviewsortbtn(true);
            }
            else {
                _this.listViewService.listviewsortbtn(false);
            }
            _this.getMainData();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    ListviewComponent.prototype.getMainData = function () {
        var _this = this;
        this.spinner.show();
        //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
        // var serviceUrl='/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after='+this.leftNavPageAfter+'&limit='+this.leftNavPageLimit+'&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        var serviceUrl = '/otmmapi/v5/folders/fba758190e7008bd4d73490c4ace221f36b2a1be/folders?load_type=system&limit=0';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            //this._dataService.setOption(data.folder_children.asset_list);
            //this.anyData = data.folder_children.asset_list;
            _this.constructMainTreeTable(data.folders_resource.folder_list);
            //this.searchParameters.totalhitcount='0';
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    ListviewComponent.prototype.constructMainTreeTable = function (treeData) {
        this.anyData = [];
        for (var i = 0; i < treeData.length; i++) {
            var node = void 0;
            if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: './cbx/images/thumbnail_icons/folder-50px.png',
                        //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
                        download_count: 10 //need actual value
                    },
                    leaf: false,
                    collapsedIcon: './cbx/images/thumbnail_icons/folder-50px.png',
                    expandedIcon: './cbx/images/thumbnail_icons/folder-50px.png'
                };
            }
            else if (treeData[i].data_type == 'CONTAINER' && treeData[i].rendition_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: treeData[i].rendition_content.thumbnail_content.url,
                        //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
                        download_count: 10 //need actual value
                    },
                    leaf: false
                };
            }
            else if (treeData[i].data_type == undefined && treeData[i].rendition_content.preview_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: treeData[i].rendition_content.thumbnail_content.url,
                        content_size: treeData[i].rendition_content.preview_content.content_size / 1024 / 1024,
                        download_count: 10 //need actual value
                    },
                    leaf: true
                };
            }
            else if (treeData[i].data_type == undefined && treeData[i].rendition_content.pdf_preview_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: treeData[i].rendition_content.thumbnail_content.url,
                        content_size: treeData[i].rendition_content.pdf_preview_content.content_size / 1024 / 1024,
                        download_count: 10 //need actual value
                    },
                    leaf: true
                };
            }
            this.anyData.push(node);
        }
        console.log('tree data ', this.anyData);
    };
    ListviewComponent.prototype.constructChildrenTreeTable = function (treeData, event) {
        this.childrenData = [];
        for (var i = 0; i < treeData.length; i++) {
            var node = void 0;
            if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: './cbx/images/thumbnail_icons/folder-50px.png',
                        //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
                        download_count: 10 //need actual value
                    },
                    leaf: false,
                    collapsedIcon: './cbx/images/thumbnail_icons/folder-50px.png',
                    expandedIcon: './cbx/images/thumbnail_icons/folder-50px.png'
                };
            }
            else if (treeData[i].data_type == 'CONTAINER' && treeData[i].rendition_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: treeData[i].rendition_content.thumbnail_content.url,
                        //content_size: treeData[i].rendition_content.preview_content.content_size/1024/1024 ,
                        download_count: 10 //need actual value
                    },
                    leaf: false
                };
            }
            else if (treeData[i].data_type == undefined && treeData[i].rendition_content.preview_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: treeData[i].rendition_content.thumbnail_content.url,
                        content_size: treeData[i].rendition_content.preview_content.content_size / 1024 / 1024,
                        download_count: 10 //need actual value
                    },
                    leaf: true
                };
            }
            else if (treeData[i].data_type == undefined && treeData[i].rendition_content.pdf_preview_content) {
                node = {
                    data: {
                        asset_id: treeData[i].asset_id,
                        name: treeData[i].name,
                        date_last_updated: treeData[i].date_last_updated,
                        url: treeData[i].rendition_content.thumbnail_content.url,
                        content_size: treeData[i].rendition_content.pdf_preview_content.content_size / 1024 / 1024,
                        download_count: 10 //need actual value
                    },
                    leaf: true
                };
            }
            this.childrenData.push(node);
        }
        console.log('tree children data ', this.childrenData);
    };
    ListviewComponent.prototype.assetNameClick = function (rowData) {
        var _this = this;
        this.spinner.show();
        this.assetId = rowData.asset_id;
        //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.leftNavPageAfter + '&limit=' + this.leftNavPageLimit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            _this.constructMainTreeTable(data.folder_children.asset_list);
            // this.listViewService.bcFun(rowData);
            // this._bcdata.bcfunction(rowData);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    ListviewComponent.prototype.loadNodes = function (event) {
        this.getMainData();
    };
    ListviewComponent.prototype.getChildrenData = function (event) {
        var _this = this;
        this.spinner.show();
        //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.leftNavPageAfter + '&limit=' + this.leftNavPageLimit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            //this._dataService.setOption(data.folder_children.asset_list);
            //this.anyData = data.folder_children.asset_list;
            _this.constructChildrenTreeTable(data.folder_children.asset_list, event);
            //this.searchParameters.totalhitcount='0';
            var node = event.node;
            node.children = _this.childrenData;
            _this.anyData = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.anyData);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    ListviewComponent.prototype.onNodeExpand = function (event) {
        this.assetId = event.node.data.asset_id;
        this.getChildrenData(event);
        //this.files = [...this.files];
    };
    ListviewComponent.prototype.assetsViewPages = function (param, id) {
        var _this = this;
        this._dataService.setAssetId(id);
        if (param == 'asset') {
            console.log(id);
            this.router.navigate(['layout/assetdetails'], { queryParams: { assetId: id } });
        }
        else {
            this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
            //setTimeout(() => this.router.navigate(['layout/listview']));
            setTimeout(function () { return _this.router.navigate(['layout/listview'], { queryParams: { assetId: id } }); });
        }
    };
    ListviewComponent.prototype.getSearchData = function () {
        var _this = this;
        this.spinner.show();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('keyword_query', '(' + this.searchParameters.searchKeyword + ')')
            .set('load_type', 'metadata')
            .set('load_multilingual_values', 'true')
            .set('level_of_detail', 'slim')
            .set('multilingual_language_code', 'en_US')
            .set('folder_filter_type', 'all')
            .set('folder_filter', 'ARTESIA.PUBLIC.TREEN')
            .set('search_config_id', '3')
            .set('keyword_scope_id', '3')
            .set('preference_id', 'ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS')
            .set('after', this.searchParameters.after)
            .set('limit', this.searchParameters.limit);
        var url = "/otmmapi/v5/search/text";
        this._sharedservice.postService(url, params).subscribe(function (result) {
            //console.log('AssetList', result);  
            _this.searchParameters.totalhitcount = result.search_result_resource.search_result.total_hit_count;
            _this.anyData = result.search_result_resource.asset_list;
            if (_this.anyData.length > 0)
                _this.listViewService.listviewsortbtn(true);
            else
                _this.listViewService.listviewsortbtn(false);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    ListviewComponent.prototype.paginate = function (param) {
        if (this.fromLeftNavOrSearch == "search") {
            this.searchParameters.after = param.first;
            this.getSearchData();
        }
        else {
            this.leftNavPageAfter = param.first;
            this.getTotalPageCountLeftNav();
        }
    };
    ListviewComponent.prototype.ColSelectUnselect = function (obj) {
        console.log(obj);
        if (obj.value.length == 0) {
            this.toggleCols = new ToggleColumns();
        }
        else if (obj.value.length == this.togCols.length) {
            this.toggleCols.asset_state_visible = true;
            this.toggleCols.expired_visible = true;
            this.toggleCols.import_user_name_visible = true;
            this.toggleCols.mime_type_visible = true;
            this.toggleCols.subscribed_to_visible = true;
        }
        if (obj.itemValue != undefined) {
            if (obj.itemValue.code == "asset_state")
                this.toggleCols.asset_state_visible = !this.toggleCols.asset_state_visible;
            else if (obj.itemValue.code == "expired")
                this.toggleCols.expired_visible = !this.toggleCols.expired_visible;
            else if (obj.itemValue.code == "import_user_name")
                this.toggleCols.import_user_name_visible = !this.toggleCols.import_user_name_visible;
            else if (obj.itemValue.code == "mime_type")
                this.toggleCols.mime_type_visible = !this.toggleCols.mime_type_visible;
            else if (obj.itemValue.code == "subscribed_to")
                this.toggleCols.subscribed_to_visible = !this.toggleCols.subscribed_to_visible;
        }
    };
    ListviewComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_listview_service__WEBPACK_IMPORTED_MODULE_5__["ListViewService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_breadcrumbdata_service__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbdataService"] }
    ]; };
    ListviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listview/listview.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listview.component.css */ "./src/app/pages/listview/listview.component.css")).default]
        })
    ], ListviewComponent);
    return ListviewComponent;
}());

var ToggleColumns = /** @class */ (function () {
    function ToggleColumns() {
        this.asset_state_visible = false;
        this.expired_visible = false;
        this.import_user_name_visible = false;
        this.mime_type_visible = false;
        this.subscribed_to_visible = false;
    }
    return ToggleColumns;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".emp-profile{\r\n    padding: 3%;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n    border-radius: 0.5rem;\r\n    background: #fff;\r\n    font-size: 12px;\r\n}\r\n.profile-img{\r\n    text-align: center;\r\n}\r\n.profile-img img{\r\n    width: 70%;\r\n    height: 100%;\r\n}\r\n.profile-img .file {\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin-top: -20%;\r\n    width: 70%;\r\n    border: none;\r\n    border-radius: 0;\r\n    font-size: 15px;\r\n    background: #212529b8;\r\n    font-size: 12px;\r\n}\r\n.profile-img .file input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n.profile-head h5{\r\n    color: #333;\r\n}\r\n.profile-head h6{\r\n    color: #0062cc;\r\n}\r\n.profile-edit-btn{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    width: 70%;\r\n    padding: 2%;\r\n    font-weight: 600;\r\n    color: #6c757d;\r\n    cursor: pointer;\r\n}\r\n.proile-rating{\r\n    font-size: 12px;\r\n    color: #818182;\r\n    margin-top: 5%;\r\n}\r\n.proile-rating span{\r\n    color: #495057;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n}\r\n.profile-head .nav-tabs{\r\n    margin-bottom:5%;\r\n}\r\n.profile-head .nav-tabs .nav-link{\r\n    font-weight:600;\r\n    border: none;\r\n}\r\n.profile-head .nav-tabs .nav-link.active{\r\n    border: none;\r\n    border-bottom:2px solid #0062cc;\r\n}\r\n.profile-work{\r\n    padding: 14%;\r\n    margin-top: -15%;\r\n}\r\n.profile-work p{\r\n    font-size: 12px;\r\n    color: #818182;\r\n    font-weight: 600;\r\n    margin-top: 10%;\r\n}\r\n.profile-work a{\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n}\r\n.profile-work ul{\r\n    list-style: none;\r\n}\r\n.profile-tab label{\r\n    font-weight: 600;\r\n}\r\n.profile-tab p{\r\n    font-weight: 600;\r\n    color: #0062cc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsTUFBTTtBQUNWO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcC1wcm9maWxle1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucHJvZmlsZS1pbWd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGUtaW1nIGltZ3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnByb2ZpbGUtaW1nIC5maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnByb2ZpbGUtaW1nIC5maWxlIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG4ucHJvZmlsZS1oZWFkIGg1e1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLnByb2ZpbGUtaGVhZCBoNntcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG59XHJcbi5wcm9maWxlLWVkaXQtYnRue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wcm9pbGUtcmF0aW5ne1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM4MTgxODI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ucHJvaWxlLXJhdGluZyBzcGFue1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9maWxlLWhlYWQgLm5hdi10YWJze1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1JTtcclxufVxyXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmt7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDYyY2M7XHJcbn1cclxuLnByb2ZpbGUtd29ya3tcclxuICAgIHBhZGRpbmc6IDE0JTtcclxuICAgIG1hcmdpbi10b3A6IC0xNSU7XHJcbn1cclxuLnByb2ZpbGUtd29yayBwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM4MTgxODI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5wcm9maWxlLXdvcmsgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJvZmlsZS13b3JrIHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ucHJvZmlsZS10YWIgbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9maWxlLXRhYiBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")).default]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/treelistview/treelistview.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/treelistview/treelistview.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Table\r\n{\r\ndisplay: table;\r\nwidth: 100%;\r\n}\r\n.Title\r\n{\r\ndisplay: table-caption;\r\ntext-align: center;\r\nfont-weight: bold;\r\nfont-size: larger;\r\n}\r\n.Heading\r\n{\r\n\r\nfont-weight: bold;\r\ntext-align: center;\r\n}\r\n.assetNameClick:hover {\r\n  cursor: pointer;\r\n}\r\n.trow\r\n{\r\n    border-width: thin;\r\n    text-align: left;\r\n    margin-bottom: 8px;\r\n    border-radius: 10px;\r\n    width: 100%;\r\n    border: 2px solid #E6E6E6;\r\n    font-size: 12px;\r\n    color: #808080;\r\n    padding: 2px 8px;\r\n}\r\n.title-Cell\r\n{\r\ndisplay: table-cell;\r\npadding-left: 5px;\r\npadding-right: 5px;\r\nwidth: 57%;\r\n}\r\n.Cell\r\n{\r\ndisplay: table-cell;\r\npadding-left: 5px;\r\npadding-right: 5px;\r\nwidth: 6%;\r\n}\r\n.hide-minus{\r\ndisplay: none !important;\r\n}\r\n.child-Row\r\n{\r\nbackground-color: #F5F5F5;\r\nborder-bottom: 2px solid #E6E6E6;\r\ntext-align: left;\r\nmargin-left: 22px;\r\n/* margin-bottom: 10px; \r\nborder-radius: 5px;\r\nwidth: 100%;*/\r\npadding: 4px 0px;\r\n}\r\n.fa.fa-minus, .fa.fa-plus {\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    color: #0B93DB;\r\n}\r\n.fa.fa-minus:hover, .fa.fa-plus:hover{\r\n    cursor: pointer;\r\n}\r\n.list-asset-size.list-asset-hover {\r\n   width: 34px;\r\n    height: 34px;\r\n    position: relative;\r\n    top: -4px;\r\n}\r\n.main1 { \r\n    position: relative;\r\n    padding-left: 24px;\r\n    margin-bottom: 0px;\r\n    cursor: pointer;\r\n    font-size: 9px;\r\n    top: -13px;\r\n  }\r\n/* Hide the default checkbox */\r\ninput[type=checkbox] { \r\n    visibility: hidden; \r\n  }\r\n/* Creating a custom checkbox \r\n  based on demand */\r\n.geekmark1 { \r\n    position: absolute;\r\n      top: 9px;\r\n      left: -4px;\r\n      height: 18px;\r\n      width: 18px;\r\n      background-color: #fff;\r\n      border: 2px solid #E6E6E6;\r\n      border-radius: 5px;\r\n  }\r\n/* Specify the background color to be \r\n  shown when checkbox is checked */\r\n.main1 input:checked ~ .geekmark1 { \r\n    background-color:#0B93DB; \r\n    border: 2px solid #0B93DB;\r\n  }\r\n/* Checkmark to be shown in checkbox */\r\n/* It is not be shown when not checked */\r\n.geekmark1:after { \r\n    content: \"\"; \r\n    position: absolute; \r\n    display: none; \r\n  }\r\n/* Display checkmark when checked */\r\n.main1 input:checked ~ .geekmark1:after { \r\n    display: block; \r\n  }\r\n/* Styling the checkmark using webkit */\r\n/* Rotated the rectangle by 45 degree and  \r\n  showing only two border to make it look \r\n  like a tickmark */\r\n.main1 .geekmark1:after { \r\n    left: 4px;\r\n      bottom: 3px;\r\n      width: 6px;\r\n      height: 12px;\r\n      border: solid white;\r\n      border-width: 0 2px 2px 0;\r\n      -webkit-transform: rotate(45deg);\r\n      transform: rotate(45deg);\r\n  }\r\n.topd-container1 {\r\n    margin-top: 0px;\r\n  }\r\n.top-d {\r\n    font-family: 'CiscoSans-Light';\r\n    font-size: 18px;\r\n  }\r\n.form-control-feedback {\r\n    background: url('search_inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    width: 18px;\r\n    height: 18px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 8px;\r\n    bottom: 4px;\r\n  }\r\n.home-search {\r\n    padding-left: 35px;\r\n    border-radius: 17px;\r\n    height: 28px;\r\n    font-size: 13px;\r\n    border: 1px solid #E6E6E6;\r\n    width: 96%;\r\n    -webkit-transition: width 0.4s ease-in-out;\r\n    -webkit-transition: width 0.3s ease-in-out;\r\n    transition: width 0.3s ease-in-out;\r\n  }\r\n.home-search:hover {\r\n    border: 1px solid #0B93DB;\r\n  }\r\n.home-search:focus {\r\n    \r\n    box-shadow: none;\r\n    border: 1px solid #0B93DB;\r\n  }\r\n.has-search {\r\n    float: right;\r\n      position: relative;\r\n      width: 53%;\r\n  }\r\n.gridview-btn {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('grid_folder_view_inactive.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n  }\r\n.gridview-btn:hover {\r\n    background: url('grid_folder_view_hover.png') no-repeat left;\r\n    width: 28px;\r\n    height: 28px;\r\n    background-size: contain;\r\n  }\r\n.gridview-btn:focus {\r\n    background: url('grid_folder_view_active.png') no-repeat left;\r\n    width: 28px;\r\n    height: 28px;\r\n    background-size: contain;\r\n    box-shadow: none;\r\n  }\r\n.listview-btn {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('List-view_inactive.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n  }\r\n.listview-btn:hover {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('List-view_hover.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n  }\r\n.listview-btn:focus {\r\n    width: 28px;\r\n    height: 28px;\r\n    background: url('List-view_active.png') no-repeat left;\r\n    background-color: none;\r\n    border-radius: none;\r\n    border: none;\r\n    background-size: contain;\r\n    box-shadow: none;\r\n  }\r\n.filter-home1 {\r\n    margin-top: 8px;\r\n    margin-bottom: 10px;\r\n  }\r\n.filterbx {\r\n    margin-left: 8px;\r\n  }\r\n.filter-home label {\r\n    font-size: 13px;\r\n  }\r\n.filter-dropdown, .filter-dropdown:focus, .filter-dropdown:active {\r\n    border-radius: 16px;\r\n    height: 28px;\r\n    width: 150px;\r\n    font-size: 12px;\r\n      background-color: #f5f5f5;\r\n      border: 1px solid #f5f5f5;\r\n      color: #3C3C3C;\r\n      text-align: left;\r\n      box-shadow: none;\r\n  }\r\n.filter-dropdown:not(:disabled):not(.disabled):active, .filter-dropdown:not(:disabled):not(.disabled).active, .show > .filter-dropdown.dropdown-toggle {\r\n    color: #3C3C3C;\r\n    background-color: #f5f5f5;\r\n    border-color: #f5f5f5;\r\n  }\r\n.show > .filter-dropdown.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n  }\r\n.dropdown-option-menu {\r\n    padding: 0px;\r\n      margin: 0px;\r\n      border:none;\r\n  }\r\n.dropdown-option {\r\n    background-color: #f5f5f5;\r\n      border-color: #f5f5f5;\r\n      border-radius: 16px;\r\n      height: 28px;\r\n      font-size: 13px;\r\n      padding-left: 14px;\r\n      width: 83%;\r\n  }\r\n.btn-bx:disabled,.btn-bx:disabled:hover {\r\n    background-color: #fff;\r\n    border: 2px solid #e6e6e6;\r\n    border-radius: 23px;\r\n    color: #808080;\r\n    font-family: 'CiscoSans-Medium';\r\n    font-size: 11px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n  }\r\n.btn-bx:disabled:hover {\r\n    cursor: no-drop;\r\n  }\r\n.btn-bx {\r\n    background-color: #fff;\r\n    border: 2px solid #00BCEB;\r\n    border-radius: 23px;\r\n    color: #1D4572;\r\n    font-family: 'CiscoSans-Medium';\r\n    font-size: 11px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n  }\r\n.btn-bx:focus{\r\n    box-shadow: none;\r\n  }\r\n.btn-bx:hover, .btn-bx:focus  {\r\n    background-color: #0B93DB;\r\n    color: #fff;\r\n    border: 2px solid #0B93DB;\r\n  }\r\n.bx-btnspace {\r\n    margin-left: 6px;\r\n    margin-right: 6px;\r\n  }\r\n.btn-bx:not(:disabled):not(.disabled):active:focus {\r\n    box-shadow: none;\r\n  }\r\n.topd-table-container {\r\n    margin-top:8px\r\n  }\r\n.topd-table tr th {\r\n    font-weight: normal;\r\n  }\r\n.table-head-row {\r\n    color: #808080;\r\n  }\r\n.topd-options {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('options_inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    position: relative;\r\n      top: 8px;\r\n  }\r\n.topd-options:focus, .topd-options:hover {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('Options_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.row-topd.selected td {\r\n    color: #1e4471;\r\n  }\r\n.addcart,.row-topd.selected td .addcart{\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('add-to-cart_inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    position: relative;\r\n      top: 8px;\r\n  }\r\n.addcart:hover, .row-topd.selected td .addcart:hover{\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('add-to-cart_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.download-row, .row-topd.selected td .download-row {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('download_Inactive.png') no-repeat left;\r\n    background-size: contain;\r\n    position: relative;\r\n      top: 8px;\r\n  }\r\n.download-row:hover, .row-topd.selected td .download-row:hover {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('download_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.row-topd.selected td .download-row, .row-topd.selected td .addcart {\r\n    visibility: inherit;\r\n  }\r\n.addcart, .download-row {\r\n    visibility: hidden;\r\n  }\r\n.pagination-topd {\r\n    margin-top: 16px;\r\n      margin-bottom: 60px;\r\n  }\r\n.previous-btn, .next-btn {\r\n    border-radius: 23px;\r\n      background-color: #fff;\r\n      color: #808080;\r\n      font-size: 12px;\r\n      padding: 6px 12px;\r\n      border: 1px solid #E6E6E6;  \r\n  }\r\n.previous-btn:hover, .next-btn:hover {\r\n    text-decoration: none;\r\n    color: #1D4572;\r\n  }\r\n.previous-btn:focus, .next-btn:focus {\r\n    outline: 0;\r\n  }\r\n.page-number {\r\n      font-family: 'CiscoSans-Bold';\r\n      font-size: 12px;\r\n      color: #3C3C3C;\r\n      border: none;\r\n      padding: 7px;\r\n      margin: 0px 18px;\r\n  }\r\n.icons-files-cart, .icons-files-download, .icons-files-options {\r\n      display: table-cell;\r\n      width: 4%;\r\n  }\r\n.topd-options1 {\r\n    width: 27px;\r\n    height: 27px;\r\n  display: inline-block;\r\n  background: url('options_inactive.png') no-repeat left;\r\n  background-size: contain;\r\n  position: relative;\r\n    top: 6px;\r\n  }\r\n.topd-options1::after {\r\n      content: none;\r\n  }\r\n.topd-options1:focus, .topd-options1:hover {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('Options_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.addcart:hover, .row-topd.selected td .addcart:hover{\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('add-to-cart_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.download-row:hover, .row-topd.selected td .download-row:hover {\r\n    width: 27px;\r\n      height: 27px;\r\n    display: inline-block;\r\n    background: url('download_hover.png') no-repeat left;\r\n    background-size: contain;\r\n  }\r\n.expand_row {\r\n    width: 4%;\r\n    display: inline-block;\r\n    margin-left: 6px;\r\n  }\r\n.folder-file-icon {\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n  }\r\n.optons-menu-files {\r\n    width: 160px;\r\n    height: auto;\r\n    border: 1px solid #808080;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 14px;\r\n    padding: 14px 18px;\r\n    line-height: initial;\r\n    left: -120px !important;\r\n  }\r\n.optons-menu-files .dropdown-item {\r\n    font-size: 12px;\r\n    padding: 8px 0px;\r\n    color: #808080;\r\n  }\r\n.optons-menu-files .dropdown-item:hover {\r\n    background-color: #fff;\r\n    color: #1D4572;\r\n  }\r\n.loadMoreDiv{\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJlZWxpc3R2aWV3L3RyZWVsaXN0dmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLGNBQWM7QUFDZCxXQUFXO0FBQ1g7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTs7O0FBR0EsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7O2FBRWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0dBQ0csV0FBVztJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7RUFDWjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO21CQUNpQjtBQUNqQjtJQUNFLGtCQUFrQjtNQUNoQixRQUFRO01BQ1IsVUFBVTtNQUNWLFlBQVk7TUFDWixXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLHlCQUF5QjtNQUN6QixrQkFBa0I7RUFDdEI7QUFFQTtrQ0FDZ0M7QUFDaEM7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCO0FBRUEsc0NBQXNDO0FBQ3RDLHdDQUF3QztBQUN4QztJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmO0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0UsY0FBYztFQUNoQjtBQUVBLHVDQUF1QztBQUN2Qzs7bUJBRWlCO0FBQ2pCO0lBQ0UsU0FBUztNQUNQLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsZ0NBQWdDO01BQ2hDLHdCQUF3QjtFQUM1QjtBQUlBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7QUFDQTtJQUNFLHFEQUEwRjtJQUMxRix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQywwQ0FBa0M7SUFBbEMsa0NBQWtDO0VBQ3BDO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxZQUFZO01BQ1Ysa0JBQWtCO01BQ2xCLFVBQVU7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwrREFBb0c7SUFDcEcsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSw0REFBaUc7SUFDakcsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLDZEQUFrRztJQUNsRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0RBQTZGO0lBQzdGLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxREFBMEY7SUFDMUYsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNEQUEyRjtJQUMzRixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7TUFDYix5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxZQUFZO01BQ1YsV0FBVztNQUNYLFdBQVc7RUFDZjtBQUNBO0lBQ0UseUJBQXlCO01BQ3ZCLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsVUFBVTtFQUNkO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFO0VBQ0Y7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsV0FBVztNQUNULFlBQVk7SUFDZCxxQkFBcUI7SUFDckIsc0RBQTZGO0lBQzdGLHdCQUF3QjtJQUN4QixrQkFBa0I7TUFDaEIsUUFBUTtFQUNaO0FBQ0E7SUFDRSxXQUFXO01BQ1QsWUFBWTtJQUNkLHFCQUFxQjtJQUNyQixtREFBMEY7SUFDMUYsd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxXQUFXO01BQ1QsWUFBWTtJQUNkLHFCQUFxQjtJQUNyQiwwREFBaUc7SUFDakcsd0JBQXdCO0lBQ3hCLGtCQUFrQjtNQUNoQixRQUFRO0VBQ1o7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLHVEQUE4RjtJQUM5Rix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLHVEQUE4RjtJQUM5Rix3QkFBd0I7SUFDeEIsa0JBQWtCO01BQ2hCLFFBQVE7RUFDWjtBQUNBO0lBQ0UsV0FBVztNQUNULFlBQVk7SUFDZCxxQkFBcUI7SUFDckIsb0RBQTJGO0lBQzNGLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtNQUNkLG1CQUFtQjtFQUN2QjtBQUNBO0lBQ0UsbUJBQW1CO01BQ2pCLHNCQUFzQjtNQUN0QixjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix5QkFBeUI7RUFDN0I7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDQTtNQUNJLDZCQUE2QjtNQUM3QixlQUFlO01BQ2YsY0FBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCO0FBQ0E7TUFDSSxtQkFBbUI7TUFDbkIsU0FBUztFQUNiO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkLHFCQUFxQjtFQUNyQixzREFBNkY7RUFDN0Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtJQUNoQixRQUFRO0VBQ1Y7QUFDQTtNQUNJLGFBQWE7RUFDakI7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLG1EQUEwRjtJQUMxRix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLHVEQUE4RjtJQUM5Rix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFdBQVc7TUFDVCxZQUFZO0lBQ2QscUJBQXFCO0lBQ3JCLG9EQUEyRjtJQUMzRix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmVlbGlzdHZpZXcvdHJlZWxpc3R2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGFibGVcclxue1xyXG5kaXNwbGF5OiB0YWJsZTtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuLlRpdGxlXHJcbntcclxuZGlzcGxheTogdGFibGUtY2FwdGlvbjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuLkhlYWRpbmdcclxue1xyXG5cclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXNzZXROYW1lQ2xpY2s6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJvd1xyXG57XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFNjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxufVxyXG4udGl0bGUtQ2VsbFxyXG57XHJcbmRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbnBhZGRpbmctbGVmdDogNXB4O1xyXG5wYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbndpZHRoOiA1NyU7XHJcbn1cclxuLkNlbGxcclxue1xyXG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5wYWRkaW5nLWxlZnQ6IDVweDtcclxucGFkZGluZy1yaWdodDogNXB4O1xyXG53aWR0aDogNiU7XHJcbn1cclxuLmhpZGUtbWludXN7XHJcbmRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uY2hpbGQtUm93XHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFNkU2RTY7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbm1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4vKiBtYXJnaW4tYm90dG9tOiAxMHB4OyBcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG53aWR0aDogMTAwJTsqL1xyXG5wYWRkaW5nOiA0cHggMHB4O1xyXG59XHJcbi5mYS5mYS1taW51cywgLmZhLmZhLXBsdXMge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMEI5M0RCO1xyXG59XHJcbi5mYS5mYS1taW51czpob3ZlciwgLmZhLmZhLXBsdXM6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpc3QtYXNzZXQtc2l6ZS5saXN0LWFzc2V0LWhvdmVyIHtcclxuICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC00cHg7XHJcbn1cclxuLm1haW4xIHsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHRvcDogLTEzcHg7XHJcbiAgfSBcclxuICBcclxuICAvKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovIFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdIHsgXHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IFxyXG4gIH0gXHJcbiAgXHJcbiAgLyogQ3JlYXRpbmcgYSBjdXN0b20gY2hlY2tib3ggXHJcbiAgYmFzZWQgb24gZGVtYW5kICovIFxyXG4gIC5nZWVrbWFyazEgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA5cHg7XHJcbiAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9IFxyXG4gIFxyXG4gIC8qIFNwZWNpZnkgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmUgXHJcbiAgc2hvd24gd2hlbiBjaGVja2JveCBpcyBjaGVja2VkICovIFxyXG4gIC5tYWluMSBpbnB1dDpjaGVja2VkIH4gLmdlZWttYXJrMSB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEI5M0RCOyBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwQjkzREI7XHJcbiAgfSBcclxuICBcclxuICAvKiBDaGVja21hcmsgdG8gYmUgc2hvd24gaW4gY2hlY2tib3ggKi8gXHJcbiAgLyogSXQgaXMgbm90IGJlIHNob3duIHdoZW4gbm90IGNoZWNrZWQgKi8gXHJcbiAgLmdlZWttYXJrMTphZnRlciB7IFxyXG4gICAgY29udGVudDogXCJcIjsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbiAgfSBcclxuICBcclxuICAvKiBEaXNwbGF5IGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi8gXHJcbiAgLm1haW4xIGlucHV0OmNoZWNrZWQgfiAuZ2Vla21hcmsxOmFmdGVyIHsgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgfSBcclxuICBcclxuICAvKiBTdHlsaW5nIHRoZSBjaGVja21hcmsgdXNpbmcgd2Via2l0ICovIFxyXG4gIC8qIFJvdGF0ZWQgdGhlIHJlY3RhbmdsZSBieSA0NSBkZWdyZWUgYW5kICBcclxuICBzaG93aW5nIG9ubHkgdHdvIGJvcmRlciB0byBtYWtlIGl0IGxvb2sgXHJcbiAgbGlrZSBhIHRpY2ttYXJrICovIFxyXG4gIC5tYWluMSAuZ2Vla21hcmsxOmFmdGVyIHsgXHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfSBcclxuXHJcblxyXG5cclxuICAudG9wZC1jb250YWluZXIxIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLnRvcC1kIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUxpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9zZWFyY2hfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWFyY2gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNkU2RTY7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmhvbWUtc2VhcmNoOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwQjkzREI7XHJcbiAgfVxyXG4gIC5ob21lLXNlYXJjaDpmb2N1cyB7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMEI5M0RCO1xyXG4gIH1cclxuICAuaGFzLXNlYXJjaCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDUzJTtcclxuICB9XHJcbiAgLmdyaWR2aWV3LWJ0biB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL2dyaWRfZm9sZGVyX3ZpZXdfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmdyaWR2aWV3LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9ncmlkX2ZvbGRlcl92aWV3X2hvdmVyLnBuZycpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5ncmlkdmlldy1idG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvZ3JpZF9mb2xkZXJfdmlld19hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5saXN0dmlldy1idG4ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9MaXN0LXZpZXdfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmxpc3R2aWV3LWJ0bjpob3ZlciB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL0xpc3Qtdmlld19ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAubGlzdHZpZXctYnRuOmZvY3VzIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvTGlzdC12aWV3X2FjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmZpbHRlci1ob21lMSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuZmlsdGVyYngge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLmZpbHRlci1ob21lIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmZpbHRlci1kcm9wZG93biwgLmZpbHRlci1kcm9wZG93bjpmb2N1cywgLmZpbHRlci1kcm9wZG93bjphY3RpdmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgICAgY29sb3I6ICMzQzNDM0M7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5maWx0ZXItZHJvcGRvd246bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuZmlsdGVyLWRyb3Bkb3duOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuZmlsdGVyLWRyb3Bkb3duLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogIzNDM0MzQztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gIC5zaG93ID4gLmZpbHRlci1kcm9wZG93bi5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW9wdGlvbi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gIH1cclxuICAuZHJvcGRvd24tb3B0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgICAgd2lkdGg6IDgzJTtcclxuICB9XHJcbiAgLmJ0bi1ieDpkaXNhYmxlZCwuYnRuLWJ4OmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaXNjb1NhbnMtTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAuYnRuLWJ4OmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICB9XHJcbiAgLmJ0bi1ieCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwQkNFQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICBjb2xvcjogIzFENDU3MjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLU1lZGl1bSc7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICB9XHJcbiAgLmJ0bi1ieDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5idG4tYng6aG92ZXIsIC5idG4tYng6Zm9jdXMgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjkzREI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwQjkzREI7XHJcbiAgfVxyXG4gIC5ieC1idG5zcGFjZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIC5idG4tYng6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3BkLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOjhweFxyXG4gIH1cclxuICAudG9wZC10YWJsZSB0ciB0aCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICAudGFibGUtaGVhZC1yb3cge1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BkLW9wdGlvbnMge1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgIGhlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9idXR0b25zLXdpdGgtaWNvbnMvb3B0aW9uc19pbmFjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC50b3BkLW9wdGlvbnM6Zm9jdXMsIC50b3BkLW9wdGlvbnM6aG92ZXIge1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgIGhlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9idXR0b25zLXdpdGgtaWNvbnMvT3B0aW9uc19ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLnJvdy10b3BkLnNlbGVjdGVkIHRkIHtcclxuICAgIGNvbG9yOiAjMWU0NDcxO1xyXG4gIH1cclxuICAuYWRkY2FydCwucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmFkZGNhcnR7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9hZGQtdG8tY2FydF9pbmFjdGl2ZS5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5hZGRjYXJ0OmhvdmVyLCAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmFkZGNhcnQ6aG92ZXJ7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9hZGQtdG8tY2FydF9ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmRvd25sb2FkLXJvdywgLnJvdy10b3BkLnNlbGVjdGVkIHRkIC5kb3dubG9hZC1yb3cge1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgIGhlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9idXR0b25zLXdpdGgtaWNvbnMvZG93bmxvYWRfSW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gIH1cclxuICAuZG93bmxvYWQtcm93OmhvdmVyLCAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmRvd25sb2FkLXJvdzpob3ZlciB7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9kb3dubG9hZF9ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLnJvdy10b3BkLnNlbGVjdGVkIHRkIC5kb3dubG9hZC1yb3csIC5yb3ctdG9wZC5zZWxlY3RlZCB0ZCAuYWRkY2FydCB7XHJcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG4gIH1cclxuICAuYWRkY2FydCwgLmRvd25sb2FkLXJvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uLXRvcGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcbiAgLnByZXZpb3VzLWJ0biwgLm5leHQtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNkU2OyAgXHJcbiAgfVxyXG4gIC5wcmV2aW91cy1idG46aG92ZXIsIC5uZXh0LWJ0bjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzFENDU3MjtcclxuICB9XHJcbiAgLnByZXZpb3VzLWJ0bjpmb2N1cywgLm5leHQtYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIC5wYWdlLW51bWJlciB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUJvbGQnO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgbWFyZ2luOiAwcHggMThweDtcclxuICB9XHJcbiAgLmljb25zLWZpbGVzLWNhcnQsIC5pY29ucy1maWxlcy1kb3dubG9hZCwgLmljb25zLWZpbGVzLW9wdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICB3aWR0aDogNCU7XHJcbiAgfVxyXG4gIC50b3BkLW9wdGlvbnMxIHtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvYnV0dG9ucy13aXRoLWljb25zL29wdGlvbnNfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gIH0gXHJcbiAgLnRvcGQtb3B0aW9uczE6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbiAgLnRvcGQtb3B0aW9uczE6Zm9jdXMsIC50b3BkLW9wdGlvbnMxOmhvdmVyIHtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvYnV0dG9ucy13aXRoLWljb25zL09wdGlvbnNfaG92ZXIucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5hZGRjYXJ0OmhvdmVyLCAucm93LXRvcGQuc2VsZWN0ZWQgdGQgLmFkZGNhcnQ6aG92ZXJ7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2J1dHRvbnMtd2l0aC1pY29ucy9hZGQtdG8tY2FydF9ob3Zlci5wbmcnKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmRvd25sb2FkLXJvdzpob3ZlciwgLnJvdy10b3BkLnNlbGVjdGVkIHRkIC5kb3dubG9hZC1yb3c6aG92ZXIge1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgIGhlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9idXR0b25zLXdpdGgtaWNvbnMvZG93bmxvYWRfaG92ZXIucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5leHBhbmRfcm93IHtcclxuICAgIHdpZHRoOiA0JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG4gIC5mb2xkZXItZmlsZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuICAub3B0b25zLW1lbnUtZmlsZXMge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgIGxlZnQ6IC0xMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAub3B0b25zLW1lbnUtZmlsZXMgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gIH1cclxuICAub3B0b25zLW1lbnUtZmlsZXMgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMUQ0NTcyO1xyXG4gIH1cclxuICAubG9hZE1vcmVEaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/treelistview/treelistview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/treelistview/treelistview.component.ts ***!
  \**************************************************************/
/*! exports provided: TreelistviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreelistviewComponent", function() { return TreelistviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_listview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/listview.service */ "./src/app/services/listview.service.ts");
/* harmony import */ var src_app_models_searchparams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/searchparams */ "./src/app/models/searchparams.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_breadcrumbdata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/breadcrumbdata.service */ "./src/app/services/breadcrumbdata.service.ts");










var TreelistviewComponent = /** @class */ (function () {
    function TreelistviewComponent(_dataService, _sharedservice, router, listViewService, spinner, activatedRoute, _bcdata) {
        this._dataService = _dataService;
        this._sharedservice = _sharedservice;
        this.router = router;
        this.listViewService = listViewService;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this._bcdata = _bcdata;
        this.assetId = "fba758190e7008bd4d73490c4ace221f36b2a1be";
        this.assetIdPaging = "fba758190e7008bd4d73490c4ace221f36b2a1be";
        this.leftNavPageLimit = "10";
        this.leftNavPageAfter = "0";
        this.tableRow = "";
        this.assetName = "";
        this.searchParameters = new src_app_models_searchparams__WEBPACK_IMPORTED_MODULE_6__["Searchparams"]();
    }
    TreelistviewComponent.prototype.ngOnInit = function () {
        //this.getMainData();
        this.getTotalPageCount();
    };
    TreelistviewComponent.prototype.listViewRowData = function (listviewname) {
        this.listViewService.trListViewRP(listviewname);
    };
    TreelistviewComponent.prototype.getTotalPageCount = function () {
        var _this = this;
        this.spinner.show();
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            //this._dataService.setOption(data.folder_children.asset_list);
            //this.anyData = data.folder_children.asset_list;
            _this.searchParameters.totalhitcount = data.folder_resource.folder.container_child_counts.total_child_count;
            _this.getMainData();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TreelistviewComponent.prototype.getMainData = function () {
        var _this = this;
        this.spinner.show();
        var serviceUrl = "";
        if (this.assetId == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/folders?load_type=system&limit=0';
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        else {
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            // if (this.assetId == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //     this.constructMainTreeTable(data.folders_resource.folder_list);
            // }
            // else {
            _this.constructMainTreeTable(data.folder_children.asset_list);
            //this._bcdata.bcfunction(rowData);
            //}
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TreelistviewComponent.prototype.getMainDataPaging = function () {
        var _this = this;
        this.spinner.show();
        var serviceUrl = "";
        if (this.assetIdPaging == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/folders?load_type=system&limit=0';
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetIdPaging + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        else {
            var serviceUrl = '/otmmapi/v5/folders/' + this.assetIdPaging + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.searchParameters.after + '&limit=' + this.searchParameters.limit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        }
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            // if (this.assetId == "fba758190e7008bd4d73490c4ace221f36b2a1be") {
            //     this.constructMainTreeTable(data.folders_resource.folder_list);
            // }
            // else {
            _this.constructMainTreeTable(data.folder_children.asset_list);
            //this._bcdata.bcfunction(rowData);
            //}
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TreelistviewComponent.prototype.constructMainTreeTable = function (treeData) {
        try {
            this.anyData = [];
            this.tableRow = "";
            treeData = treeData.filter(function (x) { return x.name != "NOT SPECIFIED"; });
            for (var i = 0; i < treeData.length; i++) {
                var lastModifiedDate = this.getFormattedDate(new Date(treeData[i].date_last_updated));
                if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="./cbx/images/folder-default.png"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                else if (treeData[i].data_type == 'CONTAINER' && treeData[i].rendition_content) {
                    //{{treeData[i].rendition_content.thumbnail_content.url}}
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.preview_content) {
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +
                        // '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        // '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        (treeData[i].rendition_content.preview_content.content_size / 1024 / 1024).toFixed(2) + 'mb' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.pdf_preview_content) {
                    this.tableRow += '<div id="' + treeData[i].asset_id + '" class="trow ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.pdf_preview_content.url + '"   class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        //'2.4mb' +
                        (treeData[i].rendition_content.pdf_preview_content.content_size / 1024 / 1024).toFixed(2) + 'mb' +
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //this.anyData.push(node);
            }
            //console.log('tree data ', this.anyData);
            //console.log(this.tableRow);
            if (this.tableRow == "") {
                this.tableRow = "Assets not available";
                this.searchParameters.totalhitcount = 0;
            }
        }
        catch (Error) {
            console.log('catch error in constructMainTreeTable: ', Error.message);
        }
    };
    TreelistviewComponent.prototype.rowClicked = function (elem) {
        if (elem.target.className.indexOf('fa fa-plus') == 0) {
            this.assetId = elem.target.className.split(' ')[2];
            var plusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.');
            var minusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.').replace('fa-plus', 'fa-minus').replace('hide-plus', 'hide-minus');
            $('.trow.' + this.assetId).css('background-color', '#F5F5F5');
            var spanLabel = $('.assetNameClick.' + this.assetId);
            $(spanLabel).attr("id", "bc");
            this.expandRow(plusCls, minusCls);
            // $(plusCls).hide();
            // $(minusCls).removeClass('hide-minus');
        }
        else if (elem.target.className.indexOf('fa fa-minus') == 0) {
            this.assetIdCollapsed = elem.target.className.split(' ')[2];
            var minusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.');
            var plusCls = '.' + elem.target.className.replace(' ', '.').replace(' ', '.').replace(' ', '.').replace('fa-minus', 'fa-plus').replace('hide-minus', 'hide-plus');
            $('.trow.' + this.assetId).css('background-color', '');
            var spanLabel = $('.assetNameClick.' + this.assetId);
            $(spanLabel).removeAttr("id", "bc");
            this.collapseRow(plusCls, minusCls);
            // $(minusCls).addClass('hide-minus');
            // $(plusCls).show();
        }
        else if (elem.target.className.indexOf('assetNameClick') >= 0) {
            this.assetIdPaging = this.assetId = elem.target.className.split(' ')[1];
            var assetNameCls = elem.target.className.replace(' ', '.').replace(' ', '.');
            var assetName = $('.' + assetNameCls)[0].innerText;
            var parents = $('.' + assetNameCls).parents().find('#bc');
            for (var i = 0; i <= parents.length; i++) {
                //if(parents[i].className.indexOf('assetNameClick') >= 0)
                //console.log(parents[i].children[2])
                //console.log(parents[i][0])
            }
            this.getMainData();
        }
        else if (elem.target.className.indexOf('loadMore') >= 0) {
            this.assetIdPaging = this.assetId = elem.target.className.split(' ')[1];
            this.getMainData();
        }
    };
    TreelistviewComponent.prototype.getChildTotalPageCount = function (plusCls, minusCls) {
        var _this = this;
        this.spinner.show();
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '?load_type=custom&data_load_request=%7B%22data_load_request%22%3A%7B%22child_count_load_type%22%3A%22both%22%2C%22load_path%22%3Atrue%7D%7D';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            //this._dataService.setOption(data.folder_children.asset_list);
            //this.anyData = data.folder_children.asset_list;
            _this.searchParameters.totalhitcountChild = data.folder_resource.folder.container_child_counts.total_child_count;
            _this.getChildTreeDta(plusCls, minusCls);
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TreelistviewComponent.prototype.getChildTreeDta = function (plusCls, minusCls) {
        var _this = this;
        var serviceUrl = '/otmmapi/v5/folders/' + this.assetId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=' + this.leftNavPageAfter + '&limit=' + this.leftNavPageLimit + '&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME';
        this._sharedservice.getService(serviceUrl).subscribe(function (data) {
            _this.constructChildTreeTable(data.folder_children.asset_list);
            if ($('.trow.' + _this.assetId).length > 0) {
                $('.trow.' + _this.assetId).append(_this.tableRowChild);
            }
            if ($('.child-Row.' + _this.assetId).length > 0) {
                $('.child-Row.' + _this.assetId).append(_this.tableRowChild);
            }
            $(plusCls).hide();
            $(minusCls).removeClass('hide-minus');
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TreelistviewComponent.prototype.expandRow = function (plusCls, minusCls) {
        this.spinner.show();
        this.getChildTotalPageCount(plusCls, minusCls);
        //'/otmmapi/v5/folders/' + this.folderId + '/children/?load_type=metadata&load_multilingual_values=true&level_of_detail=slim&after=0&limit=25&preference_id=ARTESIA.PREFERENCE.GALLERYVIEW.DISPLAYED_FIELDS&sort=asc_NAME'
    };
    TreelistviewComponent.prototype.collapseRow = function (plusCls, minusCls) {
        this.spinner.show();
        $('#collapse' + this.assetIdCollapsed)[0].remove();
        $(minusCls).addClass('hide-minus');
        $(plusCls).show();
        this.spinner.hide();
    };
    TreelistviewComponent.prototype.constructChildTreeTable = function (treeData) {
        try {
            this.anyData = [];
            this.tableRowChild = '<div id="collapse' + this.assetId + '">';
            treeData = treeData.filter(function (x) { return x.name != "NOT SPECIFIED"; });
            for (var i = 0; i < treeData.length; i++) {
                console.log('error: ', i);
                var lastModifiedDate = this.getFormattedDate(new Date(treeData[i].date_last_updated));
                //static folder image from application folder
                if (treeData[i].data_type == 'CONTAINER' && !treeData[i].rendition_content) {
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="./cbx/images/thumbnail_icons/folder-50px.png"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //dynamic folder image from database/service
                else if (treeData[i].data_type == 'CONTAINER' && treeData[i].rendition_content) {
                    //{{treeData[i].rendition_content.thumbnail_content.url}}
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span class="assetNameClick ' + treeData[i].asset_id + '"> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        '-' +
                        //treeData[i].rendition_content.preview_content.content_size/1024/1024+'mb'+
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //dynamic asset image from database/service
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.preview_content) {
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +
                        // '<i class="fa fa-plus ' + treeData[i].asset_id + ' hide-plus" aria-hidden="true"></i>' +
                        // '<i class="fa fa-minus ' + treeData[i].asset_id + ' hide-minus" aria-hidden="true"></i>' +
                        '</span>' +
                        '<span class="folder-file-icon"> ' +
                        '<img src="' + treeData[i].rendition_content.thumbnail_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        //'2.4mb' +
                        (treeData[i].rendition_content.preview_content.content_size / 1024 / 1024).toFixed(2) + 'mb' +
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //dynamic pdf/word/xl/office asset image from database/service
                else if (treeData[i].data_type == undefined && treeData[i].rendition_content.pdf_preview_content) {
                    this.tableRowChild += '<div id="' + treeData[i].asset_id + '" class="child-Row ' + treeData[i].asset_id + '">' +
                        ' <div class="title-Cell ' + treeData[i].asset_id + '">' +
                        '<span class="expand_row"> ' +
                        '<label class="main1"><input type="checkbox" name="chkHead' + treeData[i].asset_id + '" id="chk' + treeData[i].asset_id + '" ><span class="geekmark1"></span>' +
                        '</span>' +
                        '<span> ' +
                        //src="'+treeData[i].rendition_content.pdf_preview_content.url+'"
                        '<img src="' + treeData[i].rendition_content.pdf_preview_content.url + '"  class="img-fluid list-asset-size list-asset-hover">' +
                        '</span>' +
                        '<span> ' +
                        treeData[i].name +
                        '</span>' +
                        '</div>' +
                        ' <div class="Cell">' +
                        lastModifiedDate +
                        '</div>' +
                        ' <div class="Cell">' +
                        //'2.4mb' +
                        (treeData[i].rendition_content.pdf_preview_content.content_size / 1024 / 1024).toFixed(2) + 'mb' +
                        '</div>' +
                        '<div class="icons-files-cart"><div class="addcart"></div></div>' +
                        '<div class="icons-files-download"><div class="download-row"></div></div>' +
                        '<div class="icons-files-options"><div class="dropdown show">' +
                        '<a class="dropdown-toggle topd-options1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        '</a>' +
                        '<div class="dropdown-menu optons-menu-files" aria-labelledby="dropdownMenuLink">' +
                        ' <a class="dropdown-item" href="#">Download</a>' +
                        '<a class="dropdown-item" href="#">Add to cart</a>' +
                        '<a class="dropdown-item" href="#">Add to collections</a>' +
                        '<a class="dropdown-item" href="#">Subscribe</a>' +
                        '<a class="dropdown-item" href="#">Copy url</a>' +
                        '<a class="dropdown-item" href="#">View file info</a>' +
                        '</div>' +
                        '</div></div>' +
                        '</div>';
                }
                //this.anyData.push(node);
            }
            if (Number(this.searchParameters.totalhitcountChild) > 10) {
                this.tableRowChild += '<div class="loadMoreDiv"><button class="loadMore ' + this.assetId + ' btn btn-primary btn-bx bx-btnspace " type="button">' +
                    'Load More</button></div>';
            }
            this.tableRowChild += '</div>';
            //console.log(this.tableRowChild);
        }
        catch (Error) {
            console.log("catch block error in constructChildTreeTable function", Error.message);
        }
        //console.log('tree data ', this.anyData);
    };
    TreelistviewComponent.prototype.getFormattedDate = function (date) {
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return month + '/' + day + '/' + year;
    };
    TreelistviewComponent.prototype.paginate = function (param) {
        this.searchParameters.after = param.first;
        this.getMainDataPaging();
        // if(this.fromLeftNavOrSearch=="search"){
        //   this.searchParameters.after=param.first;
        //   this.getSearchData();
        // }
        // else{
        //   this.leftNavPageAfter=param.first;
        //   this.getTotalPageCountLeftNav();
        // }
    };
    TreelistviewComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_listview_service__WEBPACK_IMPORTED_MODULE_5__["ListViewService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_breadcrumbdata_service__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbdataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leftNav', null)
    ], TreelistviewComponent.prototype, "leftNavigation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], TreelistviewComponent.prototype, "rowClicked", null);
    TreelistviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treelistview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./treelistview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/treelistview/treelistview.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./treelistview.component.css */ "./src/app/pages/treelistview/treelistview.component.css")).default]
        })
    ], TreelistviewComponent);
    return TreelistviewComponent;
}());



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml'
        })
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/breadcrumbdata.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/breadcrumbdata.service.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbdataService", function() { return BreadcrumbdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



//import { bcMenuItem } from '../models/breadcrumb';
var BreadcrumbdataService = /** @class */ (function () {
    function BreadcrumbdataService() {
        this.counter = 1;
        this.flgS = false;
        this.flgSort = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.flgS);
        this.count = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.counter);
        //this.bcObjArr  = new BehaviorSubject(this.bcObj);
        this.breadCrumbBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.breadCrumbObj);
        this.searchBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.searchObj);
    }
    BreadcrumbdataService.prototype.nextCount = function () {
        this.count.next(++this.counter);
    };
    BreadcrumbdataService.prototype.bcnextCount = function (arr) {
        //this.bcObjArr.next(arr);
    };
    BreadcrumbdataService.prototype.breadcrumbsfunction = function (param) {
        this.breadCrumbBS.next(param);
    };
    BreadcrumbdataService.prototype.searchfunction = function (param) {
        this.searchBS.next(param);
    };
    BreadcrumbdataService.prototype.sortbtn = function (flg) {
        this.flgSort.next(flg);
    };
    BreadcrumbdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BreadcrumbdataService);
    return BreadcrumbdataService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_searchparams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/searchparams */ "./src/app/models/searchparams.ts");



var DataService = /** @class */ (function () {
    function DataService() {
        //sending topdownloads row data to cart
        this.topDownloadsRowCartData = [];
        this.treeData = {};
        this.searchParamsData = new _models_searchparams__WEBPACK_IMPORTED_MODULE_2__["Searchparams"]();
        this.fromLeftNavOrSearch = "";
    }
    //private globalSearchData = {};  
    DataService.prototype.setOption = function (value) {
        this.treeData = value;
    };
    DataService.prototype.getOption = function () {
        return this.treeData;
    };
    //creating get method for sending topdownloads row data to cart
    DataService.prototype.getCartOption = function () {
        return this.topDownloadsRowCartData;
    };
    //creating set method for sending topdownloads row data to cart
    DataService.prototype.setCartOption = function (value) {
        this.topDownloadsRowCartData = value;
    };
    DataService.prototype.setSearchOption = function (value) {
        this.searchParamsData = value;
    };
    DataService.prototype.getSearchOption = function () {
        return this.searchParamsData;
    };
    DataService.prototype.setLeftNavOrSearch = function (value) {
        this.fromLeftNavOrSearch = value;
    };
    DataService.prototype.getLeftNavOrSearch = function () {
        return this.fromLeftNavOrSearch;
    };
    DataService.prototype.setAssetId = function (folderId) {
        this.assetId = folderId;
    };
    DataService.prototype.getAssetId = function () {
        return this.assetId;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/listview.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/listview.service.ts ***!
  \**********************************************/
/*! exports provided: ListViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewService", function() { return ListViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ListViewService = /** @class */ (function () {
    function ListViewService() {
        this.listFlagSort = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.listFlags);
        this.pagingBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.pagingObj);
        this.leftnavBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.leftnavObj);
        this.rightPanBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.rightPanObj);
        //sending top downloads row data to right panel
        this.topDownload = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.trtopDownloadData);
        //sending listview row data to right panel
        this.trListView = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.trListViewData);
    }
    //sending top downloads row data to right panel
    ListViewService.prototype.trRightPanel = function (newUser) {
        this.topDownload.next(newUser);
    };
    //sending listview row data to right panel
    ListViewService.prototype.trListViewRP = function (listviewUser) {
        this.trListView.next(listviewUser);
    };
    ListViewService.prototype.listviewsortbtn = function (flag) {
        this.listFlagSort.next(flag);
    };
    ListViewService.prototype.clickRightPanFun = function (obj) {
        this.rightPanBS.next(obj);
    };
    ListViewService.prototype.pagingfunction = function (flag) {
        this.pagingBS.next(flag);
    };
    ListViewService.prototype.fromLeftNavfunction = function (param) {
        this.leftnavBS.next(param);
    };
    ListViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ListViewService);
    return ListViewService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    //Content-Type:application/json; charset=UTF-8
    function LoginService(http) {
        this.http = http;
        //private sessionURL = "http://cdam-app-dev-01:11090/otmmapi/v5/ARTESIA.PUBLIC.TREEN/children";
        //private sessionURL = "http://cdam-app-dev-01:11090/otmmapi/v4/sessions";
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8') };
        this.headersJson = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
        this.headersJsession = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
        };
    }
    LoginService.prototype.getSessionJSON = function (serviceURL, params) {
        return this.http.post(serviceURL, params, this.headers);
    };
    LoginService.prototype.getCSNPRD = function (serviceURL) {
        return this.http.get(serviceURL);
    };
    LoginService.prototype.getSessionJSON_Get = function (serviceURL) {
        return this.http.get(serviceURL, { responseType: 'text' });
    };
    LoginService.prototype.getTokenJSON = function (serviceURL) {
        return this.http.get(serviceURL);
    };
    LoginService.prototype.postDubToken = function (serviceURL, params) {
        return this.http.post(serviceURL, params, this.headersJson);
    };
    LoginService.prototype.postJsessionId = function (serviceURL, params) {
        //return this.http.post(serviceURL, params,this.headersJsession);
        return this.http.post(serviceURL, params, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        });
        //return this.http.post(serviceURL,{params: params, headers:this.headersJsession,observe:'response',responseType:'text'});
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var RestService = /** @class */ (function () {
    function RestService(_http) {
        this._http = _http;
        this.servceUrl = 'http://cdam-app-dev-01:11090/otmmapi/';
    }
    RestService.prototype.handleError = function (operation) {
        return function (err) {
            if (err.error.Message == null) {
                //err.error.Message = this.langService.getTranslation('MESSAGES.SERVER-ERROR');
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
        };
    };
    RestService.prototype.setHeaders = function () {
        this.sessionData = JSON.parse(window.localStorage['session']);
        if (this.sessionData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                // .set("Content-Type", "application/json")
                // .set("Accept", "application/json")
                // .set('Inception', window.location.href)
                .set('otmmauthtoken', this.sessionData.message_digest);
            return headers;
        }
    };
    RestService.prototype.setWOHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Disposition", "form-data")
            .set('Inception', window.location.href)
            .set('Authorization', 'Bearer ' + window.localStorage['access_token'])
            .set('otmmauthtoken', this.sessionData.message_digest);
        return headers;
    };
    RestService.prototype.get_All_Service = function (APIName) {
        return this._http.get(this.servceUrl + APIName, {
            headers: this.setHeaders()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getData')));
    };
    RestService.prototype.get_put_by_Params_Service = function (APIName, Body) {
        var bodyString = JSON.stringify(Body); // Stringify payload
        var apiURL = this.servceUrl + APIName;
        return this._http.put(apiURL, bodyString, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getData')));
    };
    RestService.prototype.get_post_by_Params_Service = function (APIName, Body) {
        var bodyString = JSON.stringify(Body); // Stringify payload
        var apiURL = this.servceUrl + APIName;
        return this._http.post(apiURL, bodyString, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getData')));
    };
    RestService.prototype.post_WO_Params_Service = function (APIName, formData) {
        var apiURL = this.servceUrl + APIName;
        return this._http.post(apiURL, formData, {
            headers: this.setWOHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getData')));
    };
    RestService.prototype.get_delete_by_Params_Service = function (APIName) {
        var apiURL = this.servceUrl + APIName;
        return this._http.delete(apiURL, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getData')));
    };
    RestService.prototype.delete_by_Body_Service_WithPost = function (APIName, Body) {
        var bodyString = JSON.stringify(Body); // Stringify payload
        var apiURL = this.servceUrl + APIName;
        return this._http.post(apiURL, bodyString, {
            headers: this.setHeaders()
        }) // ...using post request
            //.map((res: Response) => res) // ...and calling .json() on the response to return data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getData')));
        //.catch(
        //(error: any) => Observable.throw(error)
        //);
    };
    RestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SharedService = /** @class */ (function () {
    //  private postHeadersLocal = { 
    //      headers: new HttpHeaders()
    //      .set('Content-Type', 'application/x-www-form-urlencoded') 
    //      .set('x-requested-by', '340664671') 
    //      .set('otmmauthtoken',localStorage.session)
    //     };
    //     private postHeadersServer = { 
    //       headers: new HttpHeaders()
    //       .set('Content-Type', 'application/x-www-form-urlencoded') 
    //       .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
    //       .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)
    //      };
    //     private deleteHeadersLocal = { 
    //       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    //       .set('x-requested-by', '340664671') 
    //       .set('otmmauthtoken',localStorage.session)
    //      };
    //      private deleteHeadersServer = { 
    //       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    //       .set('x-requested-by', JSON.parse(sessionStorage.session).id) 
    //       .set('otmmauthtoken',JSON.parse(sessionStorage.session).message_digest)
    //      };
    function SharedService(http) {
        this.http = http;
    }
    SharedService.prototype.postService = function (serviceURL, params) {
        if (window.location.host.split(':')[0] == "localhost") {
            return this.http.post(serviceURL, params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('x-requested-by', '513893284')
                    .set('otmmauthtoken', localStorage.session) });
        }
        else {
            return this.http.post(serviceURL, params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('x-requested-by', JSON.parse(sessionStorage.session).id)
                    .set('otmmauthtoken', JSON.parse(sessionStorage.session).message_digest) });
        }
    };
    SharedService.prototype.getService_textResponse = function (serviceURL) {
        return this.http.get(serviceURL, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                .set('otmmauthtoken', localStorage.session),
            responseType: 'text'
        });
    };
    // public getService( serviceURL): Observable<any> {
    //   var getHeaders = { 
    //       headers: new HttpHeaders()
    //       .set('Content-Type', 'application/x-www-form-urlencoded')
    //       .set('otmmauthtoken',JSON.parse(localStorage.session).message_digest) 
    //       //.set('cookie','JSESSIONID=WediWPptgQKySu5wNNyNA_Jow1r4pj86GTSImFWR.DEVOTMM')   
    //      }
    //   return this.http.get(serviceURL,getHeaders);
    // }
    SharedService.prototype.getService = function (serviceURL) {
        var getHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('otmmauthtoken', localStorage.session)
            //.set('cookie','JSESSIONID=WediWPptgQKySu5wNNyNA_Jow1r4pj86GTSImFWR.DEVOTMM') 
        };
        return this.http.get(serviceURL, getHeaders);
    };
    SharedService.prototype.deleteService = function (serviceURL) {
        if (window.location.host.split(':')[0] == "localhost") {
            return this.http.delete(serviceURL, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('x-requested-by', '340664671')
                    .set('otmmauthtoken', localStorage.session) });
        }
        else {
            return this.http.delete(serviceURL, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('x-requested-by', JSON.parse(sessionStorage.session).id)
                    .set('otmmauthtoken', JSON.parse(sessionStorage.session).message_digest) });
        }
    };
    SharedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/announcements/announcements.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/announcements/announcements.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rightmenu{\r\n    /* top: 142px;\r\n    left: 1064px;\r\n    width: 375px;\r\n    height: 1599px; */\r\n    background-color: #F5F5F5;\r\n   \r\n    height: auto;\r\n    padding: 26px 33px;;\r\n    border: 1px solid #F5F5F5;\r\n}\r\n.Announcemens{\r\n    color: #3C3C3C;\r\n    font-size: 17px;\r\n    margin-bottom:30px;\r\n    font-family: 'CiscoSans-Regular';\r\n}\r\n.announcement-top {\r\n    position: fixed;\r\n}\r\n.newBx{\r\n    text-align: left;\r\n    color: #3C3C3C;\r\n    font-size: 12px;\r\n    font-family: 'CiscoSans-Bold';\r\n}\r\n.checkOut{\r\n    font-size: 12px;\r\n    color: #707070;\r\n    border-bottom: 1px solid #808080;\r\n    padding-bottom: 24px;\r\n}\r\n.checkOut-featured {\r\n    font-size: 12px;\r\n    color: #707070;\r\n}\r\n.rightmenu {\r\n     height: 100%;\r\n     min-height: 1000px;\r\n }\r\n.featured{\r\n    margin-top:8px;\r\n    text-align: left;\r\n    color: #3C3C3C;\r\n    font-size: 12px;\r\n    font-family: 'CiscoSans-Bold';\r\n}\r\n/* .borderTest{\r\n    border-bottom:1px solid #707070;\r\n    color: #707070;\r\n    margin-bottom: 10px;\r\n} */\r\n.lastModified{\r\n    margin-top:8px;\r\n    text-align: left;\r\n    color: #3C3C3C;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n    border-bottom: 1px solid #808080;\r\n    padding-bottom: 34px;\r\n}\r\n.createdBy{\r\n    font-size: 10px;\r\n    color: #707070;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n    margin-top: 34px;\r\n}\r\n.fa-remove{\r\n    color: #707070 !important;\r\n    position: absolute;\r\n    left: 94%;\r\n    font-weight: normal;\r\n    top: 3px;\r\n    cursor: pointer;\r\n}\r\n.cart{\r\n    float:left;\r\n    margin-right:12px;\r\n}\r\n.download{\r\n    float:left;\r\n    margin-right:12px;\r\n}\r\n.fa-shopping-cart{\r\n    background-color:#FFFF !important;\r\n    color:#808080 !important;\r\n}\r\n.fa-download{\r\n    background-color:#FFFF !important;\r\n    color:#808080 !important;\r\n    \r\n}\r\n.fa-ellipsis-v{\r\n    background-color:#FFFF !important;\r\n    color:#808080 !important;\r\n}\r\n.topdownload{\r\n    margin-bottom: 15px;\r\n}\r\n.img-anpunce {\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n    background-color: #e6e6e6;\r\n    margin-bottom: 12px;\r\n    max-width: 100%;\r\n}\r\n.ellipsis{\r\n    margin-bottom: 15px;\r\n}\r\n.newBxName{\r\n    color: #3C3C3C;\r\n    font-size: 14px;\r\n    font-family: 'CiscoSans-Bold';\r\n    padding-bottom: 10px;\r\n    word-break: break-word;\r\n}\r\n.img-cart, .img-download, .img-options {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n/* notifications */\r\n.noti-text:hover {\r\n    cursor: pointer;\r\n}\r\n.noti-text-tilte {\r\n    color: #1D4572;\r\n    font-size: 12px;\r\n    font-family: 'CiscoSans-Medium';\r\n}\r\n.noti-text-desc {\r\n    color: #707070;\r\n    font-size: 11px;\r\n    margin-top: 2px;\r\n}\r\n.noti-icon {\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 16px;\r\n    background-color:#0B93DB;\r\n    width: 9%;\r\n    float: left;\r\n}\r\n.notification-container {\r\n    max-width: 100%;\r\n    margin-bottom: 23px;\r\n    display: flow-root;\r\n   \r\n}\r\n.noti-text {\r\n    width: 86%;\r\n    float: left;\r\n    margin-left: 10px;\r\n    margin-top: -6px;\r\n}\r\n.noti-icon.other {\r\n    background-color:#FBAB18;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7OztxQkFHaUI7SUFDakIseUJBQXlCOztJQUV6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQztLQUNJLFlBQVk7S0FDWixrQkFBa0I7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFJQTs7OztHQUlHO0FBRUg7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCOztBQUU1QjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUdBLGtCQUFrQjtBQUNsQjtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0bWVudXtcclxuICAgIC8qIHRvcDogMTQycHg7XHJcbiAgICBsZWZ0OiAxMDY0cHg7XHJcbiAgICB3aWR0aDogMzc1cHg7XHJcbiAgICBoZWlnaHQ6IDE1OTlweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjZweCAzM3B4OztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxuLkFubm91bmNlbWVuc3tcclxuICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaXNjb1NhbnMtUmVndWxhcic7XHJcbn1cclxuLmFubm91bmNlbWVudC10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5uZXdCeHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzNDM0MzQztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUJvbGQnO1xyXG59XHJcblxyXG4uY2hlY2tPdXR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbn1cclxuLmNoZWNrT3V0LWZlYXR1cmVkIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbiAucmlnaHRtZW51IHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gfVxyXG4uZmVhdHVyZWR7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzNDM0MzQztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUJvbGQnO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC5ib3JkZXJUZXN0e1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSAqL1xyXG5cclxuLmxhc3RNb2RpZmllZHtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwODA4MDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNHB4O1xyXG59XHJcblxyXG4uY3JlYXRlZEJ5e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xyXG59XHJcbi5mYS1yZW1vdmV7XHJcbiAgICBjb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOTQlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJ0e1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDoxMnB4O1xyXG59XHJcbi5kb3dubG9hZHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTJweDtcclxufVxyXG5cclxuLmZhLXNob3BwaW5nLWNhcnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojODA4MDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhLWRvd25sb2Fke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IzgwODA4MCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLmZhLWVsbGlwc2lzLXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojODA4MDgwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcGRvd25sb2Fke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uaW1nLWFucHVuY2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbGxpcHNpc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm5ld0J4TmFtZXtcclxuICAgIGNvbG9yOiAjM0MzQzNDO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaXNjb1NhbnMtQm9sZCc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLmltZy1jYXJ0LCAuaW1nLWRvd25sb2FkLCAuaW1nLW9wdGlvbnMge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4vKiBub3RpZmljYXRpb25zICovXHJcbi5ub3RpLXRleHQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ub3RpLXRleHQtdGlsdGUge1xyXG4gICAgY29sb3I6ICMxRDQ1NzI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1NZWRpdW0nO1xyXG59XHJcbi5ub3RpLXRleHQtZGVzYyB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4ubm90aS1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBCOTNEQjtcclxuICAgIHdpZHRoOiA5JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XHJcbiAgIFxyXG59XHJcbi5ub3RpLXRleHQge1xyXG4gICAgd2lkdGg6IDg2JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG59XHJcbi5ub3RpLWljb24ub3RoZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkJBQjE4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/announcements/announcements.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/announcements/announcements.component.ts ***!
  \*****************************************************************/
/*! exports provided: AnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function() { return AnnouncementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_listview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/listview.service */ "./src/app/services/listview.service.ts");



var AnnouncementsComponent = /** @class */ (function () {
    function AnnouncementsComponent(listViewService) {
        this.listViewService = listViewService;
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listViewService.topDownload.subscribe(function (a) {
            _this.trtopDownloadData = []; //empty
            _this.trtopDownloadData = a;
            console.log('row data topdownload:', _this.trtopDownloadData);
        });
        this.listViewService.trListView.subscribe(function (b) {
            _this.trListViewData = []; //empty
            _this.trListViewData = b;
            console.log('row data ListView:', _this.trListViewData);
        });
    };
    AnnouncementsComponent.prototype.removeTopDownloadData = function () {
        this.trtopDownloadData = null;
    };
    AnnouncementsComponent.prototype.removeListViewRPData = function () {
        this.trListViewData = null;
    };
    AnnouncementsComponent.prototype.rpRowImgDownload = function (id) {
        var url = '/otmmapi/v5/renditions/' + id + '?disposition=attachment';
        var link = document.createElement('a');
        link.href = url;
        link.click();
    };
    AnnouncementsComponent.prototype.rpRowFolderDownload = function (id) {
        // var url = '/otmmapi/v5/renditions/'+id+'?disposition=attachment';
        // var link = document.createElement('a');
        // link.href = url;
        // link.click();
        alert("folder download");
    };
    AnnouncementsComponent.ctorParameters = function () { return [
        { type: src_app_services_listview_service__WEBPACK_IMPORTED_MODULE_2__["ListViewService"] }
    ]; };
    AnnouncementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-announcements',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./announcements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/announcements/announcements.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./announcements.component.css */ "./src/app/shared/announcements/announcements.component.css")).default]
        })
    ], AnnouncementsComponent);
    return AnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bx-footer {\r\n    height: 50px;\r\n    background-color: #1D4572;\r\n}\r\n.footer-links ul li {\r\n    list-style-type: none;\r\n    display: inline;\r\n}\r\n.footer-links ul {\r\n    padding-top: 14px;\r\n    margin-bottom: 0px;\r\n}\r\n.footer-links ul li a {\r\n    color: #fff;\r\n    padding: 0px 10px;\r\n    font-size: 11px;\r\n    font-family: 'CiscoSans-Regular';\r\n}\r\n.logo-footer {\r\n    width: 58px;\r\n    height: auto;\r\n    padding-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ieC1mb290ZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFENDU3MjtcclxufVxyXG4uZm9vdGVyLWxpbmtzIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uZm9vdGVyLWxpbmtzIHVsIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5mb290ZXItbGlua3MgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaXNjb1NhbnMtUmVndWxhcic7XHJcbn1cclxuLmxvZ28tZm9vdGVyIHtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/leftmenu/leftmenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/leftmenu/leftmenu.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" .app-root-left {\r\n    min-height: 100% !important;\r\n    height: 100%;\r\n}\r\n.img-logo{\r\n    height: auto;\r\n    width: 54px;\r\n}\r\n.leftnav-container{\r\n    height: 100%;\r\n    position: fixed;\r\n}\r\n.bx-logo{\r\n    text-align: center;\r\n    padding-top: 22px;\r\n}\r\n.bx-logo-text{\r\n    font-size: 20px;\r\n    font-family:'CiscoSans-Light' ;\r\n    letter-spacing: 0;\r\n    color: #1D4572;\r\n    opacity: 1;\r\n    margin-top: 6px;\r\n}\r\n.left-menu-item-home .home-icon{\r\n    background: url('Home_inactive.png') no-repeat left;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-files .home-icon{\r\n    background: url('All-files_inactive.png') no-repeat left;\r\n    width: 22px;\r\n    height: 22px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-collections .home-icon{\r\n    background: url('Collections_inactive.png') no-repeat left;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-downloads .home-icon{\r\n    background: url('Downloads_inactive.png') no-repeat left;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.menu-label{\r\n    font-family: 'CiscoSans-Bold';\r\n    color: #808080;\r\n    font-size: 13px;\r\n    /* line-height: 38px; */\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -6px;\r\n    height: 31px;\r\n}\r\n.left-menu-list {\r\n    margin-top: 26px;\r\n}\r\n.left-menu-item-home a {\r\n    color: #808080;\r\n    \r\n}\r\n.left-menu-item-home a:hover .menu-label, .left-menu-item-downloads a:hover .menu-label, .left-menu-item-files a:hover .menu-label, .left-menu-item-collections a:hover .menu-label{\r\n    text-decoration: none;\r\n    border-bottom: 1px solid #00bceb;\r\n}\r\n.left-menu-item-home a:hover .home-icon {\r\n    background: url('Home_hover.png') no-repeat left;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n    \r\n}\r\n.left-menu-item-files a:hover .home-icon {\r\n    background: url('All-files_hover.png') no-repeat left;\r\n    width: 22px;\r\n    height: 22px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-home a:hover .menu-label, .left-menu-item-collections a:hover .menu-label, .left-menu-item-files a:hover .menu-label,  .left-menu-item-downloads a:hover .menu-label{\r\n    text-decoration: none;\r\n    border-bottom: 2px solid #0B93DB;\r\n}\r\n.left-menu-item-collections a:hover .home-icon {\r\n    background: url('Collections_hover.png') no-repeat left;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-downloads a:hover .home-icon {\r\n    background: url('Downloads_hover.png') no-repeat left;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-home a.active .home-icon {\r\n    background: url('Home_active.png') no-repeat left;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-files a.active .home-icon {\r\n    background: url('All-files_active.png') no-repeat left;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-files a.active .menu-label, .left-menu-item-home a.active .menu-label, .left-menu-item-collections a.active .menu-label, .left-menu-item-downloads a.active .menu-label {\r\n    color: #1E4471;\r\n    border-bottom: 2px solid #0B93DB;\r\n}\r\n.left-menu-item-collections a.active .home-icon {\r\n    background: url('Collections_active.png') no-repeat left;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item-downloads a.active .home-icon {\r\n    background: url('Downloads_Active.png') no-repeat left;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: inline-block;\r\n    background-size: contain;\r\n    margin-right: 9px;\r\n}\r\n.left-menu-item {\r\n    line-height: 40px;\r\n}\r\n.card-header {\r\n    border: 0px;\r\n    padding: 0px;\r\n}\r\n.accordion .card {\r\n    border: none;\r\n    background-color: #f5f5f5;\r\n    margin: 10px 0px -3px 0px;\r\n    border-bottom: 1px solid #808080;\r\n    padding-bottom: 6px;\r\n    border-radius: 0px;\r\n}\r\n.card-header {\r\n    background-color: #f5f5f5;\r\n}\r\n.btn.btn-link {\r\n    font-size: 77%;\r\n    padding: 0px;\r\n    color: #3C3C3C;\r\n    width: 93%;\r\n    text-align: left;\r\n    display: inline-block;\r\n}\r\n.btn.btn-link:hover {\r\n    text-decoration: none;\r\n}\r\n.card-body {\r\n    padding: 0px;\r\n}\r\n.useful-container {\r\n    margin-top: 114px;\r\n}\r\n.cbe-body ul {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style-type: none;\r\n    line-height: 19px;\r\n    padding-top:2px;\r\n}\r\n.cbe-body ul li a {\r\n    color: #808080;\r\n    font-size: 11px;\r\n}\r\n.fa.fa-plus, .fa.fa-minus {\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    color: #0B93DB;\r\n}\r\n.menu-icon-bx {\r\n    display: none;\r\n}\r\n@media screen and (max-width : 1204px) {\r\n    .bx-logo-text{\r\n        font-size: 22px;\r\n    }\r\n}\r\n/* // Extra small devices (portrait phones, less than 576px)\r\n// No media query since this is the default in Bootstrap\r\n\r\n// Mobile devices */\r\n@media (max-width: 599px) {  \r\n\r\n}\r\n/* Tablets*/\r\n@media (max-width: 1099px) {  \r\n    .menu-label {\r\n        display: none;\r\n    }\r\n    .useful-container {\r\n        display: none;\r\n    }\r\n    .img-logo, .bx-logo-text {\r\n        display: none;\r\n    }\r\n    .menu-icon-bx {\r\n        display: inline-block;\r\n    }\r\n    \r\n    .menu-container {\r\n        display: inline-block;\r\n        cursor: pointer;\r\n      }\r\n      \r\n      .bar1, .bar2, .bar3 {\r\n        width: 26px;\r\n        height: 2px;\r\n        background-color: #808080;\r\n        margin: 8px 0;\r\n        -webkit-transition: 0.4s;\r\n        transition: 0.4s;\r\n      }\r\n      \r\n      .change .bar1 {\r\n        -webkit-transform: rotate(-45deg) translate(-9px, 6px);\r\n        transform: rotate(-45deg) translate(-9px, 6px);\r\n      }\r\n      \r\n      .change .bar2 {opacity: 0;}\r\n      \r\n      .change .bar3 {\r\n        -webkit-transform: rotate(45deg) translate(-8px, -8px);\r\n        transform: rotate(45deg) translate(-8px, -8px);\r\n      }\r\n}\r\n/* Small Desktops */\r\n@media (max-width: 1439px) { \r\n\r\n }\r\n/* // large Desktops (large desktops, 1200px and up) */\r\n@media (min-width: 2099px) { \r\n\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xlZnRtZW51L2xlZnRtZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRywyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbURBQXVGO0lBQ3ZGLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdEQUE0RjtJQUM1RixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwwREFBOEY7SUFDOUYsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0RBQTRGO0lBQzVGLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnREFBb0Y7SUFDcEYsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLHFEQUF5RjtJQUN6RixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx1REFBMkY7SUFDM0YsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscURBQXlGO0lBQ3pGLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFJQTtJQUNJLGlEQUFxRjtJQUNyRixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxzREFBMEY7SUFDMUYsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksd0RBQTRGO0lBQzVGLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNEQUEwRjtJQUMxRixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQU9BOzs7bUJBR21CO0FBQ25COztBQUVBO0FBRUEsV0FBVztBQUNYO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLFdBQVc7UUFDWCxXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0Usc0RBQXNEO1FBQ3RELDhDQUE4QztNQUNoRDs7TUFFQSxlQUFlLFVBQVUsQ0FBQzs7TUFFMUI7UUFDRSxzREFBc0Q7UUFDdEQsOENBQThDO01BQ2hEO0FBQ047QUFJQSxtQkFBbUI7QUFDbkI7O0NBRUM7QUFFRCxzREFBc0Q7QUFDdEQ7O0NBRUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGVmdG1lbnUvbGVmdG1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuYXBwLXJvb3QtbGVmdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmltZy1sb2dve1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbn1cclxuLmxlZnRuYXYtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5ieC1sb2dve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIycHg7XHJcbn1cclxuLmJ4LWxvZ28tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OidDaXNjb1NhbnMtTGlnaHQnIDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgY29sb3I6ICMxRDQ1NzI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ubGVmdC1tZW51LWl0ZW0taG9tZSAuaG9tZS1pY29ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vY2J4L2ltYWdlcy9NYWluLU1lbnVfaWNvbnMvSG9tZV9pbmFjdGl2ZS5wbmdcIikgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcbi5sZWZ0LW1lbnUtaXRlbS1maWxlcyAuaG9tZS1pY29ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vY2J4L2ltYWdlcy9NYWluLU1lbnVfaWNvbnMvQWxsLWZpbGVzX2luYWN0aXZlLnBuZ1wiKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWNvbGxlY3Rpb25zIC5ob21lLWljb257XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9jYngvaW1hZ2VzL01haW4tTWVudV9pY29ucy9Db2xsZWN0aW9uc19pbmFjdGl2ZS5wbmdcIikgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcbi5sZWZ0LW1lbnUtaXRlbS1kb3dubG9hZHMgLmhvbWUtaWNvbntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2NieC9pbWFnZXMvTWFpbi1NZW51X2ljb25zL0Rvd25sb2Fkc19pbmFjdGl2ZS5wbmdcIikgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcblxyXG4ubWVudS1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lzY29TYW5zLUJvbGQnO1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMzhweDsgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTZweDtcclxuICAgIGhlaWdodDogMzFweDtcclxufVxyXG4ubGVmdC1tZW51LWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxufVxyXG4ubGVmdC1tZW51LWl0ZW0taG9tZSBhIHtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgXHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWhvbWUgYTpob3ZlciAubWVudS1sYWJlbCwgLmxlZnQtbWVudS1pdGVtLWRvd25sb2FkcyBhOmhvdmVyIC5tZW51LWxhYmVsLCAubGVmdC1tZW51LWl0ZW0tZmlsZXMgYTpob3ZlciAubWVudS1sYWJlbCwgLmxlZnQtbWVudS1pdGVtLWNvbGxlY3Rpb25zIGE6aG92ZXIgLm1lbnUtbGFiZWx7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYmNlYjtcclxufVxyXG4ubGVmdC1tZW51LWl0ZW0taG9tZSBhOmhvdmVyIC5ob21lLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vY2J4L2ltYWdlcy9NYWluLU1lbnVfaWNvbnMvSG9tZV9ob3Zlci5wbmdcIikgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgXHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWZpbGVzIGE6aG92ZXIgLmhvbWUtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9jYngvaW1hZ2VzL01haW4tTWVudV9pY29ucy9BbGwtZmlsZXNfaG92ZXIucG5nXCIpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxufVxyXG4ubGVmdC1tZW51LWl0ZW0taG9tZSBhOmhvdmVyIC5tZW51LWxhYmVsLCAubGVmdC1tZW51LWl0ZW0tY29sbGVjdGlvbnMgYTpob3ZlciAubWVudS1sYWJlbCwgLmxlZnQtbWVudS1pdGVtLWZpbGVzIGE6aG92ZXIgLm1lbnUtbGFiZWwsICAubGVmdC1tZW51LWl0ZW0tZG93bmxvYWRzIGE6aG92ZXIgLm1lbnUtbGFiZWx7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBCOTNEQjtcclxufVxyXG4ubGVmdC1tZW51LWl0ZW0tY29sbGVjdGlvbnMgYTpob3ZlciAuaG9tZS1pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2NieC9pbWFnZXMvTWFpbi1NZW51X2ljb25zL0NvbGxlY3Rpb25zX2hvdmVyLnBuZ1wiKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWRvd25sb2FkcyBhOmhvdmVyIC5ob21lLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vY2J4L2ltYWdlcy9NYWluLU1lbnVfaWNvbnMvRG93bmxvYWRzX2hvdmVyLnBuZ1wiKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmxlZnQtbWVudS1pdGVtLWhvbWUgYS5hY3RpdmUgLmhvbWUtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9jYngvaW1hZ2VzL01haW4tTWVudV9pY29ucy9Ib21lX2FjdGl2ZS5wbmdcIikgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcblxyXG4ubGVmdC1tZW51LWl0ZW0tZmlsZXMgYS5hY3RpdmUgLmhvbWUtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9jYngvaW1hZ2VzL01haW4tTWVudV9pY29ucy9BbGwtZmlsZXNfYWN0aXZlLnBuZ1wiKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWZpbGVzIGEuYWN0aXZlIC5tZW51LWxhYmVsLCAubGVmdC1tZW51LWl0ZW0taG9tZSBhLmFjdGl2ZSAubWVudS1sYWJlbCwgLmxlZnQtbWVudS1pdGVtLWNvbGxlY3Rpb25zIGEuYWN0aXZlIC5tZW51LWxhYmVsLCAubGVmdC1tZW51LWl0ZW0tZG93bmxvYWRzIGEuYWN0aXZlIC5tZW51LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMUU0NDcxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwQjkzREI7XHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWNvbGxlY3Rpb25zIGEuYWN0aXZlIC5ob21lLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vY2J4L2ltYWdlcy9NYWluLU1lbnVfaWNvbnMvQ29sbGVjdGlvbnNfYWN0aXZlLnBuZ1wiKSBuby1yZXBlYXQgbGVmdDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuLmxlZnQtbWVudS1pdGVtLWRvd25sb2FkcyBhLmFjdGl2ZSAuaG9tZS1pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2NieC9pbWFnZXMvTWFpbi1NZW51X2ljb25zL0Rvd25sb2Fkc19BY3RpdmUucG5nXCIpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxufVxyXG5cclxuLmxlZnQtbWVudS1pdGVtIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmFjY29yZGlvbiAuY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAtM3B4IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4uYnRuLmJ0bi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogNzclO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgY29sb3I6ICMzQzNDM0M7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYnRuLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4udXNlZnVsLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTRweDtcclxufVxyXG4uY2JlLWJvZHkgdWwge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIHBhZGRpbmctdG9wOjJweDtcclxufVxyXG4uY2JlLWJvZHkgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uZmEuZmEtcGx1cywgLmZhLmZhLW1pbnVzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzBCOTNEQjtcclxufVxyXG4ubWVudS1pY29uLWJ4IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjA0cHgpIHtcclxuICAgIC5ieC1sb2dvLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG4vLyBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIEJvb3RzdHJhcFxyXG5cclxuLy8gTW9iaWxlIGRldmljZXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7ICBcclxuXHJcbn1cclxuXHJcbi8qIFRhYmxldHMqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTA5OXB4KSB7ICBcclxuICAgIC5tZW51LWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnVzZWZ1bC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW1nLWxvZ28sIC5ieC1sb2dvLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWVudS1pY29uLWJ4IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2hhbmdlIC5iYXIxIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNoYW5nZSAuYmFyMiB7b3BhY2l0eTogMDt9XHJcbiAgICAgIFxyXG4gICAgICAuY2hhbmdlIC5iYXIzIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcclxuICAgICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qIFNtYWxsIERlc2t0b3BzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHsgXHJcblxyXG4gfVxyXG5cclxuLyogLy8gbGFyZ2UgRGVza3RvcHMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMjA5OXB4KSB7IFxyXG5cclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/shared/leftmenu/leftmenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/leftmenu/leftmenu.component.ts ***!
  \*******************************************************/
/*! exports provided: LeftmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftmenuComponent", function() { return LeftmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_listview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/listview.service */ "./src/app/services/listview.service.ts");





var LeftmenuComponent = /** @class */ (function () {
    function LeftmenuComponent(router, spinner, listViewService) {
        this.router = router;
        this.spinner = spinner;
        this.listViewService = listViewService;
        $(document).ready(function () {
            // Add minus icon for collapse element which is open by default
            $(".collapse.show").each(function () {
                $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
            });
            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
            }).on('hide.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
            });
        });
    }
    LeftmenuComponent.prototype.ngOnInit = function () {
        $('.left-menu-item .home-menu').click(function () {
            $('.left-menu-item .home-menu').removeClass('active');
            $(this).addClass('active');
        });
        $(".menu-container").click(function () {
            alert('test');
        });
    };
    LeftmenuComponent.prototype.myFunction = function (event) {
        event.classList.toggle("change");
    };
    LeftmenuComponent.prototype.homeClick = function () {
        var _this = this;
        // this.spinner.show();
        this.listViewService.trRightPanel(null);
        this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
        setTimeout(function () { return _this.router.navigate(['layout']); });
        //this.spinner.hide();
    };
    LeftmenuComponent.prototype.allAssetsClick = function () {
        var _this = this;
        this.spinner.show();
        this.listViewService.trRightPanel(null);
        this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
        setTimeout(function () { return _this.router.navigate(['layout/listview']); });
        //this.spinner.hide();
    };
    LeftmenuComponent.prototype.mycollections = function () {
        var _this = this;
        //
        this.spinner.show();
        this.listViewService.trRightPanel(null);
        this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
        setTimeout(function () { return _this.router.navigate(['layout/listview']); });
    };
    LeftmenuComponent.prototype.recentDownloads = function () {
        var _this = this;
        //  /layout/recent-downloads
        this.spinner.show();
        this.listViewService.trRightPanel(null);
        this.router.navigateByUrl('layout/assets', { skipLocationChange: true });
        setTimeout(function () { return _this.router.navigate(['layout/listview']); });
    };
    LeftmenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_listview_service__WEBPACK_IMPORTED_MODULE_4__["ListViewService"] }
    ]; };
    LeftmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftmenu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leftmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/leftmenu/leftmenu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leftmenu.component.css */ "./src/app/shared/leftmenu/leftmenu.component.css")).default]
        })
    ], LeftmenuComponent);
    return LeftmenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/topmenu/topmenu.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/topmenu/topmenu.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bx-breadcrumb {\r\n    padding: 0;\r\n    margin: 0px;\r\n    background-color: inherit;\r\n}\r\n.breadcrumb-item.active {\r\n    color: #1D4572;\r\n    font-size: 13px;\r\n    font-family: 'CiscoSans-Regular';\r\n}\r\n.breadcrumb-item.active a {\r\n    color: #1D4572;\r\n}\r\n.bread-crums {\r\n    margin-top: 30px;\r\n}\r\n.topnav-icons ul {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    position: relative;\r\n    top: 2px;\r\n    left: 48%;\r\n\r\n}\r\n.topnav-icons ul li {\r\n    display: inline-block;\r\n    list-style-type: none;\r\n}\r\n.topnav-icons ul li a {\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n.topnav-icons ul li.announcements a {\r\n    background: url('icon-announce.PNG') no-repeat center left;\r\n    background-size: contain;\r\n}\r\n.topnav-icons ul li.announcements a:hover {\r\n    background: url('icon-announce.PNG') no-repeat center left;\r\n    background-size: contain;\r\n}\r\n.topnav-icons ul li.announcements a.active {\r\n    background: url('icon-announce.PNG') no-repeat center left;\r\n    background-size: contain;\r\n}\r\n.topnav-icons ul li.cart a {\r\n    background: url('cart_inactive.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.cart a:hover {\r\n    background: url('cart_hover.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.cart a.active {\r\n    background: url('cart_active.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.notifications a {\r\n    background: url('notifications_inactive.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.notifications a:hover {\r\n    background: url('notifications_hover.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.notifications a.active {\r\n    background: url('notifications_active.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.profile a {\r\n    background: url('user_inactive.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.profile a:hover {\r\n    background: url('user_hover.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons ul li.profile a.active {\r\n    background: url('user_active.png') no-repeat center left;\r\n    background-size: contain;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: inline-block;\r\n}\r\n.topnav-icons {\r\n    text-align: right;\r\n    margin-right: 19px;\r\n    margin-top: 12px;\r\n    position: fixed;\r\n    z-index: 9;\r\n}\r\n.topmenu-container {\r\n    margin-bottom: 12px;\r\n}\r\n.nav-link.active:before {\r\n    width: 2; \r\n  height: 2; \r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-bottom: 10px solid red;\r\n}\r\n.topnav-icons.navbar ul.navbar-nav {\r\n    display: block;\r\n}\r\n@media (max-width: 1099px) { \r\n    .topnav-icons {\r\n        left: 46%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcG1lbnUvdG9wbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTOztBQUViO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBEQUE4RTtJQUM5RSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDBEQUE4RTtJQUM5RSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDBEQUE4RTtJQUM5RSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDBEQUErRjtJQUMvRix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHVEQUE0RjtJQUM1Rix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdEQUE2RjtJQUM3Rix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1FQUF3RztJQUN4Ryx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdFQUFxRztJQUNyRyx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlFQUFzRztJQUN0Ryx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBEQUErRjtJQUMvRix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHVEQUE0RjtJQUM1Rix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdEQUE2RjtJQUM3Rix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksUUFBUTtFQUNWLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDZCQUE2QjtBQUMvQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUdBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b3BtZW51L3RvcG1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ieC1icmVhZGNydW1iIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMxRDQ1NzI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0Npc2NvU2Fucy1SZWd1bGFyJztcclxufVxyXG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSBhIHtcclxuICAgIGNvbG9yOiAjMUQ0NTcyO1xyXG59XHJcbi5icmVhZC1jcnVtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi50b3BuYXYtaWNvbnMgdWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDQ4JTtcclxuXHJcbn1cclxuLnRvcG5hdi1pY29ucyB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLnRvcG5hdi1pY29ucyB1bCBsaSBhIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi50b3BuYXYtaWNvbnMgdWwgbGkuYW5ub3VuY2VtZW50cyBhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9pY29uLWFubm91bmNlLlBORycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4udG9wbmF2LWljb25zIHVsIGxpLmFubm91bmNlbWVudHMgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvaWNvbi1hbm5vdW5jZS5QTkcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuLnRvcG5hdi1pY29ucyB1bCBsaS5hbm5vdW5jZW1lbnRzIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9pY29uLWFubm91bmNlLlBORycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4udG9wbmF2LWljb25zIHVsIGxpLmNhcnQgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy9jYXJ0X2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50b3BuYXYtaWNvbnMgdWwgbGkuY2FydCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL2NhcnRfaG92ZXIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRvcG5hdi1pY29ucyB1bCBsaS5jYXJ0IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL2NhcnRfYWN0aXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50b3BuYXYtaWNvbnMgdWwgbGkubm90aWZpY2F0aW9ucyBhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vY2J4L2ltYWdlcy9mdW5jdGlvbmFsX2ljb25zL25vdGlmaWNhdGlvbnNfaW5hY3RpdmUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRvcG5hdi1pY29ucyB1bCBsaS5ub3RpZmljYXRpb25zIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvbm90aWZpY2F0aW9uc19ob3Zlci5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udG9wbmF2LWljb25zIHVsIGxpLm5vdGlmaWNhdGlvbnMgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvbm90aWZpY2F0aW9uc19hY3RpdmUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRvcG5hdi1pY29ucyB1bCBsaS5wcm9maWxlIGEge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9jYngvaW1hZ2VzL2Z1bmN0aW9uYWxfaWNvbnMvdXNlcl9pbmFjdGl2ZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udG9wbmF2LWljb25zIHVsIGxpLnByb2ZpbGUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy91c2VyX2hvdmVyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50b3BuYXYtaWNvbnMgdWwgbGkucHJvZmlsZSBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NieC9pbWFnZXMvZnVuY3Rpb25hbF9pY29ucy91c2VyX2FjdGl2ZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvcG5hdi1pY29ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTlweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi50b3BtZW51LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5uYXYtbGluay5hY3RpdmU6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAyOyBcclxuICBoZWlnaHQ6IDI7IFxyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLnRvcG5hdi1pY29ucy5uYXZiYXIgdWwubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDk5cHgpIHsgXHJcbiAgICAudG9wbmF2LWljb25zIHtcclxuICAgICAgICBsZWZ0OiA0NiU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/topmenu/topmenu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/topmenu/topmenu.component.ts ***!
  \*****************************************************/
/*! exports provided: TopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopmenuComponent", function() { return TopmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");



var TopmenuComponent = /** @class */ (function () {
    function TopmenuComponent(_sharedservice) {
        this._sharedservice = _sharedservice;
    }
    TopmenuComponent.prototype.ngOnInit = function () {
        $('.navbar-nav .nav-link').click(function () {
            $('.navbar-nav .nav-link').removeClass('active');
            $(this).addClass('active');
        });
    };
    TopmenuComponent.prototype.profileDetails = function (event) {
        this.getprofile();
    };
    TopmenuComponent.prototype.getprofile = function () {
        var _this = this;
        var url = '/otmmapi/v5/users/me';
        this._sharedservice.getService(url).subscribe(function (data) {
            _this.userDetails = data.user_resource.user;
            console.log(_this.userDetails);
            //this.showModal = true; // Show-Hide Modal Check
        });
    };
    TopmenuComponent.ctorParameters = function () { return [
        { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
    ]; };
    TopmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topmenu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topmenu/topmenu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topmenu.component.css */ "./src/app/shared/topmenu/topmenu.component.css")).default]
        })
    ], TopmenuComponent);
    return TopmenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Raghu\cbx_Angular\cbx _git_latest\cbx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map