import * as api from './api.js';
import { clearUserData, setUserData } from "../util.js";

const endpoints = {
    getAllPets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    createPet: '/data/pets',
    details: (id) => `/data/pets/${id}`,
    deletePet: (id) => `/data/pets/${id}`,
}

export async function getAllPets(){
    return api.get(endpoints.getAllPets);
}

export async function deleteCurrentPet(petId){
    return api.del(endpoints.deletePet(petId));
}

export async function editPetApi(petId, newData){
    return api.put(endpoints.deletePet(petId), newData);
}

export async function createAPet(pet){
    return api.post(endpoints.createPet, pet);
}

export async function getPetDetails(petID){
    return api.get(endpoints.details(petID));
}

export async function login(email, password) {
    const result = await api.post(endpoints.login, { email, password });

    setUserData(result);

    return result;
}

export async function register(email, password) {
    const result = await api.post(endpoints.register, { email, password });

    setUserData(result);

    return result;
}



export async function logoutUser() {
    api.get(endpoints.logout);
    clearUserData();
}
