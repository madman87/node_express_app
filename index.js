import Express from "express";

const app =Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

//GET, PUT, POST, DELETE

app.get('/products/:id', (req,res)=>{
    // res.send('Hello World');
    res.json(Products.find((product) =>{
        return +req.params.id===product.id;
    }));
});

app.post('/add', (req,res)=>{
    res.send(req.body);
});

app.listen(port, () => console.log('listening on port'+port));