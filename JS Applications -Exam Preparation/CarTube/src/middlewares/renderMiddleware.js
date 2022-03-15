import {render} from "../../node_modules/lit-html/lit-html.js";

const siteContentElement = document.getElementById('site-content');

export function renderMiddleware(ctx, next){
    ctx.render = (templateResult) => {
        render(templateResult, siteContentElement);
    }

    next();
};