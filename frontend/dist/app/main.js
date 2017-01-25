//import * as path from 'path';
"use strict";
//require('app-module-path').addPath(path.resolve(__dirname, '..'));
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//noinspection TypeScriptCheckImport
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
