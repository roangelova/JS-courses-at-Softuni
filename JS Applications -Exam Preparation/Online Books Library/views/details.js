import {html, nothing} from '../node_modules/lit-html/lit-html.js';
import { deleteBook, getOneBook } from '../src/api/booksService.js';

const detailsViewTemplate = (book, isOwner, onDelete) => html`
<section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->

                    ${isOwner?
                    html`<div class="actions"><a class="button" href="/edit/${book._id}">Edit</a>
                    <a  @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
                    `: nothing}
                    

                    
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <!-- BONUS!! <a class="button" href="#">Like</a>-->

                    <!-- ( for Guests and Users )  -->
                   <!-- <div class="likes">-->
                       <!-- <img class="hearts" src="/images/heart.png">-->
                       <!-- <span id="total-likes">Likes: 0</span>-->
                   <!-- </div>-->
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;

export async function renderDetails(ctx){

    let booksId = ctx.params.id;

    let currentBook = await getOneBook(booksId);

    let isOwner = false;
    if (ctx.user && currentBook._ownerId == ctx.user._id) {
        
        isOwner = true;
    }

    ctx.render(detailsViewTemplate(currentBook, isOwner, onDelete));
   

    async function onDelete(){

        let choice = confirm('Are you sure you want to delete this game');
        if (choice) {
        await deleteBook(currentBook._id);
        ctx.page.redirect('/');
        }
    }
}; 
