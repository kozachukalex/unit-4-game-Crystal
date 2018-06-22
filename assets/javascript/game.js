$(document).ready(function () {

    var wins = 0
    var losses = 0
    var targetNumber;
    var scoreArray = [];
    var currentScore = 0

    function startGame() {
        currentScore = 0
        targetNumber = Math.round(Math.random() * (120 - 19) + 19)            //shown random number
        console.log(currentScore)
        console.log(targetNumber)
        $("#currentAmount").html(currentScore)
        $("#targetNumber").html(targetNumber)
        $("#wins").html(wins)
        $("#losses").html(losses)
        return targetNumber;
    }

    // use a this. function to assign values to each crystal that resets every game

    function checkScore() {
        if (currentScore === targetNumber) {
            wins++;
            alert("You Won!");
            $("#nextButton").css('display', 'block');


        }

        if (currentScore > targetNumber) {
            losses++;
            alert("Ouch! You went over. Try again!");
            $("#nextButton").css('display', 'block');
        }

        $("#wins").html(wins)
        $("#losses").html(losses)

        return wins, losses;
    }
    startGame()

    $(".crystal").on("click", function () {
        currentScore += parseInt(this.value)
        currentScore = parseInt(currentScore);
        $("#currentAmount").html(currentScore);
        checkScore()

    });

    $("#nextButton").on("click", function () {
        startGame()
        $("#nextButton").css('display', 'none');
    })



    //4 crystals, each has a random value unique to itself

    // once clicked, display value on image(?)

    //random number and 4 crystals reset when player wins or loses





});