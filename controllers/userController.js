const formLogin = (request, response) => {
    response.render('auth/login', {
    })
}

const formRegister = (request, response) => {
    response.render('auth/register', {
    })
}
export {
    formLogin,
    formRegister
}