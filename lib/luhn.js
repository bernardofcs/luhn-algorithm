function check(value) {
    var checkTotal = 0;
    var digit = 0;
    var even = false;
    for (var n = value.length - 1; n >= 0; n--) {
        var digit5 = value.charAt(n),
            digit = parseInt(digit5, 10);
        if (even) {
            if ((digit = digit * 2) > 9) digit -= 9;
        }
        checkTotal += digit;
        even = !even;
    }
    return (checkTotal % 10) == 0;
}
console.log(check('371449635398431'));

module.exports = check;