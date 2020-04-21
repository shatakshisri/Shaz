const dbLayer = require( '../model/user' );

const user = {}
//to get all products
user.getProductByCategory = ( catNAME ) => {
    return dbLayer.getProductByCategory( catNAME ).then( ( productList ) => {
        return productList;
    } )
}
//to get one the products
user.getOneProduct = ( productID ) => {
    return dbLayer.getOneProduct( productID ).then( ( oneProduct ) => {
        return oneProduct;
    } );
}
//to get all orders
user.getAllOrders=(username)=>{
    return dbLayer.getAllOrders( username ).then( ( allOrders ) => {
        return allOrders;
    } );
}
//adding orders
user.addOrders=(username,orders)=>{
    return dbLayer.addOrders( username,orders ).then( ( allOrders ) => {
        return allOrders;
    } );
}

module.exports = user