// permission system
const express = require('express')
const app = express()
const fs = require('fs')
app.listen(8080)
app.use(express.json())
app.set('view-engine', 'ejs')

const users = []
app.get('/users', (req, res) => {
    res.render('userregister.ejs')
})
const fetch = require('node-fetch');

app.post('/users', async (req, res) => {
    try {

        const user = { name: req.body.name, password: req.body.password }
    users.push(user)
    res.status(201).send()
    } catch {
        res.status(500).send()
    }
})
app.get('/l/users', (req, res) => {
    res.json(users);
})
app.post('/users/login', async(req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if(user == null) {
        return res.status(400).send('No user found')
    }
    try {
        if(req.body.password == user.password) {
            res.status(200).send('Success!')
        } else {
            res.status(404).send('Invalid password')
        }
    } catch{
        res.status(500).send()
    }
})

app.get('/users/register-cookie-id', async(req, res) => {
    res.render('register-cookie.ejs')
})
app.post('/users/register-cookie-id', (req, res) => {
    res.status(501).send('Created')
})
app.get('/user', (req, res) => {
	if (res.cookie.cookieid === "1"){
		res.send('Hi')
	}
})
app.get('/capp/1', async(req, res) => {
    const chat = require('./chats/1.json')
    res.render('chat.ejs', {
        chat: chat
    })
})
app.get('/stringifydata', async(req, res) => {
    res.render('stringifyweb.ejs')
})
app.post('/stringifydata', (req, res) => {
    res.status(404).send('Closed')
})
