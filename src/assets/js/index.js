module.exports = {
    //当前价格排序从低到高
    currentPrice: function (property) {
        return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }
    }
};