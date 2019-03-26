function set()
{
	let sel = document.getElementById('Month');
        /*console.log( sel.value );*/
	let sele = document.getElementById('Day');
        /*console.log( sele.value );*/
	let selec = document.getElementById('Year');
        /*console.log( selec.value );*/
	console.log( sel.value +'/'+sele.value+'/'+selec.value);
	document.getElementById("myLink").innerHTML=sel.value +'/'+sele.value+'/'+selec.value;
	return sel.value,sele,selec;
}	
	document.getElementById('set').addEventListener('click',set);
	
