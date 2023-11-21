    function findDistinctSum(set1, set2) {
        let distinctSum = 0;
        let seenElements = {};
    
        for (const element of set1) {
        if (!seenElements.hasOwnProperty(element)) {
            distinctSum += element;
            seenElements[element] = true;
        }
        }
    
        for (const element of set2) {
        if (!seenElements.hasOwnProperty(element)) {
            distinctSum += element;
            seenElements[element] = true;
        }
        }
    
        return distinctSum;
    }
    
    const set1 = [3, 1, 7, 9];
    const set2 = [2, 4, 1, 9, 3];
    const distinctSum = findDistinctSum(set1, set2);
    console.log("Distinct sum:", distinctSum); // Output: 13
    

        function dotProduct(vector1, vector2) {
            let dotProduct = 0;
        
            for (let i = 0; i < vector1.length; i++) {
            dotProduct += vector1[i] * vector2[i];
            }
        
            return dotProduct;
        }
        