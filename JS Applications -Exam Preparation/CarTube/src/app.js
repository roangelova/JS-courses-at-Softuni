import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';

import {navigationMiddleware} from './middlewares/navigationMiddleware.js';
import {renderMiddleware} from  './middlewares/renderMiddleware.js';
import { renderCreateCar } from './views/createView.js';
import { renderHome } from './views/homeView.js';
import { renderListing } from './views/listingView.js';

import {renderLogin} from './views/loginView.js';
import { renderLogout } from './views/logoutview.js';
import { renderRegister } from './views/registerView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/listing', renderListing);
page('/logout', renderLogout);
page('/create', renderCreateCar);


page.start();