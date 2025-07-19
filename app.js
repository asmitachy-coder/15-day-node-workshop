const express = require('express');
const app = express();
//app.set ('view engine',ejs)

app.get('/', (req,res)=>{
  res.send("hello world")

})
app.get('/about',(req,res)=>{
  res.send("this is about page")
})
app.listen(3000,() => {
  
  console.log('project suru vayo node js ko')
})