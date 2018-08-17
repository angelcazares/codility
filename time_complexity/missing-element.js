(function () {
    const codility = {};
    codility.missingElement = {
        /*
            missingElement:An array A consisting of N different integers is given. 
            The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
        */
        run : function(elements) {

            let sum = 0;
            let n = elements.length + 1;
            for(let idx = 1; idx <= n; idx++ ) {
                sum += idx;
                sum -= idx < n ? elements[idx - 1] : 0;
            }
            return sum;
        }
    }

    /* Expose the algorithm to be accessible outside scope */
    if ( typeof window.codility === "undefined" ) {
        window.codility = codility;
    }
})();

//expected result: 2
codility.missingElement.run([1, 3, 4]);