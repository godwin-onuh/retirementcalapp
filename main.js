// Retirement Function
function retirementYear(){
    // First Question: How Old are you?
    var age = document.getElementById("age").value;

    // Question two: At what age do you want to retire?
    var retirementAge = document.getElementById("retirementAge").value;

    // if age is less than or equal to 100
    if(age <= 100){

    }
    // if retirement age is less than or equal to 100
    if(retirementAge <= 100){

    }
    // before showing result, lets add the variables
    var retirement = parseFloat(retirementAge - age);
    var result = new Date().getFullYear() + retirement;

    // show result
    document.getElementById("finalScoreText").innerHTML = "You are " +age + " years old. ";
    document.getElementById("retire").innerHTML = "You want to retire when you are " +retirementAge + " years old. ";
    document.getElementById("result").innerHTML = "You can retire by " +result + ". "; 
}

$(document).ready(function(){
    $(".btn").click(function(){
        $(".test").show();
    });
});