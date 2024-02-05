function start(){
    let action="Oct 16,2010";
    return action;
}


const socialMedia={
    name:"Insta",
    user:"Human Beings",
    type:"Internet",
    ratings:"10/10",
    fullname: function(){
        let totalname=this.name;
        return totalname;
    },
    start:start,
    stop: function(){
        let method="Still in active"
        return method;
    }
}

console.log("name",socialMedia.name);
console.log("rates",socialMedia["ratings"]);
console.log("srt",socialMedia.start());
console.log("fname",socialMedia.fullname());
console.log("type",socialMedia.type);
console.log("stp",socialMedia.stop());
console.log("HBS",socialMedia["user"]);


