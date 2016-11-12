//используем браузер для динамической компиляции
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HelloAngularAppModule } from './app.module'

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);