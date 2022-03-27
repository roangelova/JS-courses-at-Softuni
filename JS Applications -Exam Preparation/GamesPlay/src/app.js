import page from '../node_modules/page/page.mjs';

import { addRenderToContext } from './middlewares/renderMiddleware.js';
import { renderCatalog } from './views/catalogView.js';
import { renderCreate } from './views/createView.js';
import { renderDetails } from './views/detailsView.js';
import { renderEdit } from './views/editView.js';
import { renderHomepage } from './views/homeView.js';
import { renderLogin } from './views/loginView.js';
import { renderRegister } from './views/registerView.js';

import {logoutUser} from './api/userService.js';
import { addSession } from './middlewares/sessionMiddleware.js';

//global middlewares
page(addSession);
page(addRenderToContext);

//views
page('/index.html', renderHomepage);
page('/', renderHomepage);
page('/login', renderLogin);
page('/register', renderRegister);
page('/catalog', renderCatalog);
page('/create', renderCreate);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);
page('/logout', Logout)

page.start();

function Logout(ctx){
    logoutUser();

    ctx.page.redirect('/');
}