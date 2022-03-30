// function sayhello(){
//     return 'hello'
// }
// function addNumber(funarg){
//     console.log('i m inside add addNumber');
//     let msg=funarg();
//     console.log(msg);
//     return 10+5
// }
// addNumber(sayhello);


// function add(ad){
//     return 5+65;
// }
// function result(res)
// {
//    let s=res();
//    console.log(s);
// }
// result(add)
// function mul()



// function greet(name) {
//     alert('hello ' + name);
// }
// function process(callback) {
//     var name = prompt('enter your name');
//     callback(name);
// }
// process(greet);

function add(res){
    console.log(res);
}
function result(par){
    let s=2+5;
    par(s);
}
result(add)

function mul(r)
{
    console.log(r)
}
function mult(pr)
{
    let q=5*5;
    pr(q)
}
mult(mul)


function div(g)
{
    console.log(g)
}
function divi(prr)
{
    let d=25/5;
    prr(d)
}
divi(div)

