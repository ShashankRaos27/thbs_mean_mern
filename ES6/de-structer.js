// //es5

// let getinfo=()=>
// {
//     return{
//         op:"plus",
//         lhs:"leftside",
//         rhs:"rightside"
//     }
// }
// // var tmp = getinfo();
// // console.log(tmp);
// // var op = tmp.op;
// // var lhs = tmp.lhs;
// // var rhs = tmp.rhs;



// // es6
// let{op,lhs,rhs}=getinfo();
// console.log(op,lhs,rhs);


let com={
    name:'info',
    noemp:100,
    found:2021,
    address:{
        premt:{
            city:"shimoga"
        },
        current:{
            city:'mysore',
            pin:577205
        }
    }
};
let{name,address:{current:{city}},address:{current:{pin}}}=com;
console.log(name,city,pin);