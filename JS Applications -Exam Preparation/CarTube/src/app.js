import page from '../node_modules/page/page.mjs';

import {navigationMiddleware} from './middlewares/navigationMiddleware.js';
import {renderMiddleware} from  './middlewares/renderMiddleware.js';

import {renderLogin} from './views/loginView.js';
import { renderRegister } from './views/registerView.js';

page(navigationMiddleware);
page(renderMiddleware);

page('/', () => console.log('loaded'));
page('/login', renderLogin);
page('/register', renderRegister);

page.start();