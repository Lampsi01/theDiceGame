

let array = ["images/dice1.png" , "images/dice2.png" ,"images/dice3.png" , "images/dice4.png" , "images/dice5.png", "images/dice6.png"]
 

function loadImage(){
    document.getElementsByClassName("btn1")[0].innerHTML="role the dice";
     
    let i = Math.floor( Math.random() * 6 );
    let k = Math.floor( Math.random() * 6 );

    let image1 = document.querySelector(".img1");
    let image2 = document.querySelector(".img2");

    image1.setAttribute("src", array[i]); 
    image2.setAttribute("src", array[k]); 

    let TextShowUp = document.getElementsByTagName("h1")[0]; 
    if(i > k){
        TextShowUp.innerHTML="  player 1 Wins"
    }else if( k > i ){
        TextShowUp.innerHTML="player 2 Wins  "

    }else{ 
        TextShowUp.innerHTML="DRAW"

    }
}