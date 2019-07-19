$(document).ready(function () {

    //Global Variables
    let wins = 0;
    let losses = 0;
    $(".winsText").text("Wins: " + wins);
    $(".lossesText").text("Losses: " + losses);



    //Array of gem images
    let gemImages = ["assets/images/gem1.png", "assets/images/gem2.png", "assets/images/gem3.png", "assets/images/gem4.png"]

    //Functions
    // function appendGems(){
    //     gemImages.forEach(function(pics, index){
    //         let gemImg = $("<img>") .attr('src', pics  )
    //         $("#crystals").append(gemImg)
    //         console.log (pics);
    //     })
    // }


    //Function 1 assigns random number to each gem
    // debugger;
    function gemValues() {

        for (let i = 0; i < gemImages.length; i++) {
            let image = $("<img>");
            image.addClass("gem-buttons gem gem-image");
            image.attr("src", gemImages[i]);
            image.attr("data-letter", Math.floor(Math.random() * 12) + 1);
            $("#crystals").append(image);

        }
    }




    //Function 2 to generate random number
    function playGame() {
        let counter = 0;
        $(".yourGuess").text("Your points: " + counter);

        let targetNumber = Math.floor(Math.random() * 120 - 19 + 19);



        //Display it on the broweser
        $(".numberToGuess").text("Number to guess: " + targetNumber);
        console.log(targetNumber);
    }

    //When player clicks a gem

    //Assign random number to gem when clicked

    //if/else statements when player hits target or does not hit target


    //Call functions
    gemValues();
    playGame();




















































});


