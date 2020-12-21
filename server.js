const express = require('express');
const bodyParser = require('body-parser');
const fs=require('fs')
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// let books=JSON.parse(fs.readFileSync('./books.json'))
// books=books.map(el=>{
//     el.count=Math.floor(Math.random() * 10) + 1;
//     return el
// })
// fs.writeFileSync('books1.json',JSON.stringify(books))

app.get('/books', (req, res) => {
let books=fs.readFileSync('./books1.json')
  res.json(JSON.parse(books))
});
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index && value.length>1;
  }

app.get('/books/categories',(req,res)=>{
    let categories=JSON.parse(fs.readFileSync('./books1.json')).map(el=>el.categories)
    var merged = [].concat.apply([], categories);
    merged=merged.map(item=>item.toUpperCase())
    merged=merged.filter(onlyUnique);
    res.json({categories:merged})
})
app.get('/books/categories/:category',(req,res)=>{
    let category=req.params.category
    let books=JSON.parse(fs.readFileSync('./books1.json')).filter(item=>{
        console.log(item.categories.join(',').toLowerCase(),category.toLowerCase())
        return item.categories.join(',').toLowerCase().includes(category.toLowerCase())
    })
    res.json(books)
})
app.get('/books/search/:searchTerm',(req,res)=>{
    let searchTerm=req.params.searchTerm
    console.log(searchTerm)
    let books=[]
    if(searchTerm.length){
        books=JSON.parse(fs.readFileSync('./books1.json')).filter(item=>{
            return item.categories.join(',').toLowerCase().includes(searchTerm.toLowerCase())?
            true:item.title.toLowerCase().includes(searchTerm.toLowerCase())?true:
            item.authors.join(',').toLowerCase().includes(searchTerm.toLowerCase())?true:
            item.shortDescription && item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())?true:false
        })
        res.json(books)
    }else{
        res.json(JSON.parse(fs.readFileSync('./books1.json')))
    }
    
    
})

app.post('/addbook',(req,res)=>{
    let books=JSON.parse(fs.readFileSync('./books1.json'))
    books.unshift(req.body.payload)
    fs.writeFileSync('books1.json',JSON.stringify(books))
    let categories=books.map(el=>el.categories)
    var merged = [].concat.apply([], categories);
    merged=merged.map(item=>item.toUpperCase())
    merged=merged.filter(onlyUnique);
    res.json({book:books,categories:merged})
})
app.post('/remove/book/:id',(req,res)=>{
    let books=JSON.parse(fs.readFileSync('./books1.json'))
    let index=books.findIndex(x=>x.isbn==req.params.id)
    if(index>-1){
        books.splice(index,1)
        fs.writeFileSync('books1.json',JSON.stringify(books))
        let categories=books.map(el=>el.categories)
        var merged = [].concat.apply([], categories);
        merged=merged.map(item=>item.toUpperCase())
        merged=merged.filter(onlyUnique);
        res.json({book:books,categories:merged})
    }else{
        res.status(404).end()
    }
    
})
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});