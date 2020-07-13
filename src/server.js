const express=require("express");
const app=express();
const path=require('path');
const ejs=require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.use(express.static(path.resolve(__dirname,'public')))


app.get('/',(req,res)=>{
    res.render('index',{name:"avi", id:212});
    //res.status(200).send("hello ejs");
});


app.listen(3000,()=>{
    console.log(`app running at http://127.0.0.1:3000`);
})