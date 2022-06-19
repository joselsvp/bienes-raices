import express from 'express'

const router = express.Router();

//use search all paths starting with /
router.get('/login', function(request, response) {
    response.render('auth/login', {autenticado: true})
});


export default router