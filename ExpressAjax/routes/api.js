var express = require('express');
var router = express.Router();

// api_test1 just sends some arbitraty data but takes no input
router.get('/api_test1', function(req, res) {
    var theAnswer = {firstname: "John", lastname: "McLane", age: 35};
    res.send(JSON.stringify(theAnswer));
});


// api_test2 sends some data considering an input (json format)
router.get('/api_test2', function(req, res) {
    // get the Ajax data sent from client side
    var queryData = req.query

    var theAnswer = {firstname: "Tom", lastname: "Sawyer", age: 14, intro: "are you comming from " + queryData.city + "?"};
    res.send(JSON.stringify(theAnswer));
});


module.exports = router;
