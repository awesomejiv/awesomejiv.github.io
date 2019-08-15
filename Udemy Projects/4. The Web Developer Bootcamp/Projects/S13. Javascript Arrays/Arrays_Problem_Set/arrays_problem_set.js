// ********** Printing Reverse ********************************

function printReverse(ary) {
    //    console.log("Original array: " + ary);
    //    console.log("Array in reverse:")
    for (var i = ary.length - 1; i >= 0; i--) {
        console.log(ary[i]);
    }
}

// ********** Checking Uniform ********************************

function isUniform(ary) {
    //    console.log("Original array: " + ary);
    var init = ary[0];
    var bool = true;
    ary.forEach(function (elem) {
        if (elem !== init) {
            bool = false;
        }
    })
    return bool;
}

function isUniformSec(ary) {    // Secondary method, using foreach the return false will not be reflected in the outer isUniform function
    var init = ary[0];
    for (var i = 1; i < ary.length; i++) {
        if (ary[i] !== init) {
            return false;
        }
    }
    return true;
}

// ********** Calculating Sums ********************************

function sumArray(ary) {
    var int = 0;
    ary.forEach(function (elem) {
        //        console.log(elem);
        int += Number(elem);
    })
    return int;
}

// ********** Finding the Max ********************************

function max(ary) {
    var int = ary[0];
    ary.forEach(function (elem) {
        if (elem > int) {
            int = elem
        };
    })
    return int;
}
