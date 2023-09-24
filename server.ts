import dotenv from "dotenv"
import app from ".";

process.on("uncaughtException", (error: Error) => {
    console.log(error.message)
})

process.on("unhandledRejection", (error: Error) => {
    console.log(error.message);
})

dotenv.config()

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`started server on [::]:${port}, url: http://localhost:${port}`)
})