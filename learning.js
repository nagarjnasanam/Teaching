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
