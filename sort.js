function sort(){
  var n1 = document.getElementById('name1').value;
  var n2 = document.getElementById('name2').value;
  console.log(n1.length);
  console.log(n2.length);
  
  if(n2.length > n1.length){
  document.getElementById('name1').value= n2;
  document.getElementById('name2').value= n1;
  }
}

function Asc(){
	var n1 = document.getElementById('name1').value;
	var n2 = document.getElementById('name2').value;
	console.log(n1.length);
	console.log(n2.length);
	
	if(n1.length > n2.lenght){
	document.getElementById('name1').value= n2;
	document.getElementById('name2').value= n1;
	}
	
}