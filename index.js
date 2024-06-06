const express = require('express')
const app = express()

const port = 8000

app.get('/test', (req, res)=> {
    res.status(200).json({msg: "test passed"})
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})