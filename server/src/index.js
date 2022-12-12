import app from "./app.js"
import { connectWithDB } from './config/db.js'

connectWithDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})


export { connectWithDB }