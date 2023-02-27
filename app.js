import express from 'express';
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter)
mongoose
.connect('mongodb+srv://vivekkrydv01:FwPnb9FgFC7S04Nd@cluster0.ttpnubj.mongodb.net/?retryWrites=true&w=majority'
)
.then(()=>app.listen(5000))
.then(() => 
console.log("Connected to the Database and listening to Localhost 5000")
)
.catch((err)=> console.log(err));
// app.use("/",(re,res,next) => {
//     res.send("Hello World");
// });

