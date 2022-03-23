import { html } from "../../node_modules/lit-html/lit-html.js";
import { checkCarForm } from "../helpers.js";
import * as carService from '../services/carService.js';


const editTemplate = (car, onSubmit) => html`
<section id="edit-listing">
<div class="container">

    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

        <hr>
        <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
</div>
</section>
`;

export const renderEditCar = (ctx) => {

    const onSubmit = (e)=> {
        e.preventDefault();

        let carData= Object.fromEntries(new FormData(e.target));

        if(!checkCarForm(carData)){
            alert('All fields must be filled!');
            
            return;
        }

        carService.update(ctx.params.carId, carData)
        .then(() => {
            ctx.page.redirect(`/listing/${ctx.params.carId}`)
        });

    };

    carService.get0ne(ctx.params.carId)
    .then(car => {
        ctx.render(editTemplate(car,onSubmit))
    });

};