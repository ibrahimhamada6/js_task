
var sum=0;
var newValue;

do
{ 
    var newValue=parseInt(prompt("Enter Values"));

        if (isNaN(newValue)) {

            alert("Enter a Number");

        } else {
            sum += parseInt(newValue);
        }
    

} while(newValue!=0 && sum<=100)


document.write(" The Summation of Values Equal " + sum)



