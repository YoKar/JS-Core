function aggregate(arr) {
    function aggregate(arr  , start, func) {
        for (let e of elements) {
            start=func(start,e);
        }
        return start;
    }

    console.log(aggregate((arr, 0, (a, b) => a + b)));
    console.log(aggregate((arr, 0, (a, b) => a +1/b)));
    console.log(aggregate((arr, '', (a, b) => a + b)));
}
aggregate([1, 2, 3]);