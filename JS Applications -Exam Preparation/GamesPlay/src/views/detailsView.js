import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { deleteGame, getOne } from '../api/gamesService.js';

const detailsViewTemplate = (game, isOwner, onDelete) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                   ${game.summary}
                </p>

              ${isOwner
            ? html`<div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>`
        : nothing}
                
            </div>

            
        </section>
`;

export async function renderDetails(ctx){

    let game =  await getOne(ctx.params.id);

    let isOwner = false;
    if (ctx.user && game._ownerId == ctx.user._id) {
        isOwner = true;
    }

    ctx.render(detailsViewTemplate(game, isOwner, onDelete));

    async function onDelete(){

        let choice = confirm('Are you sure you want to delete this game');
        if (choice) {
        await deleteGame(game._id);
        ctx.page.redirect('/');
        }
    }

};