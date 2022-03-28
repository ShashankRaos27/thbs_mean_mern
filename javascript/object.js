let smobject={
 fname:'shashank',
 lname:'rao',
 address:{
     presentadd:{
         city:'shimoga',
         state:'karnatka'
     },
     premntadd:{
         pincode:577205,
         area:'shimoga'
     }
 }
};
console.log(smobject.fname);
console.log(smobject.address.premntadd.area);
smobject.address.presentadd.state='karanataka';
console.log(smobject.address.presentadd.state);