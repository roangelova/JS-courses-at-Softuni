import { html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as carService from '../services/carService.js';



export const renderDeleteCar = (ctx) => {

   let confirmation= confirm('Are you sure you want to delete this car?');

   if (confirmation) {
       carService.deleteCar(ctx.params.carId)
    .then(() => ctx.page.redirect('/listing'));
   }
    
}