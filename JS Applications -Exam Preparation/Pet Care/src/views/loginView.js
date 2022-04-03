import { html} from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/service.js';
import { createSubmitHandler } from '../util.js';

let viewTemplate = (loginUser) => html`
<section id="loginPage">
            <form @submit=${loginUser} class="loginForm">
                <img src="./images/logo.png" alt="logo" />
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



export function renderLoginView(ctx){


    ctx.render(viewTemplate(createSubmitHandler(ctx, loginUser)));
}

async function loginUser(ctx, data, e) {
    e.preventDefault();

    if (data.email == '' || data.password == '') {
        alert('Email and password are required!');
        return;
    }

    await login(data.email, data.password);

    ctx.page.redirect('/');
}