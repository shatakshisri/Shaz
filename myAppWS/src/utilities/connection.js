const {Schema}=require('mongoose');
const Mongoose=require('mongoose');
Mongoose.Promise=global.Promise;
Mongoose.set('useCreateIndex',true);
const url="mongodb://localhost:27017/Dbcollection";

const userSchema=Schema({
    username:{type:String,unique:true,},
    password: {type:String, },
    emailId:{String,},
    mobileNumber:{Number},
    orders:{type: Array, default: []}

},{collection:"User"});


const sellerSchema=Schema({
    s_Id: String,
    pDiscount:Number,
    pQuantity:Number,
    pShippingCharges:Number
});

const productSchema=Schema({
    _id:Number,
    pName:String,
    pDescription:String,
    pRating:Number,
    pCategory:String,
    price:Number,
    color:String,
    image:String,
    specification:{type:String,default:""},
    dateFirstAvailable:Date,
    dateLastAvailable:Date,
    pSeller:{type:sellerSchema}
},{collection:"Product"});

let collection={};

collection.getUserCollection=()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then((database)=>{
        return database.model('User',userSchema)
    }).catch((error)=>{
        let err=new Error("Could not connect to database");
        err.status=500;
        throw err;
    })
}

collection.getProductCollection=()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then((database)=>{
        return database.model('Product',productSchema)
    }).catch((error)=>{
        let err=new Error("Could not connect to database");
        err.status=500;
        throw err;
    })
}


module.exports = collection;