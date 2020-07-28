
// IIFE :- Immediately Invoked Function Expressionn

(function(){
    console.log("Hello");
})();

//Minimization of code
(function(l, p, r, s)
{
    l(p(2,3));
    l(r(4));
    l(s(45));
})(console.log, Math.pow, Math.sqrt, Math.sin);


//Only the last value gets printed
for(var i=0;i<10;i++)
{
    setTimeout(function(){
        console.log(i);
    }, 100)
}


//When we use IIFE on above condition
for(var i=0;i<10;i++)
{
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 100)
    })(i);
}