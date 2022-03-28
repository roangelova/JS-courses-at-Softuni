import {render} from '../../node_modules/lit-html/lit-html.js';
import { html } from '../../node_modules/lit-html/lit-html.js';


const navigationTemplate = (user) => html`
  <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>

                    ${user
                    ? html`<div id="user">
                        <span>Welcome, ${user.email}</span>
                        <a class="button" href="/mybooks">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div> `
                : html `<div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div> `}
                   
                </section>
            </nav>
`;

let navHeader = document.getElementById('site-header');
let root = document.getElementById('content');

export function addRenderToContext(ctx, next){

    render(navigationTemplate(ctx.user), navHeader);
    ctx.render = (content) =>  render(content, root);

    next();
}