import page from '../node_modules/page/page.mjs';
import {  renderCreate } from '../views/create.js';
import { renderHomepage } from '../views/dashboard.js';
import { renderDetails } from '../views/details.js';
import { renderLogin } from '../views/login.js';
import { renderMyBooks } from '../views/myBooks.js';
import { renderRegister } from '../views/register.js';
import { logoutUser } from './api/userService.js';
import { addRenderToContext } from './middlewares/renderMiddleware.js';
import { addSession } from './middlewares/sessionMiddleware.js';
import {renderEdit} from '../views/edit.js';

//middlewares
page(addSession);
page(addRenderToContext);


//view imports
page('/index.html', renderHomepage);
page('/', renderHomepage);
page('/login', renderLogin);
page('/register', renderRegister);
page('/create', renderCreate);
page('/mybooks', renderMyBooks);
page('/logout', Logout);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);
//page links


page.start();


function Logout(ctx){
    logoutUser();

    ctx.page.redirect('/');
}