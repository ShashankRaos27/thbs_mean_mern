// let myarr=['shashank','rao','satheesh','shimoga'];
// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element);
    
// }

// myarr.forEach((elements,index,array)=>{
// console.log(`for loop elements ${elements} for loop index${index} for loop array${array}`);
// });

//filer methods 
let numbers=[2,1,3,0,4,6,9,7,10,14,];
let resuls=numbers.filter((val,index,arr)=>{
return val >5;
});
console.log(resuls)

let infolist=[
    {name:'rao',skills:['java','c++','python']},
    {name:'shashank',skills:['java','c++','c','javascript']},
    {name:'gagan',skills:['java','c++','python']},
    {name:'sri',skills:['java','c++','python']},
    {name:'prakash',skills:['java','c++']},
]
let resuls1=infolist.filter((val,index,array)=>{
    return val.name.startsWith('s'),val.skills.includes('javascript');
        
})
console.log(resuls1);