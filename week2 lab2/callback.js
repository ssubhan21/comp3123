var add =function (a,b){
return a+b;
}

var sub = function (a,b){
    return a-b;
}

//callback function
var makecall = function (a, b, f1, f2){
    if(a>b)
        return sub(a,b);
    else
        return add(a,b);
}