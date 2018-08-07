const codility = {}; 
(function(){
    codility.tapeEquilibrium = {
        /*
            A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
            Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
            The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
            In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
        */
        run : function(elements) {
            if( !Array.isArray( elements ) ) {
                throw "Elemens is not an array"
            }

            if( elements.length < 2 ) {
                throw "Array length must contain at least two values";
            }

            let sumRight = elements.reduce(function(acc, val) { return acc + val; }, 0);
            let sumLeft = 0;
            let difference = 0;
            let tmpDifference = 0;
            for(let idx = 0; idx < elements.length - 1; idx++) {
                sumLeft += elements[ idx ];
                sumRight -= elements[ idx ];
                tmpDifference = Math.abs( sumLeft - sumRight );
                difference = idx === 0 ? tmpDifference : ( tmpDifference < difference ? tmpDifference : difference );
            }

            return difference;
        }
    }
})();

function solution(A) {
    return codility.tapeEquilibrium.run(A);
}