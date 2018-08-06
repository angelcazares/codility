(function () {
    const codility = {};
    codility.frogJump = {
        /*
            frogJump: A small frog wants to get to the other side of the road. 
            The frog is currently located at position X and wants to get to a position greater than or equal to Y.
            The small frog always jumps a fixed distance, D.
            Count the minimal number of jumps that the small frog must perform to reach its target.
        */
        run : function(x, y, d) {
            return Math.ceil(( y - x ) / d);
        }
    }

    /* Expose the algorithm to be accessible outside scope */
    if ( typeof window.codility === "undefined" ) {
        window.codility = codility;
    }
})();

//expected result: 1
codility.frogJump.run(5, 9, 3);