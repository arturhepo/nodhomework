const express = require('express');
const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('time: ' + new Date().getHours() + ', ' + 'Method: ' + req.method);
}).post((req,res)=>{
    res.send('time: ' + new Date().getHours() + ', ' + 'Method: ' + req.method);
}).put((req,res)=>{
    res.send('time: ' + new Date().getHours() + ', ' + 'Method: ' + req.method);
}).delete((req,res)=>{
    res.send('time: ' + new Date().getHours() + ', ' + 'Method: ' + req.method);
})

module.exports = router;