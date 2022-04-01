import {render, html} from '../../node_modules/lit-html/lit-html.js';
import { getOwnEvents } from '../api/service.js';
import { getUserData } from '../util.js';


let viewTemplate = (user, events) => html`
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            ${events.length == 0
            ? html` <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>` :
            html` <div class="board">
               ${events.map(singleEventTemplate)}
            </div>`}
           
        </section>

`;

let singleEventTemplate = (e) => html`
<div class="eventBoard">
                    <div class="event-info">
                        <img src=${e.imageUrl}>
                        <h2>${e.title}</h2>
                        <h6>${e.date}</h6>
                        <a href="/details/${e._id}" class="details-button">Details</a>
                    </div>
                </div>
`;



//make function async upon dynamic edxport

//rename function upon creating the next view
export async function renderProfileView(ctx){

    let user = getUserData();

    let userEvents = await getOwnEvents(user._id);


    ctx.render(viewTemplate(user, userEvents));
}