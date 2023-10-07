
document.getElementById("button").onclick = function() {
    var MyFirst= [document.getElementById("first-name").value,];
    var MySecond = document.getElementById("second-name").value;
    var MyEmail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(MyFirst,MySecond,MyEmail,password);
    if(MyEmail=="ahmedbisnss@gmail.com"){
        alert("this note corect");
    }
}


