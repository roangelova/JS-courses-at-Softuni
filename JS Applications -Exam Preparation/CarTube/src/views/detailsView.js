import { html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as carService from '../services/carService.js';

const detailsTemplate = (car, isOwner) => html`
<section id="listing-details">
<h1>Details</h1>
<div class="details-info">
    <img src=${car.imageUrl}>
    <hr>
    <ul class="listing-props">
        <li><span>Brand:</span>${car.brand}</li>
        <li><span>Model:</span>${car.model}</li>
        <li><span>Year:</span>${car.year}</li>
        <li><span>Price:</span>${car.price}$</li>
    </ul>

    <p class="description-para">${car.description}</p>

    <div class="listings-buttons">
    ${isOwner
    ? html` <a href="/listing/${car._id}/edit" class="button-list">Edit</a>
    <a href="/listing/${car._id}/delete" class="button-list">Delete</a>`
: nothing}
        
    </div>
</div>
</section>
`;

export const renderCarDetails = (ctx) => {

    let isOwner = false;

    carService.get0ne(ctx.params.carId)
        .then(car => {

            if (ctx.user && car._ownerId == ctx.user._id) {
                isOwner = true;
            }

            ctx.render(detailsTemplate(car, isOwner))
        });
};