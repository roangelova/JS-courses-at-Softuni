import { render, html , nothing} from '../../node_modules/lit-html/lit-html.js';
import { deleteEvent, getDetails } from '../api/service.js';


let viewTemplate = (event, IsEventOwner, onDelete) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${event.title}</h1>
            <div>
                <img src=${event.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${event.description}</p>
            <h4>Date: ${event.date}</h4>
            <h4>Author: ${event.author}</h4>

            ${IsEventOwner
            ? html` <div class="buttons">
                <a @click=${onDelete} class="btn-delete"  href="#">Delete</a>
                <a class="btn-edit" href="/edit/${event._id}">Edit</a>
                <a class="btn-like" href="#">Like</a>
            </div>`
        : nothing}
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>

`;





//make function async upon dynamic edxport

//rename function upon creating the next view
export async function renderDetailsView(ctx) {

    let eventId = ctx.params.id;
    let event = await getDetails(eventId);

    let IsEventOwner = false;

    if (ctx.user && event._ownerId == ctx.user._id) {
        IsEventOwner = true;
    }

    

    ctx.render(viewTemplate(event, IsEventOwner, onDelete));


    async function onDelete() {

        let choice = confirm('Are you sure you want to delete this game');
        if (choice) {
            console.log(eventId);
            await deleteEvent(eventId);
            ctx.page.redirect('/profile');
        }
        else{return;}
    }
}