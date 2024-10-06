const {Router} = require("express");
const viewMessageRouter = Router();
const messages = require("./messages");


viewMessageRouter.get("/:user/:index", (req,res) => {
    const { user, index } = req.params;
    const message = messages[index].text;
    res.send(`User: ' ${user}, Message: ${message}`);
});

module.exports = viewMessageRouter;