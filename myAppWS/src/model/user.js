const dbModel = require( '../utilities/connection' );
const shoppingDb= {}
//to get the details of all the users
shoppingDb.getAllUsers=()=>{
    return dbModel.getUserCollection().then((model)=>{
        return model.find({},{username:1,password:1}).then((users)=>{
            if(!users||users.length==0) return null;
            else return users;
        })
    })
}
//to get all the products
shoppingDb.getAllProducts=()=>{
    return dbModel.getProductCollection().then((model)=>{
        return model.find().then((product)=>{
            if(!product||product.length==0) return null;
            else return product;
        })
    })
}
//to get products according to category
shoppingDb.getProductByCategory = ( catNAME ) => {
    return dbModel.getProductCollection().then( ( productLIST ) => {
        return productLIST.find( {pCategory: catNAME} ).then( ( productDATA ) => {
            if ( productDATA.length )
                {return productDATA;}
            else {
                const err = new Error( "Unable to get the products" );
                err.status = 201;
                throw err;
            }
               
        } )
    } )
    .catch( ( err ) => {
    } )
}
//getting one product
shoppingDb.getOneProduct = ( productID ) => {
    return dbModel.getProductCollection().then( ( productDB ) => {
        return productDB.findOne( {_id: productID} ).then( ( oneProduct ) => {
            if ( oneProduct!=null ) 
                {return oneProduct;}
            else {
                const err = new Error( "Unable to get the product" );
                err.status = 201;
                throw err;
            }
        } );
    } );
}
//getting all orders
shoppingDb.getAllOrders = ( username ) => {
    return dbModel.getUserCollection().then( ( userDB ) => {
        return userDB.findOne( {username: username },{_id: 0,orders: 1 } ).then( ( orserStatus ) => {
            if ( orserStatus) 
                { 
                    return orserStatus;
                }
            else {
                const err = new Error( "unable to get orders" );
                err.status = 206;
                throw err;
            }
        } );
    } );
}
//adding orders
shoppingDb.addOrders= ( username,orders ) => {
    return dbModel.getUserCollection().then( user =>{
        return user.updateOne( {"username":username},{$push: {"orders":orders}} ).then( data =>{
            if(data.nModified==1){
                            return true;
                        }else{
                            let err = new Error("Purchase Failed");
                            err.status=401;
                            throw err;
                        }
                    })
    } )
}

module.exports=shoppingDb;