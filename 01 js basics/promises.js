//Creating a Promise
// let myPromise = new Promise((resolve, reject) => {
//     let success = false

//     if (success) {
//         resolve("Complted")
//     } else {
//         reject("Fail")
//     }

// });


function getdata(dataid, nextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            resolve("success")
            if (nextdata) {
                nextdata()

            }
        }, 2000)

    })
}
let result = getdata(20)
console.log(result);



const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        resolve("success");
        // reject("error");
    });
};
//use promise
let promisee = getpromise();
promisee.then((res) => {
    console.log("promise Fullfill", res);
})
promisee.catch((err) => {
    console.log("rejected", err);

})