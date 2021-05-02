const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./../utils/geocode')

const app = express()
const port = process.env.PORT || 3000

//configuration for the paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handle bars
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up express static page
app.use(express.static(publicDirectoryPath))

//routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Cliently',
        name: 'Ferhat'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Cliently',
        name: 'Ferhat'
    })
})

app.get('/help', (req, res) => {
    res.send('This is help page.')
})

//JSON api
app.get("/location", (req, res) => {
    
    if(!req.query.address){
        return res.send({
            error: "You must provide an address!"
        })
    }

    geocode(req.query.address, (error, {place_name, longtitude, latitude} = {}) => {

        if(error){
            return res.send({
                error: error
            })
        }
        else{
            return res.send({
                place_name,
                longtitude,
                latitude
            })
        }
    })
 
})

app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(port, () => {
    console.log('Server is started at port 3000')
})