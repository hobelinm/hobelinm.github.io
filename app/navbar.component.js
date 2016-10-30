"use strict";var __decorate=this&&this.__decorate||function(e,t,a,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(s<3?o(l):s>3?o(t,a,l):o(t,a))||l);return s>3&&l&&Object.defineProperty(t,a,l),l},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),img_pageobject_1=require("./img.pageobject"),page_label_util_1=require("./page-label.util"),AppNavbar=function(){function e(){this.homeLabel="Loading",this.toggleMessage="Loading",this.aboutLabel="Loading",this.blogLabel="Loading",this.projectsLabel="Loading",this.moviesLabel="Loading",this.carsLabel="Loading",this.videogamesLabel="Loading",this.fitnessLabel="Loading",this.creditsLabel="Loading",this.baseUrl="https://hobelinm.github.io",this.avatarUrl="Loading",this.siteName="Loading"}return e.prototype.ngOnInit=function(){this.initializeLabels()},e.prototype.redirectSubPage=function(e){location.href=this.baseUrl+"/"+e},e.prototype.initializeLabels=function(){this.toggleMessage="Toggle Navigation",this.siteName="Hugo Belin",this.avatarUrl="https://bit.ly/hugobelinpic",this.avatarImg=new img_pageobject_1.Img(30,30,this.siteName,this.avatarUrl),this.pageTitle=new page_label_util_1.PageLabel("",this.siteName),this.homeLabel="Home",this.aboutLabel="About",this.blogLabel="Blog",this.projectsLabel="Projects",this.moviesLabel="Movies",this.carsLabel="Cars",this.videogamesLabel="Videogames",this.fitnessLabel="Fitness",this.creditsLabel="Credits"},e=__decorate([core_1.Component({selector:"app-navbar",templateUrl:"html/header.html"}),__metadata("design:paramtypes",[])],e)}();exports.AppNavbar=AppNavbar;
