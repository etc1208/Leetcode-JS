var quickSort = function(arr) {
    if(arr === null || arr.length <= 1) return arr;

    var mid = Math.floor(arr.length/2);
    var flag = arr.splice(mid, 1)[0];
    var left = [], right = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] > flag) right.push(arr[i]);
        else left.push(arr[i]);
    }
    return quickSort(left).concat(flag, quickSort(right));
}

var quickSort2 = function(arr, left, right) {
    if(arr === null || arr.length <= 1 || left > right) return;

    var l = left, r = right, tmp = arr[left];

    while(l < r) {
        while(l != r && arr[r] >= tmp) {
            r--;
        }
        while(l != r && arr[l] <= tmp) {
            l++;
        }

        if(l < r) {
            var t = arr[l];
            arr[l] = arr[r];
            arr[r] = t;
        }
    }
    arr[left] = arr[l];
    arr[l] = tmp;
    quickSort2(arr, left, l-1);
    quickSort2(arr, l+1, right);
}

var a = [1,8,3,1,9,5,2,7,6,9,3,8];
quickSort2(a,0,11)
console.log(a);