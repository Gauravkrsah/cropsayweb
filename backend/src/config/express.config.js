const express = require("express")
const app = express();
const cors = require('cors')
const router  = require("./router.config");
const { notFound, multerErrors, validationErrors } = require("../middlewares/errors.middleware");


require("./db.config")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(router)

app.use(notFound)
app.use(validationErrors)
app.use(multerErrors)



module.exports = app