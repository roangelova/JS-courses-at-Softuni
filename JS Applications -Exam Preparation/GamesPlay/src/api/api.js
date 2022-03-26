import { clearUserData, getAccessToken } from '../util.js';

const host = 'http://localhost:3030';

async function request(method, url, data) {


  const options = {
    method,
    headers: {}
  };

  const token = getAccessToken();
  if (token) {
    options.headers['X-Authorization'] = token;
  }

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        clearUserData();
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }

  } catch (err) {
    alert(err.message);
    throw err;
  }

}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');

//export async function login(email, password) {
//  const result = await post('/users/login', { email, password });
//
//  const userData = {
//    email: result.email,
//    id: result._id,
//    token: result.accessToken
//  };
//
//  setUserData(userData);
//}
//
//export async function register(email, password) {
//  const result = await post('/users/register', { email, password });
//
//  const userData = {
//    email: result.email,
//    id: result._id,
//    token: result.accessToken
//  };
//
//  setUserData(userData);
//
//}
//
//export async function logout() {
//  await get('/users/logout');
//  clearUserData();
//}