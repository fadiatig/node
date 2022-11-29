var fs=require("fs");
fs.readFile('welcome.txt',function(err,fd){
    if (err) {
        return console.error(err);
    }
    console.log(fd.toString());
});