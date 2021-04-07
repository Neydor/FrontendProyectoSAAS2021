import HttpClient from '../services/HttpClient';

export const registrarUsuario = usuario => {
    return new Promise((resolve, eject) => {
        HttpClient.post('/newuser', usuario).then(response => {
            resolve(response);
        })
    })
}

export const loginUsuario = usuario => {
    return new Promise((resolve, eject) => {
        HttpClient.post("/login", usuario).then(response => {
            resolve(response);
        })
    })
}