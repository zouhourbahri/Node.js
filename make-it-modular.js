const mymodule = require('./mymodule');

mymodule(process.argv[2],process.argv[3], (err, List) =>{
    if (err) {
        return console.error(err);
    }
    
    List.forEach((file) => {
        console.log(file);
    });
});