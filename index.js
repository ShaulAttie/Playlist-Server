require('dotenv').config()


const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3001

app.use(express.json())
app.use(require('cors')())

const router = require('./routes/searchRoute')
app.use('/api', router)

require("./DL/db").connect()

app.listen(PORT, () => console.log(`Server is rumming at PORT ${PORT}`))

// npm init -y
// npm i cors express mongoose nodemon axios dotenv
// morgan concurrently
// mongoose.connection.readyState
// useNewUrlParser