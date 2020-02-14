function hartaKarun(val1, weight1, val2, weight2, maxKeranjang) {
    // var max = 0;

    if (1 <= val1 <= 20 && 1 <= val2 <= 20 && 1 <= weight1 <= 20 && 1 <= weight2 <= 20 && 0 <= maxKeranjang <= 20) {
        if (weight1 + weight2 <= maxKeranjang) {
            return (max = val1 + val2);
        }
        if (Math.min(weight1, weight2) > maxKeranjang) {
            return (0);
        }
        if (weight1 <= maxKeranjang && (val1 >= val2 || weight2 > maxKeranjang)) {
            return (val1)
        }
        return (val2);
    }
}
var hk = hartaKarun(7, 4, 12, 6, 8);
var hk = hartaKarun(8, 8, 1, 1, 9);
console.log(hk);