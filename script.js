import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const baseURL = 'http://localhost:3000';
  const registerParams = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const user = {
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'password123'
  };

  const loginPayload = {
    username: user.username,
    password: user.password
  };

  const updatePayload = {
    email: 'updatedemail@example.com'
  };

  const token = {};

  registerUser(user, registerParams, baseURL);
  sleep(3);

  loginUser(loginPayload, registerParams, baseURL, token);
  sleep(3);

  getUserData(baseURL, token);
  sleep(3);

  updateUserData(updatePayload, baseURL, token);
}

function registerUser(user, params, baseURL) {
  const registerResponse = http.post(`${baseURL}/register`, JSON.stringify(user), params);
  console.log('Registro de Usuario:', registerResponse.status);
}

function loginUser(payload, params, baseURL, token) {
  const loginResponse = http.post(`${baseURL}/login`, JSON.stringify(payload), params);
  console.log('Inicio de Sesión:', loginResponse.status);
  token.value = loginResponse.json('token');
}

function getUserData(baseURL, token) {
  const authHeaders = {
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  };
  const userProfileResponse = http.get(`${baseURL}/user`, authHeaders);
  console.log('Datos de Usuario:', userProfileResponse.status);
}

function updateUserData(payload, baseURL, token) {
  const authHeaders = {
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  };
  const updateResponse = http.put(`${baseURL}/user`, JSON.stringify(payload), authHeaders);
  console.log('Actualización de Datos de Usuario:', updateResponse.status);
}
