function wait() {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 seconds passed"), 2000);
    });
}

async function run() {
    const msg = await wait();
    console.log(msg);
}
run();

console.log("harshS");