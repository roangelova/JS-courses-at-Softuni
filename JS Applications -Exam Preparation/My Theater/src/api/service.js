import * as api from './api.js';
import { clearUserData, setUserData } from "../util.js";

const links = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    createEvent: '/data/theaters', 
    details: '/data/theaters/', 
    getOwnEvents: (id) => `/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,

}

//editBook: (bookId) => `/data/books/${bookId}`

//export async function editGame(id, data){
//    return api.put(endpoints.getById + id, data);
//}


export async function login(email, password) {
    const result = await api.post(links.login, { email, password });

    setUserData(result);

    return result;
}

export async function register(email, password) {
    const result = await api.post(links.register, { email, password });

    setUserData(result);

    return result;
}

export async function logoutUser() {
    api.get(links.logout);
    clearUserData();
}

export async function getAllEvents(){
  return  api.get(links.getAll);
}

export async function createAnEvent(data){
    return  api.post(links.createEvent, data);
  }


export async function getDetails(id){
   return api.get(links.details + id);
}

export async function deleteEvent(id){
    return api.del(links.details + id);
 }

 export async function getOwnEvents(id){
    return api.get(links.getOwnEvents(id));
 }

 export async function editEvent(id, data){
    return api.put(links.details + id, data);
 }

