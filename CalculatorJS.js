// input tag always takes string anf have to convert in to number
var inputone=document.getElementsByClassName("F1name")[0];
var inputtwo=document.getElementsByClassName("F2name")[0];


var sum=document.getElementById("addition");
var minus=document.getElementById("subtraction");
var multi=document.getElementById("multiplication");
var divi=document.getElementById("division");
var perc=document.getElementById("percentage");
var result=document.getElementsByClassName("output")[0];

sum.addEventListener("click" ,function(b){
    var a=parseInt(inputone.value)+parseInt(inputtwo.value);
    // console.log(a)
    result.value=a;
    // console.log(result.value);
    b.preventDefault();
});



minus.addEventListener("click" ,function(c){
    var a=parseInt(inputone.value)-parseInt(inputtwo.value);
    // console.log(a)
    result.value=a;
    // console.log(result.value);
    c.preventDefault();
});

multi.addEventListener("click" ,function(d){
    var a=parseInt(inputone.value)*parseInt(inputtwo.value);
    // console.log(a)
    result.value=a;
    // console.log(result.value);
    d.preventDefault();
});

divi.addEventListener("click" ,function(e){
    var a=parseInt(inputone.value)/parseInt(inputtwo.value);
    // console.log(a)
    result.value=a;
    // console.log(result.value);
    e.preventDefault();
});
// function swap(){
//     var a,b,c;
//     a=inputone;
//     b=inputtwo;
//     if (a<b) {
//         c=a;
//         a=b;
//         b=c;
//         console.log(a)
//         console.log(b)
//     }
//     var z=parseInt(a)-parseInt(b);
//     // console.log(a)
//     result.value=z;
//     // console.log(result.value);
//     // x.preventDefault();
// }
// minus.addEventListener("click" ,swap());