const express = require("express");
const router = express.Router()

router.get("/albums", (req, res)=>{
    res.render("albums",{
        name: "albums page"
    })
})

module.exports = router;