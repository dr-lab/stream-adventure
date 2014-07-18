var http = require('http');
var through = require('through')
  
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(tr).pipe(res);
        }
        res.end();
    });
    server.listen(process.argv[2]);


    var tr = through(write, end);   
    function write (buf) { 
    	this.queue(buf.toString().toUpperCase());   	
    }
    function end () { 
    	this.queue(null);
    }
