//current version to import express
import express from 'express'
import userRoutes from './routes/userRoute.js'

//create app
const app = express()

//enable pug
app.set('view engine', 'pug')
app.set('views', './views')

//Routing 
app.use('/auth', userRoutes)

//Define Port and start project
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running in port ${3000}`);
});