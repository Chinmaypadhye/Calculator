var expression="";
function myfunction(val){
    document.getElementById("display").value+=val;
    if(val=="/"||val=="*"||val=="+"||val=="-"||val=="%"){
        expression = expression + "|" + val + "|";

    }else{
        expression +=val;
    }
}
function myfunction1(){
    document.getElementById("display").value="";
    expression="";
}
function equal(){
    inputNo= expression.split("|");
    calculation(inputNo);
}
function calculation(inputNo){
    let answer=0;
    let index=0;
    inputNo.forEach(function (input){
        if(input=='/'){
            number1=index-1;
            console.log(number1);
            number2=index+1;
            answer=parseFloat(inputNo[number1])/parseFloat(inputNo[number2]);
            spliceNo(index,answer,inputNo);
        }
         index +=1;
    })
    index=0;
    inputNo.forEach(function (input){
        if(input=='*'){
            number1=index-1;
            console.log(number1);
            number2=index+1;
            answer=parseFloat(inputNo[number1])*parseFloat(inputNo[number2]);
            spliceNo(index,answer,inputNo);
        }
         index +=1;
    })
    index=0;
    inputNo.forEach(function (input){
        if(input=='+'){
            number1=index-1;
            console.log(number1);
            number2=index+1;
            answer=parseFloat(inputNo[number1])+parseFloat(inputNo[number2]);
            spliceNo(index,answer,inputNo);
        }
         index +=1;
    })
    index=0;
    inputNo.forEach(function (input){
        if(input=='-'){
            number1=index-1;
            console.log(number1);
            number2=index+1;
            answer=parseFloat(inputNo[number1])-parseFloat(inputNo[number2]);
            spliceNo(index,answer,inputNo);
        }
         index +=1;
    })
    index=0;
    inputNo.forEach(function (input){
        if(input=='%'){
            number1=index-1;
            console.log(number1);
            number2=index+1;
            answer=parseFloat(inputNo[number1])%parseFloat(inputNo[number2]);
            spliceNo(index,answer,inputNo);
        }
         index +=1;
    })
    index=0;
    document.getElementById("display").value=answer;

    
}
function spliceNo(index,answer,inputNo){
    inputNo.splice(index,2);
    inputNo[number1]=answer.toString();
    console.log(inputNo)
}








    

