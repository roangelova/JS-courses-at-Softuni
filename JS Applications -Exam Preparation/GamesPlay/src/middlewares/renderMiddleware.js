import {render} from '../../node_modules/lit-html/lit-html.js';

let root = document.getElementById('main-content');

export function addRenderToContext(ctx, next){

    ctx.render = (content) =>  render(content, root);

    next();
}