import {html} from '../node_modules/lit-html/lit-html.js';
import { editBook, getOneBook } from '../src/api/booksService.js';
import { createSubmitHandler } from '../src/util.js';

const editTemplate = (book, onSubmit) => html`
 <!-- Edit Page ( Only for the creator )-->
 <section id="edit-page" class="edit">
            <form @submit=${onSubmit} id="edit-form">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value=${book.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${book.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${book.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>

`;



export async function renderEdit(ctx){

    let currentBookId = ctx.params.id;
    let bookToEditData = await getOneBook(currentBookId);

   ctx.render(editTemplate(bookToEditData, createSubmitHandler(ctx, onSubmit)));

};

async function onSubmit(ctx,data, event){
    let currentBookId = ctx.params.id;

    event.preventDefault();

    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!');
    }

    await editBook(currentBookId, {
        title: data.title,
        description: data.description,
        imageUrl : data.imageUrl,
        type: data.type
    });

    event.target.reset();
    ctx.page.redirect('/details/' + currentBookId);
}