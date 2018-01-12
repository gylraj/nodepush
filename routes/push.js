var express = require('express');
var router = express.Router();

/* GET push listing. */
router.post('/', function(req, res) {
    fs = require('fs');

    fs.appendFile('/tmp/helloworld.txt', JSON.stringify(req.body)+'\n', function (err) {
        if (err) throw err;
          console.log('Saved!');
    });
    res.send('respond with a resource xxx ' + JSON.stringify(req.body));
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
