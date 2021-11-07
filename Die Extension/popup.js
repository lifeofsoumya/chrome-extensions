
gotsix=0

let dice = document.querySelectorAll("img");

function randomcard(){
let randomnumber=Math.floor(Math.random()*6) +1
document.getElementById("demo").innerHTML= "You Got" + ": "+ randomnumber;
  
dice.forEach(function(die){
        die.classList.add("shake");
  });
setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });  },
    500
    );

  
if(randomnumber===1){document.getElementById("die").src = "https://cdn.discordapp.com/attachments/795866620412428330/906077425941749780/dice-01.png";}
  
if(randomnumber===2){document.getElementById("die").src = "https://cdn.discordapp.com/attachments/795866620412428330/906077427388788746/dice-02.png";}
  
  
if(randomnumber===3){document.getElementById("die").src = "https://cdn.discordapp.com/attachments/795866620412428330/906077429079097374/dice-03.png";}
  
  
if(randomnumber===4){document.getElementById("die").src = "https://cdn.discordapp.com/attachments/795866620412428330/906077431188832307/dice-04.png";}
  
if(randomnumber===5){document.getElementById("die").src = "https://cdn.discordapp.com/attachments/795866620412428330/906077432275152896/dice-05.png";}
  
  
if(randomnumber===6){document.getElementById("die").src = "https://cdn.discordapp.com/attachments/795866620412428330/906077419646095380/dice-06.png";}

  
// let count=0;
// count+=1;
  

if (randomnumber===6){
document.getElementById("demo").innerHTML= "Your Dice" + ": "+ randomnumber + ", wow!";
  gotsix++;
  
  

  
 document.getElementById("sixshow").innerHTML= "Got six: "+ gotsix +" times";
}

if (randomnumber===1){
document.getElementById("demo").innerHTML= "Your Dice" + ": "+ randomnumber + ", Sad!";
}

}