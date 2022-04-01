import {render, html} from '../../node_modules/lit-html/lit-html.js';
import { editEvent, getDetails } from '../api/service.js';
import { createSubmitHandler } from '../util.js';


let viewTemplate = (event, onSubmit) => html`
<section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${event.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${event.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        .value=${event.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${event.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        .value=${event.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>

`;




//make function async upon dynamic edxport

//rename function upon creating the next view!!!
export async function renderEditView(ctx){

    let eventId = ctx.params.id;
    console.log(eventId);
    console.log(ctx);
    let event = await getDetails(eventId);

    ctx.render(viewTemplate(event, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx,data, e){
    let eventId = ctx.params.id;

    e.preventDefault();

    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!');
    }

    await editEvent(eventId, {
        title: data.title,
        date: data.date,
        author: data.author,
        imageUrl : data.imageUrl,
        description: data.description
    });

    ctx.page.redirect('/details/' + eventId);
}