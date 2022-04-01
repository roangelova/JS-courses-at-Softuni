import page from '../node_modules/page/page.mjs';

//--IMPORTED FUNCTIONS--
import { logoutUser } from './api/service.js';
import { addRenderToContext } from './middlewares/renderMiddleware.js';
import { addSession } from './middlewares/sessionMiddleware.js';


//--VIEWS--
import { renderCreateView } from './views/createView.js';
import { renderDetailsView } from './views/detailsView.js';
import { renderEditView } from './views/editView.js';
import { renderHomepage } from './views/homeView.js';
import { renderLoginView } from './views/loginView.js';
import { renderProfileView } from './views/profileView.js';
import { renderRegisterView } from './views/registerView.js';

console.log('app loaded successfully');

//--middlewares--
page(addSession);
page(addRenderToContext);


page('/', renderHomepage);
page('index.html', renderHomepage);
page('/login', renderLoginView);
page('/register', renderRegisterView);
page('/create', renderCreateView);
page('/profile', renderProfileView);
page('/details/:id', renderDetailsView);
page('/edit/:id', renderEditView); 
page('/logout', Logout)


page.start();



function Logout(ctx){
    logoutUser();

    ctx.page.redirect('/');
}
