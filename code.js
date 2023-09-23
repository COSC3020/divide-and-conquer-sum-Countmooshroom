function divideAndConquerSum(a) {
    if (a.length == 1)
        return a[0];
    else if (a.length < 1)
        return 0;
    let mid1 = Math.ceil((a.length)/3);
    let mid2 = mid1 * 2;

    //slice function from https://www.w3schools.com/jsref/jsref_slice_string.asp
    let n = divideAndConquerSum(a.slice(0, mid1));
    n += divideAndConquerSum(a.slice(mid1, mid2));
    n += divideAndConquerSum(a.slice(mid2, a.length));
    return n;
}
