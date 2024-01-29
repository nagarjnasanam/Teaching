let carName="Lamborgini";

const person={firstName:"Madhuri",surName:"Gurram",qualification:"MBA"};

console.log("My name is"+" "+person.firstName+" "+"I'm pursuing "+person.qualification);

const personaldetails={
                firstName:"Madhu",
                surName:"G",
                qualification:"MBA",
                fullname : function(){
                    return this.surName +" "+ this.firstName;
                }
            };

            console.log(personaldetails.fullname());

function details(){
    return "It's me"+person.firstName,"I have Master Degree in" +" "+person.qualification;
    

};

console.log(details())


function sub(a){
    return a-1
}

var result=sub(5);
console.log(result);

//   a,b,c   c=a-b
function num(a,b,c){
    return c=a-b
}

var res=num(4,9,6);
console.log(res);

let a=3;
let b=5;

if (a==b){
  console.log("True")
}
else{
   console.log("False")
}


// a>10 T a<F

function myFunction(a){
    if (a>=10){
        console.log("True")
        return true;
    }
    else{
        console.log("zambo","False")
        return false;
    }
    
}

console.log("result",myFunction(10));

function evenOdd(b){
    if (b%2==0){
        console.log("Even")
        return 'Even Number';
    }
    else{
        console.log("Odd")
        return 'Odd Number';
    }
}

let result1=evenOdd(10);
console.log("evenOdd",result1);