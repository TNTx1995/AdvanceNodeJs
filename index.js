import express from "express";
import models from './models/index.js';
import mongoose  from "mongoose";

const app = express();
const port = 3000;
app.use(express.json());

const log = (msg) =>console.log(msg);

const uri = "mongodb://127.0.0.1:27017/parcelkoi";
const options = {};
mongoose.set('strictQuery', true);
const connectWithDb = ()=>{
    mongoose.connect(uri,options,(err,db)=>{
        if(err)console.error(err);
        else{
            log("Database connection established");
        }
    })
}

connectWithDb();

app.get('/',(req,res)=>{
    res.send('Hello world ' + req.query.id);
});

app.post('/',(req,res)=>{
    const body = req.body;

    res.send('This is post request ' + body.message);
})

app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});

log(models)