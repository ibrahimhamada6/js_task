alert("“Welcome to my site”");

var name=prompt("Enter Your Name");

var color=prompt("choose either (red, green or blue color)")

while(color !=="Red" && color !=="red" && color !=="Green" && color !=="green" 
&& color !=="blue" && color!=="Blue" ){

    alert("Enter a Valid Color")
    var color=prompt("choose either (red, green or blue color)")
}


switch(color)
{
    case "red":
        document.write("<h2> Welcome <span style='color: red;'>" +name+ "</span></h2>");
        break;

    case "Red":    
        document.write("<h2> Welcome <span style='color: red;'>" +name+ "</span></h2>");
        break;

    case "Green":
        document.write("<h2> Welcome <span style='color: green;'>" +name+ "</span></h2>");
        break;

    case "green":
        document.write("<h2> Welcome <span style='color: green;'>" +name+ "</span></h2>");
        break;

    case "Blue":
        document.write("<h2> Welcome <span style='color: blue;'>" +name+ "</span></h2>");
        break;

    case "blue":
        document.write("<h2> Welcome <span style='color: blue;'>" +name+ "</span></h2>");
        break;

    

    default:
        alert("Enter a valid Color")
        

}
