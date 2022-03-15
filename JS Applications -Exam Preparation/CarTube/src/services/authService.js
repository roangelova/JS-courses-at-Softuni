import * as api from './api.js';
import * as request from './requester.js';

const user_key = 'user';

export const login = (username, password) => {
    return request.post(api.login, { username, password })
        .then(user => {
            saveUser(user);
            return user
        });


};

function saveUser(data) {
    localStorage.setItem(user_key, JSON.stringify(data));
}

function getUser(){
    let user = localStorage.getItem(user_key);

    if (user) {
       return JSON.parse(user);
    }

    return {};
}