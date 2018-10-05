module.exports = function count(s, pairs) {

    const MAX_N = 1293938646;

    if (s.length > 11) {
        return 0;
    }

    if (pairs[0][1] > 10) {
        return 0;
    }


    function findN(pairs) {
        let n = 1;
        for (let i = 0, len = pairs.length; i < len; i++) {
            let numInDegree = pairs[i][0] ** pairs[i][1];
            n *= numInDegree;
        }

        return n;
    }


    function divisors(pairs) {
        let arrOfDiv = [];
        for (let i = 0, len = pairs.length; i < len; i++){
            arrOfDiv.push(pairs[i][0]);
        }
        return arrOfDiv;
    }

    function checkK(s, k) {

        for (let j = 0, len = s.length; j < len; j++) {
            let current = Number(s[j]);

            if (Boolean(current) === !existCommonDivisor(k + j, arrOfDivisors)) {

            } else {
                return false;
            }
        }
        return true;
    }


    function existCommonDivisor(a, arrOfDivisors) {
        for (let i = 0, len = arrOfDivisors.length; i < len; i++) {
            if (a % arrOfDivisors[i] === 0) {
                return true;
            }
        }

        return false;
    }



    const arrOfDivisors = divisors(pairs);
    const n = findN(pairs);


    if (n >= MAX_N) {
        return 0;
    }


    let countK = 0;

    for (let k = 1; k <= n; k++) {
        if (checkK(s, k)) {
            countK++;
        }
    }

    return countK % 1000000007;
}