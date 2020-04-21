const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const app=express();
const myErrorLogger=require('./utilities/errorlogger');
const myRequestLogger=require('./utilities/requestlogger');


const router = require( './routes/route' );


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.use(myRequestLogger);

app.use( router );

app.use(myErrorLogger);

// router.get( "/setupDB", ( req, res, next ) => {
//     create.setupDB().then( response =>{
//         if ( response ) res.json( { message: "Successfully inserted "+ response +" documents into database"} )
//     } ).catch( error =>{
//        next( error );
//     } )
// } );

// const mongoURI='mongodb://localhost:27017/ShopWS'

// mongoose.connect(mongoURI,{useNewUrlParser:true})
// .then(()=>console.log("Mongodb connectd"))
// .catch(err=>console.log(err))


// app.use('/api',route)

app.listen(2222)
console.log("Server listening in port 2222");

module.exports=app;