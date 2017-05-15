#!/usr/bin/env node
 
var lib= require('../lib/index.js');



if(process.argv.length > 3 || process.argv.length === 2){
    console.error("one argument should be specefied, : { accessKeyId, secretAccessKey , sessionToken: , expiration: }\n"
        + "you have specified  " + (process.argv.length - 2)
        + " arguments (" + process.argv.splice(2).join(" ,") + ")");
    process.exit(-1);
}

process.argv.forEach(function (key, index, array) {

    if(index>1){
        lib.extract(function(data){
            //console.log(value[val]);
            process.stdout.write(data[key]);
            process.exit(0);
        })
    }
});



