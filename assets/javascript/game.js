$(document).ready(function () {

    //Global Variables
    let wins = 0;
    let losses = 0;



    //Array of gem images
    let gemImages = ["assets/images/gem1.png", "assets/images/gem2.png","assets/images/gem3.png", "assets/images/gem4.png"]

    //Functions
    function appendGems(){
        gemImages.forEach(function(pics, index){
            let gemImg = $("<img>") .attr('src', pics  )
            $("#crystals").append(gemImg)
            console.log (pics);
        })
    }

        //Function 1 assigns random number to each gem




        //Function 2 to generate random number

        //Display it on the broweser

        //When player clicks a gem

        //Assign random number to gem when clicked

        //if/else statements when player hits target or does not hit target
        
        
    //Call functions
    appendGems()




















































});


