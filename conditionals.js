let a=20;

if (a<8){
    console.log("if condition","Good Morning");
}else if  (a<30){
    console.log("if condition","Good Night");
}else{
    console.log("if condition","Good Afternoon");
}

let day=3;
switch(day){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    default:
        day="Next of Weekend";
}
console.log("DAY",day);


for (i=0;i<5;i++) {
    console.log("for",i);
}

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


const myObject = { a: 1, b: 2, c: 3 };
/*console.log("object",myObject);
console.log("object keys",Object.keys(myObject));*/

let keysArray=Object.keys(myObject)
for (i=0;i<keysArray.length;i++){
    console.log("arraykeys",keysArray[i]);
    var key=keysArray[i];
    console.log(key);
    console.log("myobject",myObject[key])
}

