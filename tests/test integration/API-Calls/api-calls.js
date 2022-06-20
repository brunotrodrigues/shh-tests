const axios = require('axios')

exports.postLogin = async function(user) {
    try {
        const response = await axios.post('http://127.0.0.1:3000/users/login', {
            email: user.email,
            password: user.password
        })
        return response
    } catch (error) {
        throw Error('error');
    }
}

exports.createUser = async function(user) {
    try {
        const response = await axios.post('http://127.0.0.1:3000/users', {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            number: user.number,
            course: user.course,
            course_year: user.course_year,
            birthdate: user.birthdate,
            email: user.email,
            photo: user.photo,
            password: user.password,
            confirmPassword: user.confirmPassword,
        })
        return response
    } catch (error) {
        throw Error('error');
    }
}

exports.getAllUsers = async function() {
    try {
        const response = await axios.get('http://127.0.0.1:3000/users')
        return response
    } catch (error) {
        throw Error('error');
    }
}

exports.getCategories = async function() {
    try {
        const response = await axios.get('http://127.0.0.1:3000/categories')
        return response
    } catch (error) {
        throw Error('error');
    }
}

exports.getAllPosts = async function() {
    try {
        const response = await axios.get('http://127.0.0.1:3000/posts')
        return response
    } catch (error) {
        throw Error('error');
    }
}