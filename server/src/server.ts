import express from 'express'
const app = express()

app.get('/ads',(request, response)=>{
    return response.json([
        {id: 1, name:"nome 1"},
        {id: 2, name:"nome 2"},
        {id: 3, name:"nome 3"},
    ])
})

app.listen(5555)