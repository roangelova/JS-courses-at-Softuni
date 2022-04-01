import {html} from '../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../src/api/booksService.js';

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>

            ${books.length > 0 ?
            html ` <ul class="my-books-list">
                
               ${books.map(singleBookTemplate)}
            </ul>`
        : html` <p class="no-books">No books in database!</p>`}
        </section>

`;

let singleBookTemplate = (book) => html`
<li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>
`;

export async function renderMyBooks(ctx){

    let userId = ctx.user._id;
    let myBooks = await getMyBooks(userId);
    
    console.log(myBooks);

    ctx.render(myBooksTemplate(myBooks));

};