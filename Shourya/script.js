var data = [{
	"name": "Apple",
	"color": "red",
	"count": 13,
	"expiry": "2-02-2020"
},
{
	"name": "Mango",
	"color": "yellow",
	"count": 7,
	"expiry": "2-04-2023"
},
{
	"name": "Orange",
	"color": "orange",
	"count": 3,
	"expiry": "23-10-2030"
}]
function func1() {
    document.getElementById('yok').style.backgroundColor = "red";
}

function func2() {
    document.getElementById('yok').style.backgroundColor = "black";
}

function func() {
    document.getElementById("y").style.backgroundColor = "yellow";
}
function start()
{
		setTimeout(function()
		{var txt="";
		for(x in data)
		{
		 txt += "<h2>"+data[x].name+"</h2><hr><b>Color: </b>"+data[x].color+"<br><b>Count: </b>"+data[x].count+"<br><b>Expiry: </b>"+data[x].expiry+"<br><br><button class='btn btn-primary' onclick=del("+x+")>Delete</button>";
		 document.querySelector("#details").innerHTML = txt;
}},3000);
}
function add()
{
		var w = String(document.getElementById('name').value);
		var x = String(document.getElementById('color').value);
		var y = String(document.getElementById('count').value);
		var z = String(document.getElementById('date').value);
		console.log(w+x+y+z);
		if(w=="")
			w="Not provided";
		if(x=="")
			x="Not provided";
		if(y=="")
			y="Not provided";
		if(z=="")
			z="Not provided";
		let s = '{ "name": "'+w+'","color": "'+x+'","count": "'+y+'","expiry": "'+z+'"}';
		obj = JSON.parse(s);
		data.push(obj);
		var txt="";
		for(x in data)
		{
		 txt += "<h2>"+data[x].name+"</h2><hr><b>Color: </b>"+data[x].color+"<br><b>Count: </b>"+data[x].count+"<br><b>Expiry: </b>"+data[x].expiry+"<br><br><button class='btn btn-primary' onclick=del("+x+")>Delete</button><br><br><br>";
		 document.querySelector("#details").innerHTML = txt;
		}
		
}
function del(x)
{
	console.log(data.length+" "+x);
	data.splice(x,1);
	console.log(data);
	console.log(x);
	var txt="";
		if(data.length==0)
		{
		document.querySelector("#details").innerHTML = "<h5 class='card-title'>There are no fruits to display please add them to get them displayed.</h5>";
		}
		else
		{
		for(x in data)
		{
		 txt += "<h2>"+data[x].name+"</h2><hr><b>Color: </b>"+data[x].color+"<br><b>Count: </b>"+data[x].count+"<br><b>Expiry: </b>"+data[x].expiry+"<br><br><button class='btn btn-primary' onclick=del("+x+")>Delete</button><br><br><br>";
		 document.querySelector("#details").innerHTML = txt;
		}
		}
}
function update(x)
{
	
}