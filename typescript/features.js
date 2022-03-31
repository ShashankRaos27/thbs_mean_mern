var Features = /** @class */ (function () {
    function Features() {
    }
    Features.prototype.getFeaturesList = function (list, key) {
        return list.filter(function (ele, index, array) {
            return ele.name.includes(key || 'constructor');
        });
    };
    return Features;
}());
var list = [
    { name: 'generics datatype' },
    { name: 'access modifers' },
    { name: 'constructor' }
];
var obj = new Features();
console.log(obj.getFeaturesList(list));
