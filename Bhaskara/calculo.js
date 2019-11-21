function calcularBaskara(){	
		var a = prompt('Digite a');
		var b = prompt('Digite b');
		var c = prompt('Digite c');

	a = Number(a);
	b = Number(b);
	c = Number(c);

		var delta = (b*b)-4*a*c;

	if (delta>0) {
		var x1 = (-b + Math.sqrt(delta))/(2*a);
		var x2 = (-b - Math.sqrt(delta))/(2*a);

	x1 = Number(x1);
	x2 = Number(x2);

		document.all['delta'].innerHTML = delta;
		document.all['x1'].innerHTML = x1;
		document.all['x2'].innerHTML = x2;

	}else{
		alert('Delta negativo, não possui raiz.');
	}
}