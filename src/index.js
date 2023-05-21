function map(items, f) {
    var result = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var r = f(item);
        result.push(r);
    }
    return result;
}
var i = ["1", "2", "3"];
console.log(map(i, function (x) { return x + "1"; }));
