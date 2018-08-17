
const codility = {};
(function(){
    codility.permCheck = {
        run : function(elements) {

            elements = elements.sort();
            for(let idx = 1; idx <= elements.length ; idx++) {
                if( elements[ idx - 1 ] != idx ) {
                    return 0;
                }
            }

            return 1;
        }
    }
})();

function solution(A) {
    return codility.permCheck.run(A);
}