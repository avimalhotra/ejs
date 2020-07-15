const express = require('express');
const app = express();
const path = require("path");
const ejs = require('ejs');
const LRU = require('lru-cache');
//ejs.cache =new LRU(100);  
//ejs.cache =new LRU(300);  


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    //res.send("hi");
    res.status(200).render('index', { name: "avi", id: 212, isAvailable: false, month: ["Jan","Feb","Mar","Apr","May","June"], person:{ name:"person",age:22,empid:212 } })
});

app.get('/about', (req, res) => {
    res.status(200).render('about',{ getUser:()=>{ return "ABCD" } })
});
app.get('/blogs', (req, res) => {
    res.status(200).render('blog',{})
});


app.listen(3000, () => {
    console.log("app runing at http://localhost:3000");
})
