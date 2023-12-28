//Delete all digit from display:
function DeleteMe() {
    document.getElementById("MyResult").value = ""   

}

//calculate value:
function calculator(NewValue){
    document.getElementById("MyResult").value += NewValue; 

}

//Show Answer on display:
function Answer() {
var a = document.getElementById("MyResult").value ; 
var b = eval(a);
document.getElementById("MyResult").value = b

}

//delete digit one by one:
function del(){
    let del = document.getElementById("MyResult");
    del.value = del.value.slice(0,-1);
}

