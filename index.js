import { generate, count } from "random-words";
import express from 'express'; 


const app = express();
console.log(generate()); // Output: 'army'


// Define your routes or middleware here

const PORT = process.env.PORT || 3000; // Set a default port or use environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});