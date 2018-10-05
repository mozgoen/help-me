module.exports = function count(s, pairs) {
    function findN(pairs) {
        let n = 1;
        for (let i = 0, len = pairs.length; i < len; i++) {
            let numInDegree = pairs[i][0] ** pairs[i][1];
            n *= numInDegree;
        }
        console.log('n', n);
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


    let countK = 0;

    for (let k = 1; k <= n; k++) {
        if (checkK(s, k)) {
            // console.log(k)
            countK++;
        }
    }
    console.log(countK, ' res ', countK % 1000000007);
    return countK % 1000000007;
}