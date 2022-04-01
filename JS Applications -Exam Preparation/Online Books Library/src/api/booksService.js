import * as api from './api.js';


const endpoints = {
    getAll: '/data/books?sortBy=_createdOn%20desc',
    getOne: '/data/books/',
    createBook: '/data/books',
    getMyBooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, 
    editBook: (bookId) => `/data/books/${bookId}`
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

export async function getMyBooks(id){
    return api.get(endpoints.getMyBooks(id));
}

export async function editBook(id, data){
    return api.put(endpoints.editBook(id), data);
}