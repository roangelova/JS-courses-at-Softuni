import {html} from '../node_modules/lit-html/lit-html.js';
import { register } from '../src/api/userService.js';
import { createSubmitHandler } from '../src/util.js';

const registerViewTemplate = (onSubmit) => html`
  <section id="register-page" class="register">
            <form @submit=${onSubmit} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>


`;

export function renderRegister(ctx){
    ctx.render(registerViewTemplate(createSubmitHandler(ctx, onSubmit)));

};

async function onSubmit(ctx, data, e) {

    if (data.email == '' || data.password == '' || data['confirm-pass' == '']) {
        return alert('All fields are required!');
    }

    if (data.password != data['confirm-pass']) {
        return alert('Passwords must match!');
    }

    await register(data.email, data.password);

    e.target.reset();
    ctx.page.redirect('/');
}