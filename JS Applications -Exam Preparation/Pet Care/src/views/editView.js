import { html} from '../../node_modules/lit-html/lit-html.js';
import { editPetApi, getPetDetails } from '../api/service.js';
import { createSubmitHandler } from '../util.js';

let viewTemplate = (pet, editPet) => html`
<section id="editPage">
            <form @submit=${editPet} class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value=${pet.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value=${pet.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value=${pet.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value=${pet.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value=${pet.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>

`;


export async function renderEditView(ctx){

    //populate form
    let petId = ctx.params.id;
    let pet = await getPetDetails(petId);

    ctx.render(viewTemplate(pet, createSubmitHandler(ctx, editPet)));
}

async function editPet(ctx,data, event){
    let petId = ctx.params.id;

    if(Object.values(data).some(x => x == '')){
        alert('All fields are required!');
        return;
    }

    await editPetApi(petId, {
        name: data.name,
        breed: data.breed,
        age: data.age,
        weight: data.weight,
        image: data.image
    });

    ctx.page.redirect('/details/' + petId);
}
