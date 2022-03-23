import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';

import {navigationMiddleware} from './middlewares/navigationMiddleware.js';
import {renderMiddleware} from  './middlewares/renderMiddleware.js';
import { renderCreateCar } from './views/createView.js';
import { renderDeleteCar } from './views/deleteCarView.js';
import { renderCarDetails } from './views/detailsView.js';
import { renderEditCar } from './views/editView.js';
import { renderHome } from './views/homeView.js';
import { renderSearch } from './views/searchView.js';
import { renderListing } from './views/listingView.js';

import {renderLogin} from './views/loginView.js';
import { renderLogout } from './views/logoutview.js';
import { renderMyListings } from './views/myListingView.js';
import { renderRegister } from './views/registerView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome);
page('/index.html', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/listing', renderListing);
page('/logout', renderLogout);
page('/create', renderCreateCar);
page('/listing/:carId', renderCarDetails);
page('/listing/:carId/edit', renderEditCar);
page('/listing/:carId/delete', renderDeleteCar);
page('/listings/myListings', renderMyListings);
page('/search', renderSearch);

page.start();