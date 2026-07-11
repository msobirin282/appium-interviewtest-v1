require('dotenv').config();

module.exports = {

    validUser: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    },

    invalidUser: {
        email: 'invalid@email.com',
        password: '123456'
    }

};