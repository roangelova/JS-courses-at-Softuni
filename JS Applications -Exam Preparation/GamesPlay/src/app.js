import page from '../node_modules/page/page.mjs';

import { addRenderToContext } from './middlewares/renderMiddleware.js';
import { renderCatalog } from './views/catalogView.js';
import { rendeCreate } from './views/createView.js';
import { renderDetails } from './views/detailsView.js';
import { renderEdit } from './views/editView.js';
import { renderHomepage } from './views/homeView.js';
import { renderLogin } from './views/loginView.js';
import { renderRegister } from './views/registerView.js';


//global middlewares
page(addRenderToContext);

//views
page('/', renderHomepage);
page('/login', renderLogin);
page('/register', renderRegister);
page('/catalog', renderCatalog);
page('/create', rendeCreate);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);

page.start();

