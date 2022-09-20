import mongoose from "mongoose";

const connectDatabase = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            //must add in order to not get any error masseges:
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Mongoose connected');
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1)
    }
}
export default connectDatabase