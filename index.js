import express from 'express';
import FetchNews from './APIHandler.js'

const app = express()
const port = 3000;



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res)=>{
    res.render("../views/home.ejs");
})

app.get('/about', (req, res)=>{
    res.render('../views/about.ejs');
})

app.get('/featured', (req, res)=>{
    res.render('../views/featured.ejs');
})

app.get('/news', async (req, res)=>{
    let querys = ["india", "indian news", "india news", "indian tech news", "india finance", "indian stock market", "indian politics"]
    let randNum = Math.floor(Math.random() * querys.length);
    let news  = await FetchNews(querys[randNum]);

    res.json(news);
})

app.listen(port, ()=>{
    console.log(`app  running on http://localhost:${port}/`);
})