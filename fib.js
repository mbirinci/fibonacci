function* fib() {
    let _prev = 0
    let _next = 1
    while(true){
        let current = _prev;
        _prev = _next;
        _next += current;
        yield current
    }
}

const fibSeq = fib();

module.exports = () => {
    return fibSeq.next().value;
}