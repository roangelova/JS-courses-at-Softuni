import {render, html} from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../util.js';
import {login} from '../api/service.js';

let viewTemplate = (loginFunc) => html`
<section id="loginaPage">
            <form @submit=${loginFunc}class="loginForm">
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
`;





//make function async upon dynamic edxport

//rename function upon creating the next view
export function renderLoginView(ctx){



    ctx.render(viewTemplate(createSubmitHandler(ctx, loginFunc)));
}

async function loginFunc(ctx, data, e) {
    e.preventDefault();

    if (data.email == '' || data.password == '') {
        alert('Please fill in the fileds');
        return;
    }

    await login(data.email, data.password);

    ctx.page.redirect('/');
}