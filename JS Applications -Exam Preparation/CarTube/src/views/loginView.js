import {html} from "../../node_modules/lit-html/lit-html.js";

import * as authService from '../services/authService.js';


const loginTemplate = (onSubmit)=> html`
<section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit = ${onSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export function renderLogin(ctx){
    const onSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData(e.currentTarget);

        let username = formdata.get('username');
        let password = formdata.get('password');

        authService.login(username,password)
        .then(() => {
            ctx.page.redirect('/')
        });
    };

    ctx.render(loginTemplate(onSubmit));
};