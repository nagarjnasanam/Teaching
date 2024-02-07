const car={name:"Audi",colour:"Red",weight:3000,speed:"70kmp"}
console.log(car["name"]);
let carKeys=Object.keys(car);
for(i=0;i<carKeys.length;i++){
    var key=carKeys[i];
    console.log(key,car[key])
}