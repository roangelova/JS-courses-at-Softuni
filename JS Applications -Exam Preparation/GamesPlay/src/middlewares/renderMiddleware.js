import {render} from '../../node_modules/lit-html/lit-html.js';
import { html } from '../../node_modules/lit-html/lit-html.js';


const navigationTemplate = (user) => html`
 <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                ${user ?
                html` <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>`
            :html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
                
            </nav>
`;

let navHeader = document.getElementById('navHeader');
let root = document.getElementById('main-content');

export function addRenderToContext(ctx, next){

    render(navigationTemplate(ctx.user), navHeader);
    ctx.render = (content) =>  render(content, root);

    next();
}