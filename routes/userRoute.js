import express from 'express'

const router = express.Router();

//use search all paths starting with /
router.get('/', function(request, response) {
    response.json({msg: 'response type get'})
});


export default router