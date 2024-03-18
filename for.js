
const numbers = [4,2,5,7,2,9,6,8,3,7,5]
                // 0,1,2 ......... lemgt -1

                // console.log(numbers[5])

                // for(let i=0;i<numbers.length;i++){
                //     console.log("i",i,numbers[i])
                // }

const data = { a:10000000, b:2,c:6786,g:909}

console.log("a with []",data['a'])
console.log("a with .",data.a)

// const keys = ["a","b","c","g"]
const keys = Object.keys(data)
for(let i =0 ;i<keys.length;i++){
    console.log(keys[i])
    console.log(data[keys[i]])

}




