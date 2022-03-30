function addMesg(msg){
console.log("message will be displayed");
//let result =msg();
//console.log(result)
console.log(msg());
};
function hello(){
return 'hello shashank';
};
addMesg(hello);
// ====================

function addNUmber(nmb){
    console.log(nmb());

}

function add(){
    return 80+50;
}
addNUmber(add);
// ===============


function mulres(res)
{
    console.log(res());
}

function mul(){
    return 100*85;
}

mulres(mul);