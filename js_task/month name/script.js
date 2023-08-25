
var monthNumber=parseInt(prompt("Enter a number from 1 - 12"));

while(isNaN(monthNumber)){

     alert("Enter a Number");
     var monthNumber=parseInt(prompt("Enter a number from 1 - 12"));
 }

while(monthNumber < 1 || monthNumber > 12){

     alert("Enter a valid number ");
     var monthNumber=parseInt(prompt("Enter a number from 1 - 12"));
}


switch(monthNumber)
{
    case 1:
        monthNumber="January"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   case 2:
        monthNumber="February"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

    case 3:
        monthNumber="March"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   case 4:
        monthNumber="April"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;
      
   case 5:
        monthNumber="May"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   case 6:
        monthNumber="June"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;


    case 7:
        monthNumber="July"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   case 8:
        monthNumber="August"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;
        
    case 9:
        monthNumber="September"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   case 10:
        monthNumber="October"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;


    case 11:
        monthNumber="November"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   case 12:
        monthNumber="December"
        document.write(" Yaaaaay we are in " + monthNumber +" ✌️");
        break;

   default:
         alert("This Value isn't a Number");

}
