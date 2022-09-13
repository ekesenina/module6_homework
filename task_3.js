function funcNum1(a){
    return function(b){
     return a + b
    }
 }
 const sumFunction = funcNum1(100);
 const sum = sumFunction(33);
 
 console.log(sum)