var person = /** @class */ (function () {
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    person.prototype.getName = function () {
        console.log(this.fname + " " + this.lname);
    };
    return person;
}());
var per = new person('shashank', 'satheesh');
per.getName();
