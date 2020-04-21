const express=require('express')
const router=express.Router()
const cors=require("cors")
const service = require( '../service/user' );
const create = require('../model/dbSetup');
const DataServ=require('../model/user');
//to set up database
router.get('/setupDb',(req,res,next)=>{
    create.setupDb().then((data)=>{
        res.send(data);
    }).catch(err=>{
        next(err);
    })
})
//to get all users
router.get('/getAllUsers',(req,res,next)=>{
    DataServ.getAllUsers().then((users)=>{
        res.json(users);
    }).catch(err=>{next(err);}
    )
})
//to get all products
router.get('/getAllProducts',(req,res,next)=>{
    DataServ.getAllProducts().then((products)=>{
        res.json(products)
    }).catch(err=>{next(err);
    })
})
//to get products by category
router.get( "/getProductByCategory/:catNAME", ( req, res, next ) => {
    const catNAME = req.params.catNAME;
    service.getProductByCategory( catNAME ).then( ( productList ) => {
        res.json( productList );
    } )
    .catch( ( err ) => {
        next( err );
    } )
} );
//get on product details
router.get( "/getOneProductDetails/:productID", ( req, res, next ) => {
    const productID = req.params.productID;
    service.getOneProduct( productID ).then( ( oneProduct ) => {
        res.json( oneProduct );
    } )
    .catch( ( err ) => {
        next( err );
    } )
} )
//get all orders
router.get( "/getAllOrders/:username", ( req, res, next ) => {
    const username1 = req.params.username;
    service.getAllOrders( username1 ).then( ( allOrders ) => {
        res.json( allOrders );
    } )
    .catch( ( err ) => {
        next( err );
    } )
} )
//add orders
router.post( "/addOrders/:username", ( req, res, next ) => {
    const username1 = req.params.username;
    const  orders=req.body;
    service.addOrders( username1,orders ).then( ( allOrders ) => {
        res.json( allOrders );
    } )
    .catch( ( err ) => {
        next( err );
    } )
} )

module.exports = router