# Zadatak 5. - ES6/7 i React

## Priprema
Prije rješavanja zadatka za pripremu prouciti slijedece:
- [Modern Javascript CheatSheet](https://mbeaudru.github.io/modern-js-cheatsheet)
- [ES6 Tutorial](http://ccoenraets.github.io/es6-tutorial)
- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [React](https://facebook.github.io/react/tutorial/tutorial.html)

## Zadataci ES6/7:
Ove zadatke možeš raditi u konzoli browsera 

### Koraci
 1. Definirati 2 niza: a = [1, 2, 3] i b = [4, 5, 6]. Pomocu spread operatora definirati c koji ima elemente i a i b
 2. Pomocu filter metode i arrow funkcije definirati niz d koji ima sve elemente c osim 3 
 3. Pomocu map metode definirati niz objectD koji niz d pretvara u niz objekata tipa { index, value }
 4. Pomocu reduce metode definirati product koji sadrži umnožak svih vrijednosti value atributa objekata niza objectD
 5. Definirati objekt oblika prices = { pizza: 30, burger: 20, pasta: 25, juice: 10, fish: 40 }. Pomocu spread operatora definirati varijable pizza, pasta i other,
	gdje pizza i pasta imaju vrijednosti definirane u prices, a other je objekt sa svim fieldovima objekta prices bez pizza i pasta.
 6. Definirati objekt city = { name: "Zagreb", population: 1000000 }. Destrutuirati objekt city u 3 varijable: cityName, population i destroyed,
	pri cemu je vrijednost destroyed false ako nije definirana u objektu city
 7. Ispisati niz koristeci pizza i pasta varijable kreirane pod 5: "Pizza costs 30kn, pasta 25kn, which is 55kn in total". Koristiti backtick (`)
 
## Zadaci React:
Nastavak na Spring zadatke:

 1. Instalirati node i npm, zadnje verzije, te provjeriti dali rade u konzoli
 2. Kreirati novi react projekt pomocu [create-react-app](https://github.com/facebookincubator/create-react-app)
 3. Kreirati Todo komponentu koja iz propova rendera jedan todo za listu/tablicu
 4. Kreirati TodoList komponentu koja preko RESTa povlaci sve todoe za trenutnog korisnika
 5. Kreirati TodoForm koji ima text input i button, a preko REST-a dodaje novi Todo
 6. Kreirati CurrentUser komponentu koja rendera username trenutnog usera
 7. Kreirati App komponentu koja u sebi ima TodoList, TodoForm i CurrentUser komponente (služi samo kao wrapper)