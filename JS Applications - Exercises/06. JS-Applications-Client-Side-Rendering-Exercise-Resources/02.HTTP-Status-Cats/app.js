import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';

const allCats = document.getElementById('allCats');

const cardTemplate = (data) => html`
<ul>
${data.map(cat => html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
                     <div class="status" style=${styleMap(cat.info ? {display:'block'} : {display:'none'})} id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`
)}
</ul>
`;

cats.forEach(cat => cat.info = false);
update();

function update() {
    const result = cardTemplate(cats);
    render(result, allCats);
}



function toggle(e) {
const elementId = even.target.parentNode.querySelector('.status').id;
const cat = cats.find(x => x.id == elementId);
cat.info = !cat.info;
update();
}