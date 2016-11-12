"use strict";var __decorate=this&&this.__decorate||function(e,r,o,t){var a,n=arguments.length,c=n<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,o,t);else for(var p=e.length-1;p>=0;p--)(a=e[p])&&(c=(n<3?a(c):n>3?a(r,o,c):a(r,o))||c);return n>3&&c&&Object.defineProperty(r,o,c),c},__metadata=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},core_1=require("@angular/core"),core_2=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),forms_1=require("@angular/forms"),app_component_1=require("./app.component"),navbar_component_1=require("./navbar.component"),footer_component_1=require("./footer.component"),resourceman_service_1=require("./resourceman.service"),tracelog_service_1=require("./tracelog.service");core_1.enableProdMode();var AppModule=function(){function e(){}return e=__decorate([core_2.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule],declarations:[app_component_1.AppComponent,navbar_component_1.AppNavbar,footer_component_1.AppFooter],providers:[resourceman_service_1.ResourceMan,tracelog_service_1.TraceLog],bootstrap:[app_component_1.AppComponent]}),__metadata("design:paramtypes",[])],e)}();exports.AppModule=AppModule;
