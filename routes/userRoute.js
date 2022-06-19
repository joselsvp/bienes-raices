import express from 'express'
import { formLogin } from '../controllers/userController.js'

const router = express.Router();

//use search all paths starting with /
router.get('/login', formLogin)

export default router