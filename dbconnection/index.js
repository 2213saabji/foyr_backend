const mongoose=require("mongoose");

mongoose.connect(process.env.MONGOSTRING)
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`error: ${err.message}`);
})