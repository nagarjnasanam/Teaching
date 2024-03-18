const object = {a:290, b:250, c:56};
console.log(object.a);
console.log("object",object);

let keys=Object.keys(object);
for(i=0;i<keys.length;i++){
    // console.log("objectKeys",keys[i]);
    var key=keys[i];
    console.log(key,object[key]);
}

