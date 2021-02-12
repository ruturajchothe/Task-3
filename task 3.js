/*Do the below programs in anonymous function and IIFE
Print odd numbers in an array 
Convert all the strings to title caps in a string array
Sum of all numbers in an array 
Return all the prime numbers in an array
Return all the palindromes in an array 
Return median of two sorted arrays of same size 
Remove duplicates from an array 
Rotate an array by k times and return the rotated array*/

/*Print odd numbers in an array*/

let oddNumFunc = function (arr){
    for(let i in arr){
        if(arr[i] % 2 !== 0){
            console.log(arr[i]);
        }
    }
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
oddNumFunc(arr);

(function (arr){
    for(let i in arr){
        if(arr[i] % 2 !== 0){
            console.log(arr[i]);
        }
    }
})(arr);
/*=========================================================*/

/*Convert all the strings to title caps in a string array*/
let stringList = ["asd","fgh"];
let capitalizeStringsInArray = function(arr){
    for(let i in arr){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
}
console.log(capitalizeStringsInArray(stringList));

let iifeCapitalizeFuncresult = (function(arr){
    for(let i in arr){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
})(stringList);
console.log(iifeCapitalizeFuncresult);
/*=========================================================*/
/*Sum of all numbers in an array */

let sumFunc = function (arr){
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    console.log("Sum is : " + sum);
};
sumFunc(arr);

(function (arr){
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    console.log("Sum is : " + sum);
})(arr);
/*=========================================================*/

/*Return all the prime numbers in an array*/

let primeInarr = function (arr){
    let primeNums = [];
    for(let i in arr){
        let flag = true;
        let num = arr[i];
        if(num > 1){
            for(let i = 2; i < num; i++){
                if(num % i === 0){
                    flag = false;
                    break;
                }
            }
        }
        if(num > 1 && flag){
            primeNums.push(num);
        }
    }
    return primeNums;
};
console.log(primeInarr(arr));

let iifePrimeResult = (function (arr){
    let primeNums = [];
    for(let i in arr){
        let flag = true;
        let num = arr[i];
        if(num > 1){
            for(let i = 2; i < num; i++){
                if(num % i === 0){
                    flag = false;
                    break;
                }
            }
        }
        if(num > 1 && flag){
            primeNums.push(num);
        }
    }
    return primeNums;
})(arr);
console.log(iifePrimeResult);
/*=========================================================*/

/*Return all the palindromes in an array */
let ar = ['ababa', 'ruturaj', 'anna', 'civic'];
let palindromeInArray = function(arr){
    let palindromes = [];
    for(let i in arr){
        let temp = arr[i].split("").reverse().join("");
        if(temp == arr[i]){
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
};
console.log(palindromeInArray(ar));

let iifePalindromeResult = (function(arr){
    let palindromes = [];
    for(let i in arr){
        let temp = arr[i].split("").reverse().join("");
        if(temp == arr[i]){
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
})(ar);
console.log(iifePalindromeResult);
/*===========================================================*/

/*Return median of two sorted arrays of same size*/
 let ar1 = [1, 2, 3, 4, 5, 6, 7];
 let ar2 = [10, 20, 30, 40, 50, 60, 70];

let medianOf2Arrays = function(ar1, ar2){
    let array = ar1.concat(ar2);
    array.sort((a, b) => (a-b));
    let mid1 = array.length / 2;
    let mid2 = mid1 - 1;
    let result = (array[mid1] + array[mid2]) / 2;
    return result;
};
console.log(medianOf2Arrays(ar1, ar2));

let iifeMedianFuncResult = (function(ar1, ar2){
    let array = ar1.concat(ar2);
    array.sort((a, b) => (a-b));
    let mid1 = array.length / 2;
    let mid2 = mid1 - 1;
    let result = (array[mid1] + array[mid2]) / 2;
    return result;
})(ar1, ar2);
console.log(iifeMedianFuncResult);
/*=========================================================*/

/*Remove duplicates from an array*/
let duplicateArr = [1, 1, 1, 2, 3, 3, 1, 2, 155];

let removeDuplicates = function(arr){
    var set = new Set(arr);
    return Array.from(set);
};
console.log(removeDuplicates(duplicateArr));

let iifeDuplicate = (function(arr){
    var set = new Set(arr);
    return Array.from(set);
})(duplicateArr);
console.log(iifeDuplicate);

/*Rotate an array by k times and return the rotated array*/
let arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
let rotateArrFunction = function(arr, k){
    let temp = arr.slice(0, k);
    arr = arr.slice(k);
    let result = arr.concat(temp);
    return result;
};
console.log(rotateArrFunction(arrayToRotate, 2));

let iifeRotateFuncResult = (function(arr, k){
    let temp = arr.slice(0, k);
    arr = arr.slice(k);
    let result = arr.concat(temp);
    return result;
})(arrayToRotate, 2);
console.log(iifeRotateFuncResult);