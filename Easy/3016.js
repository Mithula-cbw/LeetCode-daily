// // [Minimum Number of Pushes to Type Word II]
// (https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/)

const word = "aabbccddeeffgghhiiiiii"; //test case output - 24

var minimumPushes = function(word) {

    const frequency = {};

    for(let letter of word){
        if(frequency[letter]){
            frequency[letter]++;
        }else{
            frequency[letter] = 1;
        }
    }

    const frequencies = Object.values(frequency).sort((a, b) => b - a);

    // console.log(frequencies);

    let totalPushes = 0;
    const groupSize = 8; //8 buttons

    for (let i = 0; i < frequencies.length; i++) {
        const groupIndex = Math.floor(i / groupSize); 
        totalPushes += frequencies[i] * (groupIndex + 1);
    }

    return totalPushes;

}

console.log(minimumPushes(word)); //24