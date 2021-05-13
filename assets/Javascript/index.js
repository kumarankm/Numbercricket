
var plscore = 0;
var coscore = 0;
var visited = 0;

//Batting function
function goBat(){
    var a= document.getElementById("pnumbt").value;
    
    //Checking the valid number
    if(a > 6){
        alert("Enter The Valid Number!");
    }

    else{
        //Generating random number
        var compbt = Math.floor(Math.random() * 7);
        document.getElementById("cnumbt").innerHTML= compbt;

        //Checking for same number throw
        if(a == compbt){
            alert("Computer Took Your Wicket");
            //console.log(plscore);

            //Displaying score on navbar
            document.getElementById("navpscore").innerHTML="Player Score = " + plscore;
            
            //Removing batting column
            document.getElementById("batting").remove();

            // Final winning function
            finalWin();

             // Adding count in order to check player is played
            visited = 1;
        }

        //If both dont have same throw
        else{

            //For compensate zero
            if(parseInt(a)===0){
                a = compbt;
            }

            // Adding the score
            plscore = plscore + parseInt(a);

            //Displaying score on navbar
            document.getElementById("navpscore").innerHTML="Player Score = " + plscore;

            //Checking if player have crossed the already computer played one
            if(visited !== 0){
                if(plscore > coscore){
                    document.getElementById("Modalp").click();
                }
            }
        }
        
    }
}

//Bowling section
function goBowl(){
    var b= document.getElementById("pnumbl").value;
   
    //Checking for valid number
    if(b > 6){
        alert("Enter The Valid Number");
    }


    else{
        //Generating random number
        var compbl = Math.floor(Math.random() * 7);
        document.getElementById("cnumbl").innerHTML= compbl;

        //Checking for same number throw
        if(b == compbl){
            alert("You Took Computer Wicket");
            //console.log(coscore);

            //Displaying score on navbar
            document.getElementById("navcscore").innerHTML="Computer Score = " + coscore;

             //Removing bowling column
            document.getElementById("bowling").remove();

            // Final winning function
            finalWin();

             // Adding count in order to check player is played
            visited = 1;
        }

         //If both dont have same throw
        else{

            //For compensate zero
            if(compbl===0){
                compbl = parseInt(b);
            }


             // Adding the score
            coscore = coscore + compbl;

            //Displaying score on navbar
            document.getElementById("navcscore").innerHTML="Computer Score = " + coscore;

            //Checking if computer have crossed the already player's played one
            if(visited !== 0){
                if(coscore > plscore){
                    document.getElementById("Modalc").click();
                }
            }

        }
        
    }
}


// Final winning function
function finalWin(){
    
    // Checking if both the player have visited
    if(visited !== 0){
        //Checking player is greater or not
        if(plscore > coscore){
            
            document.getElementById("Modalp").click();
        }
        
        else{
            
            // Checking computer is greater or not
            if(coscore > plscore){
               
                document.getElementById("Modalc").click();
            }
            
            // Checking for tie
            else{
                alert("Match Tie!");

                //Refreshing the page again
                location.replace('index.html');
            }
        }
    }

    

    
}

// Clearing toss section
function goClear(){
    document.getElementById("toss").remove();
}
