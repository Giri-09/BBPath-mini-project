 const express=require("express");
 const mysql=require("mysql");
 const cors=require("cors");

 const app=express();
 app.use(cors());
 app.use(express.json());

 const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
 })

 app.post("/signup", (req, res) => {
   const checkEmailExists = "SELECT * FROM login WHERE `email` = ?";
   
   // Check if email already exists in the database
   db.query(checkEmailExists, [req.body.email[0]], (err, data) => {
       if (err) {
           return res.json({ status: "Error", message: "Error checking email." });
       }
       if (data.length > 0) {
           return res.json({ status: "Failed", message: "Email already exists." });
       }

       // If email doesn't exist, proceed to insert
       const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
       const values = [
           req.body.name[0],
           req.body.email[0],
           req.body.password[0]
       ];
       db.query(sql, [values], (err, data) => {
           if (err) {
               return res.json({ status: "Error", message: "Error inserting data." });
           }
           return res.json({ status: "Success", message: "Signup successful." });
       });
   });
});

function generateRandomToken(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  }

// Updated Login Route
app.post("/login", (req, res) => {
   const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
   db.query(sql, [req.body.email[0], req.body.password[0]], (err, data) => {
       if (err) {
           return res.json({ status: "Error", message: "Error querying the database." });
       }
       if (data.length > 0) {
           return res.json({ status: "Success", message: "Login successful.",jwt_token:generateRandomToken(32)});
       } else {
           return res.json({ status: "Failed", message: "Incorrect email or password." });
       }
   });
});


 app.listen(8084,()=>{
   console.log("listening");
 })
