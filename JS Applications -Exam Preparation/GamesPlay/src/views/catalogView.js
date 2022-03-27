import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/gamesService.js';



const catalogViewTemplagte = (allGames) => html`
<section id="catalog-page">
    <h1>All Games</h1>

    ${allGames.length == 0 
    ? html`<h3 class="no-articles">No articles yet</h3>`
: allGames.map(gameTemplate)}
    
</section>
        `;

let gameTemplate = (game) => html`
  <div class="allGames">
        <div class="allGames-info">
            <img src=${game.imageUrl}>
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>
`;

export async function renderCatalog(ctx) {

    let allGames = await getAll();

    ctx.render(catalogViewTemplagte(allGames));

};