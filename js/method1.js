//no arguments no returns 
function display(){
    console.log("Hello, World!");
}
display();
console.log("Hello Js");

//with arguments with returns
function add(a,b){
    let c=a+b;
    return c;
}
let ans =add(10,23);
console.log("See u",ans);


function add(a,b){
    let c=a+b;
    console.log("hello")
}

add(10,23);
console.log("See u");

function add(){
    console.log("hello")
    return 10;
}

let res=add();
console.log("See u",res);   
