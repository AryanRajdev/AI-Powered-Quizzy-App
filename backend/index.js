import { config } from 'dotenv'
import express , {json} from 'express'
import { connect } from 'mongoose'

const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Quizzy API is up." });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

