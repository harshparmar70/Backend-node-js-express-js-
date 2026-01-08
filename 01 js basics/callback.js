// A callback is a function passed as an argument to another function, which is executed later.
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumcallback) {
    sumcallback(a, b);
}

calculator(10, 20, sum);

function sayhello() {
    console.log("Hello");

}

setTimeout(sayhello, 2000)