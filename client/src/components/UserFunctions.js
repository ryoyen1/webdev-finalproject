import axios from 'axios'

export const register = newUser =>{
    return axios
        .post('api/register', newUser, {
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user =>{
    return axios
        .post('api/login', {
            email: user.email,
            password: user.password
        },{
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            return res.data.token
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    return axios
        .get('api/profile', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}`}
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

//CART

export const addcart = newItem => {
    return axios
        .post('api/addcart', newItem, {
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getCartitem = () => {
    return axios
        .get('api/listofproducts', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}`}
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
