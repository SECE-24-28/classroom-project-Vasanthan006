const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')
 const exhbs = require('express-handlebars')
 //let message = 'Tony Stark'
 let message = "Test"


app.engine('hbs', exhbs.engine({
    layoutsDir: 'view_folder',
    defaultLayout: 'main',
    extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', 'view_folder')

 app.use(bodyParser.urlencoded({ extended: true }))


// app.get('/', (req, res) => {
     
//     res.render('main',{message})})



const dbo = require('./db')

app.get('/', async (req, res) => {
    let db = await dbo.getDatabase()
    const collection = db.collection('books')
    const cursor = collection.find({})
    let myData = await cursor.toArray()
    switch(req.query.status){
        case '1': message = "inserted successfully"
        break; 
    }
    res.render('main',{message, myData})

})

app.post('/store_book',async (req, res) => {
    let database = await dbo.getDatabase()
    const collection = database.collection('books')
    let bookdata = {title: req.body.title1, author: req.body.author1}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})




