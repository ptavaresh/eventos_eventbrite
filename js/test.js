console.log('sjsje');
let lista1 = [1,2,5,6,9,20,11,10];
let lista2 = [3,9,6,4,8,2,1,0];

let miset = new Set();
//miset.add(lista1)
//miset.add(lista2)

for(i in lista1) {
    miset.add(lista1[i]);
}
console.log(miset);
for(x in lista2) {
    miset.add(lista2[x]);
}
console.log(miset);


//maps

let paciente = new Map();

paciente.set('nombre', 'Pedro');
paciente.set('nombre', 'Pablo');
paciente.set('nombre', 'Pablo');

console.log(paciente)