const User = require('../models/user')


const register = async (userData) => {

    if (userData.password !== userData.repeatPassword) {
        throw({ message: 'Password don`t match' })

    }

    const user = new User(userData)

}




module.exports = {
    register
}