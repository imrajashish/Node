var rs = require('fs')


rs.readFile('tut1.js','utf8',function(err,data){
    console.log(data)
})
rs.writeFile('tut2.js','console.log("Done")',function(err){
    console.log("Data saved")
})
rs.unlink('tut1.js',function(err){
    console.log("Deleted")
})