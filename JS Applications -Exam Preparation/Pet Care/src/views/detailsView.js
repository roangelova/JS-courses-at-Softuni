import { html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { deleteCurrentPet, getPetDetails } from '../api/service.js';
import { getUserData } from '../util.js';

let viewTemplate = (pet, isOwner, user, deletePetFunc) => html`

 <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${pet.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    ${user?
                    html` <div class="actionBtn">
                        ${isOwner ?
                        html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a @click=${deletePetFunc} href="#" class="remove">Delete</a>` :
                        html`<a  href="#" class="donate">Donate</a>`}
                        
                    </div>`
                : nothing}

                   
                </div>
            </div>
        </section>
`;


export async function renderDetailsView(ctx){

    let petId = ctx.params.id;

    console.log(petId);

    let pet = await getPetDetails(petId);

    let isOwner = false;

    if (ctx.user && pet._ownerId == ctx.user._id) {
        
        isOwner = true;
    }

    let user = getUserData();


    ctx.render(viewTemplate(pet, isOwner, user, deletePetFunc));
    
    async function deletePetFunc(e){

        e.preventDefault();
        let choice = confirm('Are you sure you want to delete this pet?');
        if (choice) {
        await deleteCurrentPet(petId);
        ctx.page.redirect('/');
        }
    }
}

