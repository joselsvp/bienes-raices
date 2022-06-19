const formLogin = (request, response) => {
    response.render('auth/login', {
        autenticado: true
    })
}

export {
    formLogin
}