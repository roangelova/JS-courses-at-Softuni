import * as authService from '../services/authService.js';

function request(method, url, data) {
    let options = {};

    let user = authService.getUser();
    console.log(user);

    if (method != 'GET') {
        options = {
            method, 
            headers: {'Content-Type' : 'application/json'},
         body: JSON.stringify(data)
        };
    }
    if (user) {
        options.headers = {
            ...(options.headers),
            'X-Authorization': user.accessToken
        }
    };

    return fetch(url, options)
    .then(res => {
        if (res.url.endsWith('logout')) {
            return res;
        }
         return res.json()
    });
    
}

export const get = request.bind(null, 'GET'); 
export const post = request.bind(null, 'POST'); 
export const put = request.bind(null, 'PUT'); 
export const del = request.bind(null, 'DELETE'); 