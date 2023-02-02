function sum(){
    num1 = document.getElementById('input1')
    console.log(num1)
    num2 = document.getElementById('input2')
    console.log(num2)
    checkInp(num1)
    checkInp(num2)
    sum = num1 + num2
    console.log(sum)
}
function checkInp(){
    var x=document.forms["myForm"]["age"].value;
    if (isNaN(x)) 
        {
            alert("Must input numbers");
            return false;
        }
    }