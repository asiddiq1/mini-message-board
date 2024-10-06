
const {Router} = require("express");
const newMessageRouter = Router();
const messages = require("./messages");
console.log(messages);


newMessageRouter.get("/new", (req,res) =>  res.render("form")); //render the form
newMessageRouter.post("/new", (req, res) => {
    const text = req.body.message; //body-parser to access form
    const user = req.body.author;
    console.log(text); //log to verify 
    messages.push({text: text, user: user, added: new Date()});
    res.redirect("/"); //redirect after submission (send response back to client) - refreshing causes rebusmission

});

module.exports = newMessageRouter;