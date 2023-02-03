function doSum(){
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    
    //check number or not
    if(isNaN(num1) || isNaN(num2)) {
        alert("Please enter digits");
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    } else {
        var sum = parseInt(num1) + parseInt(num2);
        if (sum === NaN){
            document.getElementById("sum").value = "Please enter digit";
        } else {
            document.getElementById("sum").value = sum;
        }
        console.log("sum: "+sum);
    }
}