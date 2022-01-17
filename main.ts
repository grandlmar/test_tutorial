input.onButtonPressed(Button.A, function () {
    Zufallszahl = randint(0, 22)
    Zufallsbuchstabe = Alphabet[Zufallszahl]
    basic.showString("" + (Zufallsbuchstabe))
    basic.pause(3000)
    basic.clearScreen()
})
let Zufallsbuchstabe = ""
let Zufallszahl = 0
let Alphabet: string[] = []
Alphabet = [
"A",
"B",
"C",
"D",
"E"
]
