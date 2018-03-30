function insertionsort(unsorted) {

    if(unsorted.length === 0) {
        return [];
    }

    let pivot = unsorted[0]
    let left = []
    let right = []
    
    for(let i = 1; i < unsorted.length; i++) {
        if(unsorted[i] <= pivot) {
            left.push(unsorted[i]);
        } else {
            right.push(unsorted[i]);
        }
    }

    return insertionsort(left).concat([pivot].concat(insertionsort(right)));
}

b = []

for(let i = 0; i < 10; i++) {
    a = Math.round(Math.random() * 10)
    b.push(a)
}

console.log(b)
console.log(insertionsort(b))