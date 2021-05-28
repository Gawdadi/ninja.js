function recBubbleSort(arr,n) {

    // Return when all the iterations are done
    if(n===1) return arr;

        for(i = 0; i < n; i++) { 
            let firstElem = arr[i];
            let secondElem = arr[i+1];  
                if(arr[i+1] < arr[i]) {
                    arr[i+1] = firstElem;
                    arr[i] = secondElem;
                }
        }

   return recBubbleSort(arr,n-1);
}

// Example
// const arr = [-1,2,44,-4,0,8,6,1];
// const length = arr.length;
// console.log(recBubbleSort(arr,length));
// Output : [ -4, -1, 0, 1, 2, 6, 8, 44 ]