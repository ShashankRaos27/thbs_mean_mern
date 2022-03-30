let pom=new Promise((resolve,reject)=>{
    resolve('finally learned promise wow...!!! shashank');
});
pom.then((sucess)=>
{
    console.log(`${sucess}`);
},
(error)=>{
    console.log(`${error}`);
}
);