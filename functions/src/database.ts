import * as mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(
          `mongodb+srv://agustin:mongodbagus23@cluster0-uvim4.gcp.mongodb.net/test?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
          }
        );
        console.log(">>> DB is connected!");
    } catch (e) {
        console.log("Something went wrong!");
        console.log(e);
    }
}
