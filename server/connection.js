import mongoose from "mongoose";
// import urlSchema from "./routes/url.js";

const connection = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to database");
    } catch (error) {
        console.log("error connecting to database", error);
    }
}

export default connection;