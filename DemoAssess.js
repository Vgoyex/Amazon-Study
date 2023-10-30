/*
(0,1,2,3,4,5,6,7,8,9)   op=[[0,9],[3,6]]

9,1,2,3,4,5,6,7,8      [0,9]

1,2, 6,5,4,3, 7,8,9    [3,6]
*/
function performOperations(arr, operations) {
    // Write your code here
    if(!arr || !operations){
        return `Invalid argument arr: ${arr} operations: ${operations}`;
    }

    let newArr = [];
    let replacedArr = [];
    //Just for operations array
    for(let i = 0; i < operations.length ;i++){
            let j = i - 1;
            let opi = operations[i];
            let tt = [];
            let arrMiddle = [];
            let arrLeft = [];
            let arrRight = [];
            if(opi[i]==0){
                // arrLeft = [arr.slice(arr.length,opi[i-1])];
                // arrRight = [arr.slice(opi[i+1],opi[arr.length])];
                // arrMiddle = [arr.slice(opi[i],opi[i+1])];  
                arrLeft = [arr.slice(arr.length,opi[i-1])];
                arrRight = [arr.slice(opi[i+1],opi[arr.length])];
                arrMiddle = [arr.slice(opi[i],opi[i+1])];  
                tt = arrMiddle[0].reverse();
            }else{
                // arrLeft = [arr.slice(arr[-1],arr.indexOf(opi[i-1]))];
                // arrRight = [arr.slice(opi[i],opi[arr.length])];
                // arrMiddle = [arr.slice(arr.indexOf(opi[i-1]),opi[i])];
                arrLeft = [arr.slice(arr[-2],arr.indexOf(opi[i-1]))];
                arrRight = [arr.slice(opi[i],opi[arr.length])];
                arrMiddle = [arr.slice(arr.indexOf(opi[i-1]),opi[i])];
                tt = arrMiddle[0].reverse();
            }
            replacedArr = replacedArr.concat(arrLeft[0],tt,arrRight[0]);
            newArr = newArr.concat([replacedArr]);
            replacedArr = [];

    }
    return [newArr];
}
performOperations([1,2,3,4,5,6,7,8,9],[[0,9],[3,6],[4,5],[2,3]])
