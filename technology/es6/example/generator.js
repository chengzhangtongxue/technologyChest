{
    function* doSome() {
        console.log(2323);
        while(true) {
            yield Math.random()*100;
        }
    }
    doSome();
    var price = 100,limitPrice = 15;
    while(price > limitPrice) {
        var price = doSome().next().value;
        console.log(price);
    }
}