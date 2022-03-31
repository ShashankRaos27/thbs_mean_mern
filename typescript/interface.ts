interface Demo{
    fname:string;
    lname:string;
    list:Array<Number>; 
    isPresent?:Function   //?--->optional property

}
class Person implements Demo{
    fname: 'shashank';
    lname: 'shimoga';
    list: [2,4,6,8,10];
}