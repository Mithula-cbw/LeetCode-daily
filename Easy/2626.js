/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    
    nums.forEach(num =>{
         val = fn(val,num);
    });
    return val;
 };

 function sum(accum, curr) { return accum + curr; }
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,100));
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,10));
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,1000));
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,1));
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,1200));
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,1040));
 console.log(reduce([2,3,4,5,6,7,1,3,4,9],sum,0));