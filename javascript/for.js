// // let myarr=['shashank','rao','satheesh','shimoga'];
// // for (let i = 0; i < myarr.length; i++) {
// //     const element = myarr[i];
// //     console.log(element);
    
// // }

// // myarr.forEach((elements,index,array)=>{
// // console.log(`for loop elements ${elements} for loop index${index} for loop array${array}`);
// // });

// //filer methods 
// let numbers=[2,1,3,0,4,6,9,7,10,14,];
// let resuls=numbers.filter((val,index,arr)=>{
// return val >5;
// });
// console.log(resuls)

// let infolist=[
//     {name:'rao',skills:['java','c++','python']},
//     {name:'shashank',skills:['java','c++','c','javascript']},
//     {name:'gagan',skills:['java','c++','python']},
//     {name:'sri',skills:['java','c++','python']},
//     {name:'prakash',skills:['java','c++']},
// ]
// let resuls1=infolist.filter((val,index,array)=>{
//     return val.name.startsWith('s'),val.skills.includes('javascript');
        
// })
// console.log(resuls1);


//find method ================
let array2=[2,1,3,0,4,6,9,7,10,25,78];
let resuls2=array2.find((Element,index)=>{
    console.log(Element,index);
    return Element >10;
});
 console.log(resuls2);


// // find index methods=======================
// let array3=[2,1,3,0,4,6,9,7,10,25,78];
// let resuls3=array2.findIndex((Element,index)=>{
//     console.log(Element,index);
//     return Element >10;
// });
// console.log(resuls3);

// let array4=[12,4,2,85,96,77,44,46];
// //let result4=array4.indexOf(4);
// console.log(array4.indexOf(85));

// //=================join methods
// console.log(array4.join('@'));


// let infolist1=[
//        {name:'rao',skills:['java','c++','python']},
//          {name:'shashank',skills:['java','c++','c','javascript']},
//          {name:'gagan',skills:['java','c++','python']},
//          {name:'sri',skills:['java','c++','python']},
//         {name:'prakash',skills:['java','c++']},
//     ]
//     let result5=infolist1.map((val,index,arr)=>{
//        val.name ='hii..!  '+val.name;
//        val.skills='hard  '+val.skills;
//         return val;
//     })
//     console.log(result5);