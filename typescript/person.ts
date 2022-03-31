class person{
    firstName="";
    lastName="";

    constructor(firsName,lastName)
    {
        console.log(firsName,lastName);
       this.firstName= firsName;
       this.lastName=lastName;
    }
    myNameIs(){
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYouTell()
    {
        return `hiii ${this.myNameIs()}`;

    }
}

// let ram=new person('shashank', 'rao');
// let resul=ram.whoAreYouTell();
// console.log(resul);
class Student extends person{
    course;
    constructor(firstName,lastName,course)
    {
        super(firstName,lastName);
        this.course=course;
    }
    whoAreYouTell(){
        return `${super.whoAreYouTell()} i'm learning ${this.course}`;
        
    }
    getCourseDetail()
    {
        return `${this.course}`;
    }
}
let std=new Student('shashank','rao','MEAN');
console.log('student details ==>'+std.whoAreYouTell());