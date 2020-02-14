function pengendara_malam(n) {
    // var n = 312;
    var h = 0;
    var num = 0;
    // var res=0;
    var sum = 0;
    for (i = 0; i < 100; i++) {
        if (n >= 60) {
            n = n - 60;
            h++;
        }
    }
    num = h + "" + n;

    while (num > 0) {
        sum = sum + num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

pengendara_malam(312);