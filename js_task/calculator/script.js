
var num1=parseInt(prompt("Enter The First Number"));

while(isNaN(num1)){

    alert("Enter a Number");
    var num1=parseInt(prompt("Enter The First Number"));
}

var num2=parseInt(prompt("Enter The Second Number"));

while(isNaN(num2)){

    alert("Enter a Number");
    var num2=parseInt(prompt("Enter The Second Number"));
}

var operation=prompt("Enter the Operation");

while(operation !=="+" && operation!=="-" && operation !=="*" && operation!=="/" 
&& operation !=="sum" && operation!=="Summation" && operation !=="sub" && operation!=="Subtraction"
&& operation !=="mul" && operation!=="Multiplication" && operation !=="div" && operation!=="Division"){

    alert("Enter a Valid Operation")
    var operation=prompt("Enter the Operation");
    
}

var result;

if(operation== "sum" || operation=="Summation" || operation=="+")
{
    result=num1+num2;
    document.write("Summation of " +"("+ (num1+ ","+ num2) +")" , " Equal " + result);   

}else if(operation=="sub" || operation=="Subtraction" || operation=="-")
{
    result=num1-num2;
    document.write("Subtraction of " +"("+ (num1+ ","+ num2) +")" , " Equal " + result);

}else if(operation=="mul" || operation=="Multiplication" || operation=="*")
{
    result=num1*num2;
    document.write("Multiplication of " +"("+ (num1+ ","+ num2) +")" , " Equal " + result);

}else if(operation=="div" || operation=="Division" || operation=="/")
{
    result=num1/num2;
    document.write("Division of " +"("+ (num1+ ","+ num2) +")" , " Equal " + result);

}else
{
    alert("This Operation is Not Valid");

}




