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
var AssetMan = (function () {
    function AssetMan() {
    }
    AssetMan.prototype.getAssetString = function (name) {
        var label;
        switch (name) {
            case 'HomeLabel':
                label = 'Home';
                break;
            case 'ToggleNavigationLabel':
                label = 'Toggle Navigation';
                break;
            case 'AboutLabel':
                label = 'About';
                break;
            case 'CreditsLabel':
                label = 'Credits';
                break;
            case 'SectionLabel':
                label = 'Section';
                break;
            case 'CopyrightLabel':
                label = 'Copyright';
                break;
            case 'PageviewsLabel':
                label = "Pageviews:";
                break;
            case 'VisitorsLabel':
                label = 'Visitors:';
                break;
            case 'MyViewsLabel':
                label = 'My Views:';
                break;
            case 'VersionLabel':
                label = 'Version';
                break;
            case 'VersionNumber':
                label = '0.1.5.1';
                break;
            default:
                label = "NotFound";
        }
        return Promise.resolve(label);
    };
    AssetMan = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AssetMan);
    return AssetMan;
}());
exports.AssetMan = AssetMan;
