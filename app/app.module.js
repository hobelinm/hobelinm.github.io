"use strict";var __decorate=this&&this.__decorate||function(e,r,o,t){var a,n=arguments.length,p=3>n?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,o,t);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(p=(3>n?a(p):n>3?a(r,o,p):a(r,o))||p);return n>3&&p&&Object.defineProperty(r,o,p),p},__metadata=this&&this.__metadata||function(e,r){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,r):void 0},platform_browser_dynamic_1=require("@angular/platform-browser-dynamic"),core_1=require("@angular/core"),core_2=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),app_component_1=require("./app.component"),navbar_component_1=require("./navbar.component"),footer_component_1=require("./footer.component"),resourceman_service_1=require("./resourceman.service"),tracelog_service_1=require("./tracelog.service");core_1.enableProdMode();var AppModule=function(){function e(){}return e=__decorate([core_2.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,http_1.HttpModule],declarations:[app_component_1.AppComponent,navbar_component_1.AppNavbar,footer_component_1.AppFooter],providers:[resourceman_service_1.ResourceMan,tracelog_service_1.TraceLog],bootstrap:[app_component_1.AppComponent]}),__metadata("design:paramtypes",[])],e)}();exports.AppModule=AppModule,platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
