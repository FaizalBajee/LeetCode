var isPalindrome = function(x) {
    let rev=x.toString().split('').reverse().join('');
    console.log(rev)
    if(x == rev){
        return true;
    }
    return false
};
isPalindrome(121)