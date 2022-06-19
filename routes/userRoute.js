import express from 'express'

const router = express.Router();

//use search all paths starting with /
router.use('/', function(request, response) {
    response.send('Hola mundo en express')
});

export default router