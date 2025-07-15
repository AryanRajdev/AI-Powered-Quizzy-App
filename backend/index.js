import { config } from 'dotenv'
import express , {json} from 'express'
import { connect } from 'mongoose'
import { templateRouter } from './routes/template.js';
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(express.json());

connect("mongodb+srv://aryanraj24032002:vGHRdCIntHRTAFwM@cluster0.dadtef9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("Connected to MongoDB Database")
})
.catch((err)=>{
  console.error("❌ MongoDB connection error:", err)
})

app.use("/api/templates", templateRouter);

app.use(errorHandler);

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Quizzy API is up." });
});



const PORT =  3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



// aryanraj24032002
// vGHRdCIntHRTAFwM
