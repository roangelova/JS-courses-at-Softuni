import {html, render} from '../node_modules/lit-html/lit-html.js';

let loadBtn = document.getElementById('btnLoadTowns');
let root = document.getElementById('root');

const liTemplate = (data) => html`
<ul>
${data.map( town => html`<li>${town}</li>`)}
</ul>
`;

loadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let towns = document.getElementById('towns').value.split(', ');
    let result = liTemplate(towns);
    render(result, root);

    document.getElementById('towns').value = '';
});

