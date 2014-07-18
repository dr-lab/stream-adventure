var split = require('split');
var through = require('through');

    process.stdin
        .pipe(split())
        .pipe(through(write, end))
        .pipe(process.stdout);
    
var lineCount = 0;
function end(){
		this.queue(null);
        	}

function write(line) {
	//console.log(line+"\n");
	if(lineCount%2){
            this.queue(line.toString().toUpperCase()+'\n');
            //this.queue(line);
        }else{
        	this.queue(line.toString().toLowerCase()+'\n');
        }
        lineCount++;
    }

