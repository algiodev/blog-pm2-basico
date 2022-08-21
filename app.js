function wait(ms = 5000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    while (true) {
        console.log('hello');
        await wait();
    }
}

init();

