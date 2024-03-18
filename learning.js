const objectArray={s:8,t:9,q:6};
console.log("ArrayObjects",objectArray);
console.log("ArrayObjectskeys",Object.keys(objectArray));


let objectKeys=Object.keys(objectArray);
for(i=0;i<objectKeys.length;i++){
    console.log("objectKeys",objectKeys[i]);
    var keys=objectKeys[i];
    console.log(keys);
    console.log("objectArray",objectArray[keys]);
}


const arrayObject={ d:4, e:5, f:6 };
console.log("object",arrayObject);
console.log("keys",Object.keys(arrayObject));

let arrayKeys=Object.keys(arrayObject);
for(i=0;i<arrayKeys.length;i++){
    console.log("arraykeys",arrayKeys[i]);
    var keys=arrayKeys[i]
    console.log(keys);
    console.log("arrayObject",arrayObject[keys]);
}

const array=[8,9,0,2,4,6,0];
for (num in array){
    console.log("forIn",num,array[num]);
}
const setA=[1,0,9,3,7,2,7];
for (i of setA){
    console.log("forOf",i)
}
const material=[{name:"Samsung",height:32,price:32000},{name:"Sony",height:42,price:42000},{name:"LG",height:52,price:78000}];
for(data of material){
    console.log("materialforOf",data);
    for (key in data){
        console.log("materialforIn",key,data[key]);
    }
}

