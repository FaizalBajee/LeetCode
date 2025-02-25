function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if (next && current < next) {
            total -= current;  // Subtract if a smaller value appears before a larger one
        } else {
            total += current;  // Otherwise, add the value
        }
    }

    return total;
}

// Test cases
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994

console.log("HI")
