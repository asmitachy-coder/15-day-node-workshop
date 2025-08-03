const express = require('express');
const app = express();
app.set ('view engine','ejs')

app.get('/', (req,res)=>{
  
  const data ={
    name :"asmita chy",
    age :22,
    location : "jhumka",
  }
  const nepal ={
    continent :'asia',

  }


  res.render("home.ejs",{
  haha:data
  ,hehe:nepal
  })
  
  })


app.get('/about',(req,res)=>{
  res.render("about.ejs")
})
app.use(express.static('public/css/'))

app.listen(3306,() => {
  

  console.log('project suru vayo node js ko')
})