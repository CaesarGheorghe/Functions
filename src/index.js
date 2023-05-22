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
function filter(items, predicate) {
    var result = [];
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}
var j = ["1", "2", "3"];
console.log(filter(j, function (x) { return x !== "2"; }));
function reduce(items, initValue, f) {
    var acc = initValue;
    for (var k_1 = 0; k_1 < items.length; k_1++) {
        acc = f(acc, items[k_1]);
    }
    return acc;
}
var k = ["1", "2", "3"];
var result = reduce(k, "", function (acc, x) { return acc + x; });
console.log(result);
