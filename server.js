import app from "./app.js";

app.listen(process.env.PORT,()=>{
console.warn(`Server is working on port :: ${process.env.PORT}`);
})