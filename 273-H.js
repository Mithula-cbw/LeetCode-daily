/**
 * @param {number} num
 * @return {string}
 * 
 * 
 */

 console.log("testing..")


 var numberToWords = function(num) {
    if (num === 0) return 'Zero';
    
    const belowTwenty = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 
        'Eighteen', 'Nineteen'
    ];
    
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
    
    const thousands = ['', 'Thousand', 'Million', 'Billion'];
    
    const numberToWordsHelper = (n) => {
        if (n === 0) return '';
        if (n < 20) return belowTwenty[n];
        if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + belowTwenty[n % 10] : '');
        if (n < 1000) return belowTwenty[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' ' + numberToWordsHelper(n % 100) : '');
        
        for (let i = 0; i < thousands.length; i++) {
            let divisor = Math.pow(1000, i + 1);
            if (n < divisor) {
                return numberToWordsHelper(Math.floor(n / (divisor / 1000))) + ' ' + thousands[i] + (n % (divisor / 1000) !== 0 ? ' ' + numberToWordsHelper(n % (divisor / 1000)) : '');
            }
        }
    };

    return numberToWordsHelper(num).trim();
};





console.log(numberToWords(45)); 
console.log(numberToWords(675)); 
console.log(numberToWords(12345)); 
console.log(numberToWords(234617)); 
console.log(numberToWords(23453)); 
console.log(numberToWords(2345678)); 

