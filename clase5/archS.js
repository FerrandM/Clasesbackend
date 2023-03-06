//cb
const fs = require('fs') 


// fs.writeFile('./data2.txt', 'esto es un ej cb \n', 'utf-8', (err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('archivo crado');
//     }
// })


// fs.readFile('./data2.txt', 'utf-8', (err, data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })


fs.unlink('./data2.txt', (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('arch eliminao');
    }
})