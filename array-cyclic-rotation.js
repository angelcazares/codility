(function(){
    const codility = {};
    codility.cyclicRotation = { 
        /*
        An array A consisting of N integers is given. Rotation of the array means that each element 
        is shifted right by one index, and the last element of the array is moved to the first place. 
        For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted 
        right by one index and 6 is moved to the first place). */
        run : function(elements, k) {
            if( !this.isInputValid(elements, k) || elements.length === 1) {
                return elements;
            }

            let itemNumber = elements.length;
            var valuedCarried, temp;
            for(let shifts = 0; shifts < k; shifts++) {
                for(let idx = 0; idx < itemNumber ; idx++) {
                    if( idx === 0 ) {
                        valuedCarried = elements[ idx ];
                        elements[ idx ] = elements[ itemNumber - 1 ];
                    } else {
                        temp = elements[ idx ];
                        elements[ idx ] = valuedCarried;
                        valuedCarried = temp;
                    }
                }
            }
            return elements;
        },
        isInputValid : function(elements, k) {
            /* Check if the number is an integer */
            if( !Number.isInteger(k) ) {
                console.error("K must be a positive integer");
                return false;
            }

            /* Only positive numbers */
            if( k < 0 ) {
                console.error("K must be a positive integer");
                return false;
            }

            /* Array validation */
            if( !Array.isArray( elements) ) {
                console.error("The list is not a valid array");
                return false;
            }

            return true;
        }
    };

    /* Expose the algorithm to be accessible outside scope */
    if ( typeof window.codility === "undefined" ) {
        window.codility = codility;
    }
})();

// expected [1, 5, 6, 3]
codility.cyclicRotation.run([5, 6, 3, 1], 1);