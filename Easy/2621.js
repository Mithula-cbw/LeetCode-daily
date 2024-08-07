/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const promise = new Promise(resolve => setTimeout(() =>{
        console.log("Hey was this text late?");
        resolve();
    },millis));
    return promise;
}

function doSomething(){
    for(let i = 0; i < 100; i++){
        console.log(i);
    }
}

console.log("starting..");
doSomething()
sleep(5000).then(() => {console.log("it's over!")});
console.log("now what's happening?")

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
//learning...
// function syncFunction() {
//     console.log("Start");
//     // Simulate a long-running task
//     // for (let i = 0; i < 1e8; i++) {
//     //     i +=1
//     // }
//     console.log("End");
//   }
//   syncFunction();