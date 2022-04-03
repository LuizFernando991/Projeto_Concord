import express, {Application} from 'express'
import cors from 'cors'
//Routes
import UserRoutes from './routes/UserRoutes'

//Init express
const app : Application = express()
//Config JSON req/res
app.use(express.json())
//Solve CORS
app.use(cors({ credentials : true, origin : 'http://localhost:5050' }))
//Public folder
app.use(express.static('public'))
//Routes
app.use('/user', UserRoutes)
    


app.listen(5050, ()=> console.log('Server is running'))