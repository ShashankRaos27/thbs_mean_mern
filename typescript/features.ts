class Features{
    
    getFeaturesList(list:object[],key?:string|number)
    {
        return list.filter((ele:any,index,array)=>
        {
            return ele.name.includes(key);
        });
        
    }
}
let list=[
    {name:'generics datatype'},
    {name:'access modifers'},
    {name:'constructor'}
]
let obj:Features=new Features();

console.log(obj.getFeaturesList(list));