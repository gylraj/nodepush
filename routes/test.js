var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource xxx ' + JSON.stringify(req.query));
});

router.post('/push/', function(req, res) {

    fs = require('fs');
    //fs.writeFile('/tmp/helloworld.txt', JSON.stringify(req.body)+'\n', function (err) {
    //     if (err) 
    //        return console.log(err);
    //     console.log('Wrote Hello World in file helloworld.txt, just check it');
    //});
    //fs.appendFile('/tmp/helloworld.txt', JSON.stringify(req.body)+'\n', function (err) {
    //    if (err) throw err;
    //      console.log('Saved!');
    //});
    fs.appendFileSync('/tmp/helloworld.txt', JSON.stringify(req.body)+'\n');

  res.send('respond with a resource xxx ' + JSON.stringify(req.body));


});

module.exports = router;
