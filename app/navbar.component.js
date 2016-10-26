"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var asset_manager_service_1 = require('./asset-manager.service');
var AppNavbar = (function () {
    function AppNavbar(assetMan) {
        this.assetMan = assetMan;
        this.homeLabel = 'Loading';
        this.toggleMessage = 'Loading';
        this.aboutLabel = 'Loading';
        this.creditsLabel = 'Loading';
        this.sectionLabel = 'Loading';
    }
    AppNavbar.prototype.ngOnInit = function () {
        this.initializeLabels();
    };
    AppNavbar.prototype.initializeLabels = function () {
        var _this = this;
        this.assetMan.getAssetString('ToggleNavigationLabel').then(function (toggleNavigation) { return _this.toggleMessage = toggleNavigation; });
        this.assetMan.getAssetString('HomeLabel').then(function (homeLabel) { return _this.homeLabel = homeLabel; });
        this.assetMan.getAssetString('AboutLabel').then(function (aboutLabel) { return _this.aboutLabel = aboutLabel; });
        this.assetMan.getAssetString('CreditsLabel').then(function (credits) { return _this.creditsLabel = credits; });
        this.assetMan.getAssetString('SectionLabel').then(function (section) { return _this.sectionLabel = section; });
    };
    AppNavbar = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: 'html/header.html',
            providers: [asset_manager_service_1.AssetMan]
        }), 
        __metadata('design:paramtypes', [asset_manager_service_1.AssetMan])
    ], AppNavbar);
    return AppNavbar;
}());
exports.AppNavbar = AppNavbar;
