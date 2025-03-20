const  mongoose=require("mongoose");
const Listing=require("../models/listing.js");
const initData=require("./data.js");

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';

main()
.then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
});


async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6714b1f2b10137821d86a252",}));
    await Listing.insertMany(initData.data);
    console.log("DATA INI");
};

initDB();