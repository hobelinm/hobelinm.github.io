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
var AppFooter = (function () {
    function AppFooter(assetMan) {
        this.assetMan = assetMan;
        this.copyrightLabel = 'Loading';
        this.pageviewsLabel = 'Loading';
        this.visitorsLabel = 'Loading';
        this.myviewsLabel = 'Loading';
        this.versionLabel = 'Loading';
        this.version = 'Loading';
    }
    AppFooter.prototype.ngOnInit = function () {
        this.initializeLabels();
    };
    AppFooter.prototype.initializeLabels = function () {
        var _this = this;
        this.assetMan.getAssetString('CopyrightLabel').then(function (copyright) { return _this.copyrightLabel = copyright; });
        this.assetMan.getAssetString('PageviewsLabel').then(function (pageviews) { return _this.pageviewsLabel = pageviews; });
        this.assetMan.getAssetString('VisitorsLabel').then(function (visitors) { return _this.visitorsLabel = visitors; });
        this.assetMan.getAssetString('MyViewsLabel').then(function (myViews) { return _this.myviewsLabel = myViews; });
        this.assetMan.getAssetString('VersionLabel').then(function (version) { return _this.versionLabel = version; });
        this.assetMan.getAssetString('VersionNumber').then(function (version) { return _this.version = version; });
    };
    AppFooter = __decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: 'html/footer.html',
            providers: [asset_manager_service_1.AssetMan]
        }), 
        __metadata('design:paramtypes', [asset_manager_service_1.AssetMan])
    ], AppFooter);
    return AppFooter;
}());
exports.AppFooter = AppFooter;
