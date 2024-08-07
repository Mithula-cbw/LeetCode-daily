/**
 * @param {number} num
 * @return {string}
 * 
 * 
 */

//  console.log("testing..")


//  var numberToWords = function(num) {
//     if (num === 0) return 'Zero';
    
//     const belowTwenty = [
//         'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 
//         'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 
//         'Eighteen', 'Nineteen'
//     ];
    
//     const tens = [
//         '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
//     ];
    
//     const thousands = ['', 'Thousand', 'Million', 'Billion'];
    
//     const numberToWordsHelper = (n) => {
//         if (n === 0) return '';
//         if (n < 20) return belowTwenty[n];
//         if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + belowTwenty[n % 10] : '');
//         if (n < 1000) return belowTwenty[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' ' + numberToWordsHelper(n % 100) : '');
        
//         for (let i = 0; i < thousands.length; i++) {
//             let divisor = Math.pow(1000, i + 1);
//             if (n < divisor) {
//                 return numberToWordsHelper(Math.floor(n / (divisor / 1000))) + ' ' + thousands[i] + (n % (divisor / 1000) !== 0 ? ' ' + numberToWordsHelper(n % (divisor / 1000)) : '');
//             }
//         }
//     };

//     return numberToWordsHelper(num).trim();
// };


const numberToWords = function(num){
        
    let result ="";
    if( num === 0){
        return "Zero";
    }
    

    const under20 = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 
                     'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 
                     'Eighteen', 'Nineteen'];

                     const tens = [
                                '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

        const toWordsHundred = function(number){
            
            if(number<20){
                return under20[number];
            }else
            if(number<100){
                return tens[Math.floor(number/10)] + (number%10 === 0? ' ': ' ' + toWordsHundred(number%10));
            }else if(number<=1000){
                return under20[Math.floor(number/100)] + " Hundred" + (number%100 === 0 ? ' ': ' ' + toWordsHundred(number%100));
            }
            
        }

        if(num > 1000){
            if(num > 1e9){
                result += toWordsHundred(Math.floor(num/1e9)) + ' Billion ';
                num %= 1e9;
            }

            if(num > 1e6){
                result += toWordsHundred(Math.floor(num / 1e6)) + ' Million ';
                num %= 1e6;
            }
            if(num > 1e3){
                result += toWordsHundred(Math.floor(num/1e3)) + ' Thousand ';
                num %= 1e3;
                }
            }
            result += toWordsHundred(num);
            return result; 
        }
        
        


console.log(numberToWords(0)); 
console.log(numberToWords(4)); 
console.log(numberToWords(45)); 
console.log(numberToWords(100)); 
console.log(numberToWords(675)); 
console.log(numberToWords(12345)); 
console.log(numberToWords(234617)); 
console.log(numberToWords(23453)); 
console.log(numberToWords(2345678)); 

