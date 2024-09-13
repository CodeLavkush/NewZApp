import express from 'express';
import FetchNews from './APIHandler.js';
import mongoose from 'mongoose';
import Customers from './models/Customers.js';

const app = express()
const port = 3000;


await mongoose.connect("mongodb://localhost:27017/newz")

// app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("../views/home.ejs");
})

app.get('/about', (req, res)=>{
    res.render('../views/about.ejs');
})

app.get('/contact', (req, res)=>{
    res.render('../views/contact.ejs');
})

app.get('/news', async (req, res)=>{
    let querys = ["india", "indian news", "india news", "indian tech news", "india finance", "indian stock market", "indian politics"]
    let randNum = Math.floor(Math.random() * querys.length);
    let news  = await FetchNews(querys[randNum]);

    res.json(news);
})

app.post('/contact', async (req, res)=>{
    try{
        console.log(req.body);
        const Customer = new Customers({firstName: req.body.FirstName, lastName: req.body.LastName, email: req.body.Email});
        Customer.save();
        res.redirect('/contact');
    }
    catch(error){
        res.redirect('/contact');
    }
})

app.listen(port, ()=>{
    console.log(`app  running on http://localhost:${port}/`);
})