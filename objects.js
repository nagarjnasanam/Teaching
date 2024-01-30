let carweight=1000;
function stop(){
    let method="Car was Stopped";
    return method;
}

const car={
    type:"Car",
    color:"white",
    weight:carweight,
    start: function(){
        let action="Car start";
        return action;
    },
    stop: stop,
    doubleWeight: function(){
        return this.start();
    }
}

console.log("Car type",car.type);
console.log("car color",car['color']);
console.log("action of car",car.start());
console.log("Car stop action",car.stop());
console.log("doubleweight",car.doubleWeight());