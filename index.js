import express from "express";
import routerUser from './routes/user.routes.js'
import routerPost from './routes/post.routes.js'
const app = express()

app.use(express.json())

app.use('/api', routerUser)
app.use('/api', routerPost)

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
    console.log(`Working on PORT: ${PORT}`)
})