import * as api from './api.js';


const endpoints = {
    getAll: '/data/books?sortBy=_createdOn%20desc',
    getOne: '/data/books/',
    createBook: '/data/books',
}

export async function getAllBooks(){
    return api.get(endpoints.getAll);
}

export async function getOneBook(id){
    return api.get(endpoints.getOne + id);
}

export async function createBook(data){
    return api.post(endpoints.createBook, data);
}

export async function deleteBook(id){
    return api.del(endpoints.getOne + id);
}