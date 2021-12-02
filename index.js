import Express from "express";
import Products from "./products.js";

const app =Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

function mid(req, res, next){
    console.log(req.query);
    console.log(req.params);
}

//GET, PUT, POST, DELETE
app.get('/products/:id' ,(req,res)=>{
    // res.send('Hello World');
    res.json(Products.find((product) =>{
        return +req.params.id===product.id;
    }));
});

app.post('/add', mid, (req,res)=>{
    res.send(req.body);
});

app.listen(port, () => console.log('listening on port'+port));