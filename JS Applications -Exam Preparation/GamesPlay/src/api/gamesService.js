import * as api from './api.js';


const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    getById: '/data/games/'
}


export async function getRecentGames(){
    return api.get(endpoints.recent);
}

export async function getAll(){
    return api.get(endpoints.getAll);
}

export async function getOne(id){
    return api.get(endpoints.getById+ id);
}

export async function create(data){
    return api.post(endpoints.create, data);
}

export async function deleteGame(id){
    return api.del(endpoints.getById + id);
}

export async function editGame(id, data){
    return api.put(endpoints.getById + id, data);
}