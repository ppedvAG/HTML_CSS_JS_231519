// Ich bin einzeiliger Kommentar

/*
Mehrzeiliger Kommentar
 */

// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht

// Wie können wir uns alles anzeigen lassen

console.log("Hallo Welt");
console.error("Da lief was schief");
console.info("Ich bin eine Information");

// Variablen

let firstName = "Max";

let age = 18;

const lastName = "Mustermann";


// Wie gebe ich diese variablen in der Konsole aus?

console.log(firstName);

console.log(firstName + " " + lastName);

console.log(`Hallo ${firstName} ${lastName}`);

// String Zeichenfolge
// Strings werden "" oder von ''
console.log('ER sagt: "Hallo Welt"');
console.log("Er sagt: 'Hallo Welt'");


// number
// Jeglicher Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;
// Maximale Wert: 1.797693134...e+308

// Arithmetische Operatoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// % Modulo

// zahl = zahl * 4;
// zahl *=  4;

console.log(254.6 * 13 % 4);

// Inkrement ++ 
// Dekrement --
auchZahl++;

// boolean
// true/false
let a = true;
let b = false;
// Wird meistens für Vergleiche und if-Blöcke benutzt

// null
// Ist die absichtliche Zuweisung keines Wertes
// Bedeutet die Abwesenheit von Daten
let nichts = null;

// undefined
let test;
// Beudeutet, dass die Variable definiert, aber nie initialisiert wurde

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);

// typeof
console.log(typeof(age)); 

// Scope
// Globalen Scope => Variable ist im gesamten Script aufrufbar
// Function Scope => Variable ist innerhalb der gesamten Funktion aufrufbar
// Block Scope => Variable ist nur in dem Block in dem sie definiert wurde

{
    let block1 = "Hallo";
    var block2 = "Bye";
    console.log(block1);
}
//console.log(block1);
console.log(block2);

// Definiere zwei Variablen vom Type number
// Führe eine beliebige Arithmetische Operation mit den beiden variablen aus und weise
// das Ergebnis einer Konstanten zu
// Konsolenausgabe
