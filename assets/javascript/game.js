$(document).ready(function() {

    //Global variables
    let wins = 0;
    let losses = 0;
    $(".winsText").text("Wins: " + wins);
    $(".losseText").text("Losses: " + losses);
    
    //Array of crystal images
    var crystalImages = ["assets/images/gem1.png", "assets/images/gem2.png", "assets/images/gem3.png", "assets/images/gem4.png"];
    
    //Assigning random number to each crystal
    function crystalValues() {

        for (let i = 0; i < crystalImages.length; i++) {
        
            let image = $("<img>");
            image.addClass("crystalButtons crystal crystalImages");
            image.attr("src", crystalImages[i]);
            image.attr("dataValue", Math.floor(Math.random() * 12) +1);
            $("#crystals").append(image);
        }

    }

    function playGame() {

        
        let counter = 0;
        $(".yourGuess").text("Your points: " + counter); 

        //Generates random number 
        let targetNumber = Math.floor(Math.random() * (120-19) + 19);
            
        //And displays it on the browser
        $(".numberToGuess").text("Number to guess: " + targetNumber);
            console.log(targetNumber);

        //When user clicks on a crystal 
        $(".crystalButtons").on("click", function() {
            
        //Assigns random number to each click
            
            let crystalIsClicked = true;
            let crystalValue = ($(this).attr("dataValue"));
            crystalValue = parseInt(crystalValue);
            //Adds every click to global counter
            counter += crystalValue;
            
            console.log(crystalValue);
            console.log(counter);
            
            $(".yourGuess").text("Your points: " + counter);
            
            if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $(".winsText").text("Wins: " + wins);
            $("#crystals").empty();
            crystalValues();
            playGame();
            }
            
            else if (counter >= targetNumber) {
            alert("Sorry, try again!");
            losses++;
            $(".lossesText").text("Losses: " + losses);
            $("#crystals").empty();
            crystalValues();
            playGame();
            }
            
        });
    }
    
    crystalValues();
    playGame();

});






