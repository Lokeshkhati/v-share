import express from 'express'
const app = express()

app.get('/api/users', (req, res) => {
    res.send([{
        id: 1,
        name: "lokesh khati",
        age: 23

    }, {
        id: 2,
        name: "omkar s",
        age: 23

    }, {
        id: 3,
        name: "Prince singh",
        age: 23

    }, {
        id: 4,
        name: "Aakash Maurya",
        age: 23

    }, {
        id: 5,
        name: "Shubham Singh",
        age: 23

    }, {
        id: 6,
        name: "Vikash Singh",
        age: 23

    }])
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})