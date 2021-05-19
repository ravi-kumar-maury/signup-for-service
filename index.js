const express = require("express")
const bodyparser1 = require("body-parser")
const app = express()
app.use(express.static(__dirname+'/public')) // now server can use this while serving , otherwise css file will be local and rendering cant be done 
app.use(bodyparser1.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    res.sendFile(__dirname+'/index.html') // only using "./index.html" gives error
})

app.post('/' ,(req,res)=>{
    console.log(req.body.fname)
    console.log(req.body.lname)
    console.log(req.body.email)

})




app.listen(3000,()=>{
    console.log("connected");
})