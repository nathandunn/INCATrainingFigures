
console.log('out') ;
let fs = require('fs');


let data = JSON.parse(fs.readFileSync('./all_output.json', 'utf8'));

let single_files = [];
let multi_files = [];


for(let k in data){
    // console.log(k)
    // console.log(data[k]);
    // console.log(Object.keys(data[k]).length);
    let numFigures = Object.keys(data[k]).length;
    if(numFigures>0){
        multi_files.push(k);
    }
    else{
        single_files.push(k);
    }
}

// console.log('single file figures: ',single_files.length)
// console.log(single_files)
// console.log('multi file figures: ',multi_files.length)

fs.writeFile('single_file_name.txt', single_files, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
fs.writeFile('multi_file_name.txt', multi_files, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});



// console.log(data.props);
// let keys = data[0].map( k => k )
// console.log(`${keys}`) ;

// let data = obj.keys.map( k => )

// fs.open('./all_output.json', 'r', (err, data) => {
//     console.log('reading')
//     // data.
//
//     // => [Error: EISDIR: illegal operation on a directory, open <directory>]
// });
