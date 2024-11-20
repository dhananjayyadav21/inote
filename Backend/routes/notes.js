const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{

    obj = {
        name:"dhananjay",
        surname: "yadav"
    }
    res.json(obj);
})

module.exports = router

