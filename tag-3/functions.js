// Funktionen

function greeter() {
    console.log("Hallo Welt");
}

greeter();


function greetPerson(name) {
    return "Hallo " + name;
}

// Funktionen können auch andere Funktionen als Parameter übergeben werden
console.log(greetPerson("Max Mustermann"));


function multiplier(numOne, numTwo) {
    return numOne * numTwo;
}

let ergebnis1 = multiplier(5, 25);

console.log(ergebnis1);

/* 
 SChreibe eine Funktion namens "calculateSum", die eine beliebige Anzahl an parametern akzeptiert.
 Die Parameter können entweder Zahlen oder Strings sein. Die funktion sollte die Summe aller numerischen
 Werte berechnen und zurückgeben. Wenn ein String übergeben wird, sollte die Funktion den Buchstaben an der 
 Position des numerischen Wertes im Alphabet addieren (A=1, B=2, usw....) Die Funktion sollte auch die Anzahl
 der übergebenen Parameter ausgeben

 Beispiel:
 calculateSum(5, 'B', 10, 'C', 3 'A');

 Erwarten wir: 
 Summe: 21
 Anzahl der Parameter: 6

 

*/



// Kontrollstrukturen
// if
// Bedingter Block
// Können beliebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist
let numberOne = 40;
let numberTwo = 30;

if(numberOne < numberTwo){
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
// else if muss immer auf if folgen
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
// else wird ausgeführt falls der vorangehende if block oder else if falsch war
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Vergleichs-Operatoren in JS

// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich
// == selber Wert
// != ungleicher Wert
// === selber Wert und selber Typ
// !== ungleicher Wert oder Typ

// Logische Operatoren:

// && logisches und
// || logisches oder

// switch case
switch (numberOne) {
    case 1:
        console.log("Zahl ist 1");
        break; // Ist wichtig, da sonst alles nach dem ersten eingetretenen Fall ausgeführt wird
    case 10: 
        console.log("Zahl ist 10");
        break;
    case 40:
        console.log("Zahl ist 40");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
        // Beim default benötigen wir kein break, da danach nichts mehr kommt
}

// Schleifen | Loops
// for 
// foreach
// while
// do-while

function countTo(limit) {
    console.log("Schleife startet: ");
    for(let i = 0; i <= limit; i++){
        console.log(i);
    }
    console.log("Schleife beendet");
}

countTo(10);

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden Normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt werden soll
// und ejde dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden und nach den
// obigen Regeln in der Konsole ausgegeben werden


// Schreibe eine Funktion namens "primeSpiralSum" die eine quadratische Spiralmatrix
// erzeugt und die Summe aller Primzahlen in der Matrix berechnet.
// Die Funktion soll einen einzigen parameter "n" haben, der die Dimension der Matrix angibt

// Eine quadratische Spiralmatrix sit eine matrix, in der die Zahlen in einer Spirale angeordnet
// sind, beginnend in der Mitte und spiralförmig nach außen

// Beispiel
// wenn n = 5 ist:

//      17 16 15 14 13
//      18  5  4  3 12
//      19  6  1  2 11
//      20  7  8  9 10
//      21 22 23 24 25

function primeSpiralSum(n) {

    // Erzeuge eine leere quadratische Matrix der Größe n x n

    // Fülle die Matrix mit den Zahlen in einer Spirale

    // Berechne die Summe der Primzahlen in der Matrix

    // Gib die Summe zurück

}

// Test die Funktion mit einem Beispielswert
console.log(primeSpiralSum(5)); // Erwartete Ausgabe: 10