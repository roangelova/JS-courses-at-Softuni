import {render} from '../../node_modules/lit-html/lit-html.js';
import { html } from '../../node_modules/lit-html/lit-html.js';


const navigationTemplate = (user) => html`
  
            <nav>
                <a href="/">Theater</a>
                <ul>
                    ${user
                    ? html`<li><a href="/profile">Profile</a></li>
                    <li><a href="/create">Create Event</a></li>
                    <li><a href="/logout">Logout</a></li>`
                : html`  <li><a href="/login">Login</a></li>
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