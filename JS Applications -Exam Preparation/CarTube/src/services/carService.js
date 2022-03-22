import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () =>{
 return request.get(`${api.cars}?sortBy=_createdOn%20desc`);
};