
import { html ,nothing} from "../../node_modules/lit-html/lit-html.js";
import * as carService from '../services/carService.js';

const searchTemplate = (onChange, onSearch, cars = []) => html`
<section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year" @input=${onChange}}>
                <button class="button-list"  @click=${onSearch}>Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">
            ${cars.map(carTemplate)}
            
            ${cars.length == 0
        ? html`<p class="no-cars"> No results.</p>`
        : nothing} 
            </div>
        </section>
`;

export const renderSearch = (ctx) => {
    let current = '';

    const onSearchChange = (e) => {
        current = e.target.value;
    }

    const onSearchClick = (e)=>{
        let year = Number(current);

        carService.getByYear(year)
        .then(cars => {
            ctx.render(searchTemplate(onSearchChange, onSearchClick, cars))
        })
    }
    
    ctx.render(searchTemplate(onSearchChange, onSearchClick));

}
const carTemplate = (car) => html`          
<div class="listing">              
<div class="preview">                  
<img src=${car.imageUrl}>              
</div>              
<h2>${car.brand} ${car.model}</h2>              
<div class="info">                  
<div class="data-info">                      
<h3>Year: ${car.year}</h3>                      
<h3>Price: ${car.price} $</h3>                  
</div>                  
<div class="data-buttons">                      
<a href="/listing/${car._id}" class="button-carDetails">Details</a>       
</div>              
</div>          
</div>
`;