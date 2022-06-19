//current version to import express
import express from 'express'
import userRoutes from './routes/userRoute.js'

//create app
const app = express()

//Routing 
app.get('/', userRoutes)

//Define Port and start project
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running in port 3000`);
});