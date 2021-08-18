function clearScreen(){
    document.getElementById("result").value=" ";
}
function display(value){
    document.getElementById('result').value+=value;
}
function calculate(){
    let a=document.getElementById('result').value;
    
    document.getElementById('result').value=eval(a);
}