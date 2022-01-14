var count = 0;
function add(){
    count++;
    document.getElementById("counter").innerHTML= count
}

function substract(){
    count--;
    document.getElementById("counter").innerHTML= count
}

function reset(){
    count = 0;
    document.getElementById("counter").innerHTML= count
}