var advJS = function (data, number) {
    //data = data || [];
   // number = number || 0;
    
    //we can do data.constructor === Array and number.constructor === Number,
    //but if data or number is null, it throws error on console.
    console.log("data:"+Array.isArray(data));
    console.log("number:"+isNaN(number));
    if (Array.isArray(data) && !isNaN(number)) {
        document.write("yes i received the right data types"+'</br>');
    }
    else {
        document.write("one of the type passed is wrong"+'</br>');
    }
}

function testMe() {
    advJS([1, 2, 3], 1);
    advJS('array', 1);
    advJS(null, 1);
    advJS(null, undefined);
}