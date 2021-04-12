function xx1() {
	window.open('https://account.microsoft.com/account?lang=en-gb','',' scrollbars=no,menubar=no,width=300, resizable=no,toolbar=no,location=no,status=no')
}

async function display(){
    document.getElementById("list").innerHTML =''
        for (i in mydata){
            await waitforme(1500);
            document.getElementById("list").innerHTML += '<br><b>'+mydata[i].name+'</b>'+'<br><span>'+mydata[i].color+'</span>'+'<br><span>'+mydata[i].count+'</span>'+'<br><span>'+mydata[i].expiry+'</span>'+'<br><button class="btn1" onclick="del('+i+')"><i class="fa fa-trash">Remove</i></button><hr>';         }
}

var mydata = JSON.parse(data);
var i;

function waitforme() {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') },1500);
    	}
    )
}

function fun1() {
    mydata.push({ "name":fname.value, "color":"Black", "count":5, "expiry": "12 April 2021" });
    display();
    event.preventDefault();
};

function del(i) {
    mydata.splice(i, 1);
    display();
};




