import {html} from '../node_modules/lit-html/lit-html.js';
import { login } from '../src/api/userService.js';
import { createSubmitHandler } from '../src/util.js';

const loginViewTemplate = (OnSubmit) => html`
<section id="login-page" class="login">
            <form @submit=${OnSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`;

export function renderLogin(ctx){

    ctx.render(loginViewTemplate(createSubmitHandler(ctx, onSubmit)));
   
}; 

async function onSubmit(ctx, data, e) {

        //1-send request
        await login(data.email, data.password);
        //2-reset from upon login
        e.target.reset();
        //3-redirect to home
        ctx.page.redirect('/');
    }