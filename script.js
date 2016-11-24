//Pobranie 'klawiszy' z dokumentu
var keys = document.querySelectorAll('#calculator span');

//Dodanie zdarzeń onclick do klawiszy
for(var i=0; i<keys.length; i++)
{
	keys[i].onclick = function(e)
	{
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

// Wyczyszczenie ekranu po wciśnięciu przycisku clear

		if(btnVal == 'C')
		{
			input.innerHTML = '';
		}

// Wykonie działania i wyświetlenie wyniku po wciśnięciu równa się
		if(btnVal == '=')
		{
			var equation = inputVal;

// Zastapienie wszystkich znaków mnożenia i dzielenia na właściwe
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
		}


// Wciśnienie innego klawisza po prostu dopisze wartość na końcu działania
		if(btnVal)
		{
			input.innerHTML += btnVal;
		}
	}
}