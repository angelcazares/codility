(function(){ 
    const codility = {};
    codility.binaryGap = {
        /*
            Get the bigger gap between two binary digits. 
            A binary gap within a positive integer N is any maximal sequence of consecutive zeros
            that is surrounded by ones at both ends in the binary representation of N.
            For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
        */
        run : function(value) {
            if( !this.validateUserInput( value ) ) {
                return;
            }
            let count =  this.iterateBinaryNumber(value, -1, 0);
            console.log(count);
            return count;
        },
        /*
            Iterate trough the binary digits
        */
        iterateBinaryNumber : function(value, prev, count) {
            let dig = Math.floor(value % 2);
            if(dig === 1) {
                prev = prev !== -1 ? ( prev > count ? prev : count ) : 0;
                count = 0;
            } else {
                count ++;
            }

            if( value > 1) {
                return this.iterateBinaryNumber( value / 2, prev, count);
            } else {
                return prev;
            }
        },
        /*
            Validate user input
        */
        validateUserInput : function(value) {
            /* Check if the number is an integer */
            if( !Number.isInteger(value) ) {
                console.error("The number is not an integer");
                return false;
            }

            /* Only positive numbers */
            if( value < 0) {
                console.error("The number is not positive");
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

codility.binaryGap.run(10);