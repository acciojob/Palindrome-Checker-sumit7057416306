function palindrome(str){
    let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return s === s.split("").reverse().join("");
}
console.log(palindrome("racecar")); // Output: true
console.log(palindrome("RaceCar")); // Output: true
console.log(palindrome("raceCAR")); // Output: true
console.log(palindrome("hello")); // Output: false

module.exports = palindrome
