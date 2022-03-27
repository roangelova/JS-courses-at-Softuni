import {html} from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api/gamesService.js';
import { createSubmitHandler } from '../util.js';

const createViewTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
            <form @submit=${onSubmit} id="create">
                <div class="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title...">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category...">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Create Game">
                </div>
            </form>
        </section>
`;

export function renderCreate(ctx){

    ctx.render(createViewTemplate(createSubmitHandler(ctx,onSubmit)));

};

async function onSubmit(ctx,data, event){


    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!');
    }

    await create({
        title: data.title,
        category: data.category,
        maxLevel: data.maxLevel,
        imageUrl : data.imageUrl,
        summary: data.summary
    });

    event.target.reset();
    ctx.page.redirect('/');
}