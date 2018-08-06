(function() {
    const codility = {};
    codility.oddOcurrences = {
        /*
            OddOccurrencesInArray: A non-empty array A consisting of N integers is given.
            The array contains an odd number of elements, 
            and each element of the array can be paired with another element that has the same value, 
            except for one element that is left unpaired.
        */
        run : function(elements) {
            if(!this.isValidArray(elements)) {
                return;
            }

            const tmp = {};
            const arrayLength = elements.length;
            let tmpName;
            for(let idx = 0; idx < arrayLength; idx++) {
                tmpName = "item_" + elements[ idx ];
                tmp[ tmpName ] = tmp[ tmpName ] || {};
                tmp[ tmpName ].count = tmp[ tmpName ].count !== undefined? tmp[ tmpName ].count + 1 : 1;
                tmp[ tmpName ].value = elements[ idx ];
            }

            const filteredKeys = Object.keys(tmp)
                .filter( (obj) => { 
                    return tmp[ obj ].count % 2 === 1;
                });

            if( filteredKeys.length === 0 ) {
                throw new error("No odd values found");
            }

            return tmp[ filteredKeys[ 0 ] ].value;
        },
        isValidArray : function(elements) {
            /* Array validation */
            if( !Array.isArray( elements) ) {
                console.error("The list is not a valid array");
                return false;
            }

             /* Array validation */
             if( elements.length % 2 === 0 ) {
                console.error("The list does not contain an odd length");
                return false;
            }

            return true;
        }
    }

    /* Expose the algorithm to be accessible outside scope */
    if ( typeof window.codility === "undefined" ) {
        window.codility = codility;
    }
})();

//expected result: 1
codility.oddOcurrences.run([5, 5, 3, 3, 1]);