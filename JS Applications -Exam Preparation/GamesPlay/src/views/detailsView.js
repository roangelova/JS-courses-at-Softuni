import {html} from '../../node_modules/lit-html/lit-html.js';

const detailsViewTemplate = () => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="images/MineCraft.png" />
                    <h1>Bright</h1>
                    <span class="levels">MaxLevel: 4</span>
                    <p class="type">Action, Crime, Fantasy</p>
                </div>

                <p class="text">
                    Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                    with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                    creatures live side by side with humans. A human cop is forced
                    to work with an Orc to find a weapon everyone is prepared to kill for.
                </p>

              
                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div class="buttons">
                    <a href="#" class="button">Edit</a>
                    <a href="#" class="button">Delete</a>
                </div>
            </div>

            
        </section>
`;

export function renderDetails(ctx){

    ctx.render(detailsViewTemplate());

};