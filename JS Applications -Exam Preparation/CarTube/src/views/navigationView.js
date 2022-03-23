import {html} from "../../node_modules/lit-html/lit-html.js";

const guestUserNavigation = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

const loggedUserNavigation = (user) => html`
<div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/listings/myListings">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="/logout">Logout</a>
</div>
`;

const navigationTemplate = (user) => html`
<nav>
<a class="active" href="/">Home</a>
<a href="/listing">All Listings</a>
<a href="/search">By Year</a>

${user
    ? loggedUserNavigation(user)
    : guestUserNavigation()}
</nav>
`;

export const renderNavigation = ({user}) => {

    return navigationTemplate(user);
}