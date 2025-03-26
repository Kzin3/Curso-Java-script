var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('tbody')

console.log(campos);

var tbody = document.querySelector('table tbody')
document.querySelector('.form').addEventListener('submit',
    function(event) {
        var	tr	=	document.createElement('tr');
    
campos.forEach(function(campo) {

    var td = document.createElement('td');
    td.textContent = campo.Value;
    tr.appndChild(td);
});

var tdVolume = document.createElement('td');
tdVolume.textContent = campos [1].Value * campos[2].value;
tr.appendChild(tdVolume);		
tr.appndChild(tr);
	
	campos[0].value	=	'';	
	campos[1].value	=	1;	
	campos[2].value	=	0;
	campos[0].focus();
});