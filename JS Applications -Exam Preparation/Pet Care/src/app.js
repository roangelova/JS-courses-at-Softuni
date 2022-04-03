import page from '../node_modules/page/page.mjs';

//--IMPORTED FUNCTIONS & MIDDLEWARES--
import { logoutUser } from './api/service.js';
import { addRenderToContext } from './middlewares/renderMiddleware.js';
import { addSession } from './middlewares/sessionMiddleware.js';


//--VIEW IMPORTS--
import { renderCreateView } from './views/createView.js';
import { renderDashboardView } from './views/dashboardView.js';
import { renderDetailsView } from './views/detailsView.js';
import { renderEditView } from './views/editView.js';
import { renderHomepageView } from './views/homepageView.js';
import { renderLoginView } from './views/loginView.js';
import { renderRegisterView } from './views/registerView.js';

//--middlewares--
page(addSession);
page(addRenderToContext);

page('/', renderHomepageView);
page('/index.html', renderHomepageView);
page('/logout', Logout);
page('/create', renderCreateView);
page('/dashboard', renderDashboardView);
page('/details/:id', renderDetailsView);
page('/edit/:id', renderEditView);
page('/login', renderLoginView);
page('/register', renderRegisterView);


page.start();



function Logout(ctx){
    logoutUser();

    ctx.page.redirect('/');
}
