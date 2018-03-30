const {LinkedList} = require('./linkedlist');

var a;

function setup() {
    a = new LinkedList();
}

function test_append() {
    a.append("test");

    return a.firstNode.value === "test";
}

function test_get() {
    a.append("test");

    return a.get(0) === "test";
}

function run_tests() {
    setup();
    console.log(test_append() && test_get());
}


run_tests();