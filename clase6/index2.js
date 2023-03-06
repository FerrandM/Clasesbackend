const express = require('express')
console.log(express);

let obj = {}
for (let i = 1; i<= 10000; i++){
    let number = Math.ceil(Math.random()*20)
    console.log(number);

    if(!obj[number]){
        obj[number] = 1
    }else{
        obj[number] += 1
    }
}

console.log(obj);