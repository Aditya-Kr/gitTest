var mydata = JSON.parse(data);
var i;
function waitforme(milisec) {
return new Promise(resolve => {
setTimeout(() => { resolve('') }, milisec);
})
}
function printfruits(){
document.getElementById("list").innerHTML =''
for (i in mydata){
    // await waitforme(1000);
    // alert(mydata[i].name)
    
        document.getElementById("list").innerHTML += '<br><div class="popup" onclick="display_popup('+i+')"><span id="ff">'+mydata[i].name+'</span><span class="popuptext" id="myPopup">Popup text...</span></div>'; 
        document.getElementById("list").innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" onclick="del('+i+')"><i class="fa fa-trash"></button>';
    

}
}


function add() {
mydata.push({ "name":fruitname.value, "color":"Yellow", "count":2, "expiry": "25 Mar 2015" });

printfruits();
event.preventDefault();
};

function del(i) {
mydata.splice(i, 1);
printfruits();
// event.preventDefault()
};

printfruits();
function display_popup(i) {
document.getElementById('myPopup').innerHTML = mydata[i].name+'<br>Color: '+mydata[i].color+'<br>Count:'+mydata[i].count+'<br>Expiry: '+mydata[i].expiry;

var popup = document.getElementById("myPopup");

popup.classList.toggle("show");
}