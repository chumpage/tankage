var assertTrue = function(condition) {
    if (!condition) {
        console.trace()
        throw "assertion failed"
    }
}
