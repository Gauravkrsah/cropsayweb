const http = require ("http")
require("dotenv").config()
const app = require("./src/config/express.config")
const server = http.createServer(app)

const port = process.env.PORT || 9007

server.listen(port,'127.0.0.1', (error) => {
    if(error){
        console.log("Server error");
    }else{
        console.log(`Server is running on port ${port}` )
    }
})


