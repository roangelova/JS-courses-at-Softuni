import * as api from './api.js';


const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
}


export async function getRecentGames(){
    return api.get(endpoints.recent);
}

export async function getAll(){
    return api.get(endpoints.getAll);
}