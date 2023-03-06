const obj1 = {
    propp1: 12,
    propp2: 'd',
    propp3: '3'
}

const obj2 = {
    propp1: 'doce',
    propp2: 'a',
    propp4: true
}

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let array = []
objetos.forEach(element => {
    let claves = Object.keys(element)
    console.log(claves);
    for( let i = 0; i < claves.length; i++){
        if (array.includes(claves[i]) === false){
            array.push(claves[i])
        }
    }
});

console.log(array);