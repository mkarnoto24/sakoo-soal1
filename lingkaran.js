function lingkaran(n, thisNumber) {
    var split = n / 2;
    var arrS = [];
    var arrB = [];
    var chk = 0;

    for (i = 0; i < split; i++) {
        arrS.push(i);
    }

    for (j = split; j < n; j++) {
        arrB.push(j)
    }

    if (4 <= n <= 20 && 0 <= thisNumber < n - 1 && n % 2 == 0) {
        if (thisNumber >= split) {
            n = arrB.indexOf(thisNumber)
            chk = arrS[n];
            console.log(chk)
        }
        else if (thisNumber < split) {
            n = arrS.indexOf(thisNumber);
            chk = arrB[n]
            console.log(chk)
        }
    }
}

lingkaran(4, 1)