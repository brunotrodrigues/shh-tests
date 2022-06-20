exports.password = function(password) {

    if(password.length == ''){
        return 'Fill the password please'
    } else if (password.length < 8){
        return 'Password length must be atleast 8 characters'
    } else if (password.length > 15){
        return 'Password length cant be more than 15 characters'
    } else {
        return 'Password is correct'
    }
}