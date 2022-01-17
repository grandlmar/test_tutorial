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

Erstelle eine ``||Variable: Variable||`` mit dem Namen Zufallszahl.

## Schritt 4 

Todo