const dice_type = document.getElementById('dice-type')
var dices = []

function getType() {
    if (dice_type.value == "d4") return 4
    if (dice_type.value == "d6") return 6
    if (dice_type.value == "d8") return 8
    if (dice_type.value == "d10") return 10
    if (dice_type.value == "d12") return 12
    if (dice_type.value == "d20") return 20
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generate() {
    document.getElementById("output").innerHTML = ""
    var number = document.getElementById('number').value
    var text = ""
    var sum = 0

    if (number != null && number > 0) {
        for (let index = 0; index < number; index++) {
            dices[index] = randomIntFromInterval(1, getType())
            var createOutput = document.createElement("output")
            createOutput.classList.add('dice')
            createOutput.innerHTML = dices[index]
            document.getElementById("output").appendChild(createOutput);
            sum += dices[index];
        }
    } else
        console.log("No input")
    document.getElementById("sum-text").innerHTML = "Sum"
    document.getElementById("sum").innerHTML = sum.toString()
}