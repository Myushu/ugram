//import * as path from 'path';

//require('app-module-path').addPath(path.resolve(__dirname, '..'));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//noinspection TypeScriptCheckImport
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);