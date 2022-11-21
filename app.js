function addition(){
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)+parseInt(y)
    document.getElementById("output").value=z
}
function subs(){
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)+-parseInt(y)
    document.getElementById("output").value=z
}
function divide(){
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)/parseInt(y)
    document.getElementById("output").value=z
}
function multiply(){
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)*parseInt(y)
    document.getElementById("output").value=z
}
function c(){
    document.getElementById("input1").value=null
    document.getElementById("input2").value=null
    document.getElementById("output").value=null
}