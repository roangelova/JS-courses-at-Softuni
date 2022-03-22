import {html} from "../../node_modules/lit-html/lit-html.js";

import * as authService from '../services/authService.js';

export function renderLogout(ctx){
    authService.logout()
    .finally(() => {
        ctx.page.redirect('/')})
};