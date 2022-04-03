import {render} from '../../node_modules/lit-html/lit-html.js';
import { html } from '../../node_modules/lit-html/lit-html.js';


const navigationTemplate = (user) => html`
   <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <!--Only Guest-->
                ${user?
                html`<li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>`
            : html`<li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`}
            </ul>
        </nav>

`;

let navHeader = document.querySelector('header');

let rootElement = document.getElementById('content');

export function addRenderToContext(ctx, next){

    render(navigationTemplate(ctx.user), navHeader);

    ctx.render = (content) =>  render(content, rootElement);

    next();
}