// class

class PersonAlt{
    xyz = 123;
    constructor(nameProp, age, cityOfOrigin, employed = false) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }

    introduceSelf() {
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
    }


}


const person3 = new PersonAlt("Christian Lindner", 49, true, "Cologne");
const person4 = new PersonAlt("Luke Skywalker", 24, false, "Tattooin");

console.log(person4.cityOfOrigin);

person3.introduceSelf();

person4.introduceSelf();

person3.age = person4.age;
console.log(person3.age);
person3.introduceSelf();

// Übung:
/* 
    Erstelle eine Klasse Auto
    Sie soll folgende Props besitzen:
    marke
    modell
    motorStatus (boolean)
    derzeitigeGeschw
    maximaleGeschw

    derzeitigeGeschw soll bei der erstellung immer 0 sein
    motorStatus soll bei der Erstellung immer false sein

    // Methoden:
    anAbschalten
    Die Methode soll nur den motorStatus ändern

    Beschleunige(neueGeschw)
    Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschw setzen, außer wenn diese die maximale
    Geschwindigkeit überschreiten würde
*/



/*
    Erstelle eine klasse "Person" mit den Properies: Name und Alter 
    implementiere einen konstruktor, der den Namen und das Alter der Person festlegt
    Erstelle eine Methode "sayHello" für die Klasse person, die den namen der Person ausgibt

    Erstelle eine Unterklasse "Student", die von der Klasse "Person" erbt. (class ... extends ...)
    Füge der Unterklasse eine Eigenschaft "university" hinzu und überlade die Methode "sayHello", um den
    Namen und die Universität des Studenten auszugeben

    Erstelle eine Zweite unterklasse "Dozent", die von einer nutzreichen "Klasse" geerbt wird. 
    Der Dozent soll die eigenschaften: name alter fach und erstelle eine neue Methode "sayHello2", wo
    sich der Dozent vorstellt und seinen Fach mitteilt den er unterrichtet

*/

/*
    Wir möchten eine Klasse "BankAccount" erstellen, die ein Bankkonto repräsentiert.
    FUnktionen:

    - Einen Konstruktor, der den Kontostand (balance) und den Kontoinhaber (owner) festlegt
    - Eine Methode "deposit(amount)", die den angegebenen Betrag zum Konto hinzufügt
    - Eine Methode "withdraw(amount)", die den angegebenen Betrag vom Kontostand abzieht,
      jedoch sicherstellt, dass der Kontostand nicht unter -100€ fällt
    - Eine Methode "getBalance()", die den aktuellen Kontostand zurückgibt
    - Eine Methode "getOwner()", die den Kontoinhaber zurückgibt

*/