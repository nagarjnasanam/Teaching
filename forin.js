//  for ... in
const numbers = [4,6,2,8,1]
// for in
for(num in numbers){
    console.log("num",num,numbers[num])
}


// for ..... of
for(num of numbers){
    console.log("by using of",num)
}



// usin=g default for loop
for(num =0 ;num<numbers.length;num++){
    console.log("numjhgggg",num)
}



// objects
const dataObject = { a:10000000, b:2,c:6786,g:909}
const cars = [{ name:"audi", color:"red"},{ name:"benz", color:"blue"},{ name:"lamborgini", color:"orange"}]


//for in

for(data in dataObject){
    console.log("uding for in",data,dataObject[data])
}

// for of
for(data of cars){
    console.log("for of",data)
    for(key in data){
        console.log("uding for in",key,data[key])
    }
}


