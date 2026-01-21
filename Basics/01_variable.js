// ----------:<rules in [var] keyword.s:>-------------

/* in var keyword we can perform all of the operation like declaration , initiallization , 
declaration + initiallization , reinitiallization , redeclaration.*/


// var a;      // var can be declare. ✅
// a = 20;    //  initiallization also happen. ✅
// var a = 40;   // declaration + initialization both happens. ✅
// a = 50;      //  reinitiallization will happens. ✅
// var b;      //   redeclaration will happens. ✅

// console.log(b);


//--------:>rules for [let] keyword.<:----------

/* in let keyword we can do everything except redeclaration + initiallization*/ 


// let d;                        //declaration will happen.✅
// d = "aditya"                 // initiallization will happen. ✅
// d = "chaurasiya"            // reinitiallization will also happen. ✅
// let d = "Aditya"           // declaration + initiallization both will happen. ✅
// let d = "paridhi"         // redeclaration will not happen. ❌

  
// ----------:>rules for [const] keyword<:-------------
 
// here in this situation nothing will possiblie except declaration + initiallization.

// const a;                         // declaration will not happen here ❌
// a = "baba"                      // initiallization will not happen here  ❌
// const a = "abhishek"           // declaration + initiallization will happen here.✅
// const a = "black stone"       // redeclaration + initiallization will not happen ❌
 