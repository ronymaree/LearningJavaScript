$(document).on('click', '.num', numberClick);
$(document).on('click', '.sign', signClick);
$(document).on('click', '.result', resultClick);
$(document).on('click', '.clear', clearClick);

var secondNum = false;
var add = false;
var sub = false;


function numberClick(button){

    console.log($(this).attr('value'))

    if (!secondNum)
    $("#firstnum").val($("#firstnum").val() + $(this).attr('value'));
    else
    $("#secondnum").val($("#secondnum").val() + $(this).attr('value'));

}

function signClick () {

    secondNum = true
    
    /* var x = document.getElementsByClassName("sign").value;
    console.log(x)
 */
console.log($(this).attr('value'))

if ($(this).attr('value')==="+") {
add = true;
}
if ($(this).attr('value')==="-"){
sub = true;
}

}

function resultClick () {
if (add = true) {
    var sum =  Number($("#firstnum").val()) + Number($("#secondnum").val())
    $("#result").val(sum);
    add=false
    secondNum = false
}
if (sub=true) {
    var difference =  Number($("#firstnum").val()) - Number($("#secondnum").val())
    $("#result").val(difference);
    sub=false
    secondNum = false
}
}

function clearClick() {
    $("input:text").val("");
    add=false
    sub=false
    secondNum = false
}