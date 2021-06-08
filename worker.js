
onmessage = function () {

    let final = 0;
    for (let i = 0; i < 1000000000; i++) {
        final += i
    }
    postMessage(final)
}