var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(firsName, lastName) {
        this.firstName = "";
        this.lastName = "";
        console.log(firsName, lastName);
        this.firstName = firsName;
        this.lastName = lastName;
    }
    person.prototype.myNameIs = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    person.prototype.whoAreYouTell = function () {
        return "hiii ".concat(this.myNameIs());
    };
    return person;
}());
// let ram=new person('shashank', 'rao');
// let resul=ram.whoAreYouTell();
// console.log(resul);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.whoAreYouTell = function () {
        return "".concat(_super.prototype.whoAreYouTell.call(this), " i'm learning ").concat(this.course);
    };
    Student.prototype.getCourseDetail = function () {
        return "".concat(this.course);
    };
    return Student;
}(person));
var std = new Student('shashank', 'rao', 'MEAN');
console.log('student details ==>' + std.whoAreYouTell());
