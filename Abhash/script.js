function toggle(){
    var x = document.getElementById("tt");
    var y = document.getElementById("cc");
    y.style.color="red";
    if (x.style.display === "none") {
        x.style.display = "block";
        
      } else {
        x.style.display = "none";

      }
}

function pop(){
    var x = Math.random();
    x=x*100;
    alert("Random number generated:"+Math.floor(x));
}