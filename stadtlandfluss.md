# Tutorial: Stadt-Land-Fluss
## Schritt 1

Am LED-Display des BBC micro:bit soll ein ``||math:zufälliger||`` Buchstabe des Alphabets angezeigt werden.

Erstelle ein ``||Array||`` mit dem Namen ``||Array: Alphabet||``, welches beim Start des Programmes mit allen Buchstaben des Alphabets gefüllt werden soll. „Schwierige" Buchstaben wie Q, X oder Y müssen nicht in die Liste aufgenommen werden.

```blocks
let Alphabet = [
"A",
"B",
"C",
"D",
"E"
]
```

## Schritt 2

Überlege dir, bei welchem ``||input: Ereignis||`` ein neuer Buchstabe angezeigt werden soll. 
Das kann beispielsweise beim Drücken der Taste A oder durch Schütteln des micro:bit erfolgen. 

```blocks
input.onButtonPressed(Button.A, function () {
	
})
```

```blocks
input.onGesture(Gesture.Shake, function () {
})
```

## Schritt 3

Erstelle eine ``||variables: Variable||`` mit dem Namen Zufallszahl.

```blocks
input.onButtonPressed(Button.A, function () {
    Zufallszahl = 0
})
```

## Schritt 4 

Wie viele Elemente (Buchstaben) beinhaltet das erstellte Array? Merke dir die Anzahl!

## Schritt 5 

Generiere eine ganzzahlige ``||math:Zufallszahl||`` zwischen ``||math:0||`` und der im vorigen Schritt ermittelten ``||math:Zahl||``. 

## Schritt 6 

Ändere den Wert der Variable Zufallszahl auf die berechnete Zahl. 

## Schritt 7 

Erstelle eine Variable mit dem Namen Zufallsbuchstabe.

## Schritt 8

Wähle nun das Element an der (zufällig) generierten Position (= Wert der Variable Zufallszahl) im Array aus. 

## Schritt 9

Setze den Wert der Variable Zufallsbuchstabe auf den zufällig ausgewählten Buchstaben.

## Schritt 10

Der Buchstabe soll am LED-Display für eine bestimmte Zeit angezeigt werden. 

## Schritt 11
Todo 