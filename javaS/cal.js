

function myfunction1(){
   
   document.getElementById("display").value+="%";
   
   }
function myfunction2(){
document.getElementById("display").value+=".";

}

function myfunction3(){
    document.getElementById("display").value =" ".trim();
}
   
function myfunction4(){
   
   document.getElementById("display").value+="/";
 }

function myfunction5(){
   document.getElementById("display").value+="7";
 }

function myfunction6(){
document.getElementById("display").value+="8";
 }
function myfunction7(){
document.getElementById("display").value+="9";
}
function myfunction8(){
   document.getElementById("display").value+="*";
}
function myfunction9(){
document.getElementById("display").value+="4";
}
function myfunction10(){
document.getElementById("display").value+="5";
}
 function myfunction11(){
document.getElementById("display").value+="6";
}
function myfunction12(){
   
document.getElementById("display").value+="-";
}
 function myfunction13(){
document.getElementById("display").value+="1";
 }
function myfunction14(){
   document.getElementById("display").value+="2";
}
function myfunction15(){
document.getElementById("display").value+="3";
 }
function myfunction16(){
document.getElementById("display").value+="+";
}
function myfunction17(){
document.getElementById("display").value+="0";
}
function myfunction18(){
   document.getElementById("display").value+=",";
}

function myfunction19(){
   var a =document.getElementById("display").value;
   var c=a.split(" ");
   console.log(c);                             //string seperated
//    var b= a.split(new RegExp('[-+*/ ]', 'g'));    //operators removed
//    var z= [];
//    for(i=0;i<b.length;i++) {
//        z[i]=parseInt(b[i]);                     //string converted to numbers
//    }
//    var t=z.length;
//        var c=c.filter(function(str){
//        return /\S/.test(str);
//     })
   
//     var i;
//     var e;
//     var k;
//    for(i=1;i<c.length;i++){
   
//       if(c[i-1]=="/"){
//         k=0;
//         e=i;
//         break;
//         }
//         if(c[i-1]=="*"){
//         k=1;
//         e=i;
//         break;
        
//         }
//         if(c[i-1]=="+"){
//            k=2;
//            e=i;
//            break;

           
//         }
//         if(c[i-1]=="-"){
//             k=3;
//             e=i;
//             break;

            
//         }
//         if(c[i-1]=="%"){
//            k=4;
//           e=i;
//           break;
          
//            }
//      }

//       var d;
//       switch(k){
//         case 0:
//         d=z[0]/z[1];
//        break;

//         case 1:
//         d=z[0]*z[1];
//         break;
      
//         case 2:
//         d=z[0]+z[1];
//         break;

//         case 3:
//         d=z[0]-z[1];
//         break;

//         case 4:
//         d=z[0]%z[1];
//         break;

//         default:
//         console.log("unavailable");

//      }
//    var l;
     
   
// for(i=e+1;i<c.length;i++){


   
//    if(c[i-1]=="/"){
//       l=0;
//       i=0;
//       break;
//   }
//   if(c[i-1]=="*"){
//      l=1;
//      i=0;
//      break;
//   }
//   if(c[i-1]=="+"){
//      l=2;
//      i=0;
//      break;
//   }
//   if(c[i-1]=="-"){
//       l=3;
//       i=0;
//       break;
//   }
//   if(c[i-1]=="%"){
//      l=4;
//      i=0;
//      break;
//   }
// }

// var w;
// switch(l){
//   case 0:
//   w=d/z[2];
//   break;

//   case 1:
//   w=d*z[2];
//   break;
  
//   case 2:
//   w=d+z[2];
//   break;

//   case 3:
//   w=d-z[2];
//   break;

//   case 4:
//   w=d%z[2];
//   break;

// }


 
   

//   if(z.length>2){
//      document.getElementById("display").value=w;
//   }else{
//      document.getElementById("display").value=d;
// }

 


      
   
   
//   /* var i;
//    var c=[];
//    for(i=0;i<b.length;i++) {
//        c[i]=parseInt(b[i]);
//    }
//    var t;
// switch(operation){
//       case "+":
//       t=c[0]+c[1];
//       t=t+c[3];
//       break;
//       case "-":
//       t=c[0]-c[1]-c[2];
//       break;
//       case "*":
//       t=c[0]*c[1]*c[3];
//       break;
//       case "/":
//       t=c[0]/c[1];
//       break;
//       case "%":
//       t=c[0]%c[1];
//       break;
//       default:
//       console.log("sorry");
//    }
// document.getElementById("display").value=t;*/
   
 }

                  