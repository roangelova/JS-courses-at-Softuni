import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () => {
    return request.get(`${api.cars}?sortBy=_createdOn%20desc`);
};

export const createCar = (car) =>{
   return request.post(api.cars, car)
} ;

export const get0ne = (id) =>{
    return request.get(`${api.cars}/${id}`)
 } ;

 export const update = (id, car) =>{
    return request.put(`${api.cars}/${id}`, car);
 } ;

 export const deleteCar = (id) =>{
    return request.del(`${api.cars}/${id}`);
 } ;

 export const getOwnListings = (userId) =>{
    return request.get(`${api.cars}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
 } ;

 export const getByYear = (year) =>{
    return request.get(`${api.cars}?where=year%3D${year}`);
 } ;
