class person{
    constructor(private fname:any,private lname:any)
    {
        
    }
    getName(){
        console.log(this.fname+" "+this.lname)
    }
}
let per=new person('shashank','satheesh');
per.getName();