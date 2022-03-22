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

export const register = (username, password) => {
    return request.post(api.register, { username, password })
        .then(user => {
            saveUser(user);
            return user
        });

};

function saveUser(data) {
    localStorage.setItem(user_key, JSON.stringify(data));
}

export function getUser() {
    try {
        let user = localStorage.getItem(user_key);

        if (user) {
            return JSON.parse(user);
        }
    } catch (error) {
        return undefined;
    }



};

export const logout = () => {
    return request.get(api.logout)
    .finally(() => {
        localStorage.removeItem(user_key)
    })
};