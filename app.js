const express = require('express')
const app = express()
const port= 5000


// middleware
app.use(express.json())
app.get("/",(req, res)=> {
    let a = 60
    let b = 20
    let sum = a+b
  res.send('sum is: '+sum)
})

app.post('/msg',(req, res)=> {
    console.log(req.body)
  
    let {n1,n2} = req.body
    req.send("sum is :"+(n1+n2))
  })
app.listen(port,()=>{
    console.log('Server is running on port 3000...')
})  
