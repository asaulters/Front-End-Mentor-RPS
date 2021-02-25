let scoreSection = document.querySelector('.headerScoreScore');
let paper = document.querySelector('.img1');
let scissors = document.querySelector('.img2');
let rock = document.querySelector('.img3');
let battleArena = document.querySelector('#battleArena')
let buttonDivArena = document.querySelector('.buttonDiv')
let yourPick =document.querySelector( '.yourPickImg')
let playAgain = document.querySelector('.playAgain')
let theirPick =document.querySelector( '.theirPickImg')
let rulesDiv = document.querySelector('.rulesDiv')
let rulesButton = document.querySelector('.rules')
let rulesCloseButton = document.querySelector('.rulesClose')
let theirImg;
let theirArenaPick;
let yourArenaPick;
let score = 0
// let score = document.querySelector('.headerScoreScore')


//checks on vars

// console.log(paper);
// console.log(scissors);
// console.log(rock);
console.log(battleArena);
console.log(rulesDiv)

//functions

function displayArena(){
    battleArena.style.display ="initial";
    buttonDivArena.style.display = "none";

}

function reset(){
    battleArena.style.display ="none";
    buttonDivArena.style.display = "initial";
    yourPick.removeChild(yourImg);
    theirPick.removeChild(theirImg);

}

function shoot(){
    let randomPull = Math.floor(Math.random() * Math.floor(3));

    
    if (randomPull == 1){
        console.log("house picked paper")
        //create their img
        theirImg = new Image(60, 60);
        theirImg.src="/icon-paper.svg";
        theirPick.appendChild(theirImg);
        //update it's class
        theirImg.className = "theirPickArenaImg1";
        //Add their pick to the global var
        theirArenaPick = "paper";
    } else if(randomPull == 2){
        console.log("house picked scissors");
        //create their img
        theirImg = new Image(60, 60);
        theirImg.src="/icon-scissors.svg";
        theirPick.appendChild(theirImg);
        //update it's class
        theirImg.className = "theirPickArenaImg2";
        //Add their pick to the global var
        theirArenaPick = "scissors";
    } else {
        console.log('House picked rock');
        //create their img
        theirImg = new Image(60, 60);
        theirImg.src="/icon-rock.svg";
        theirPick.appendChild(theirImg);
        //update it's class
        theirImg.className = "theirPickArenaImg3";
        //Add their pick to the global var
        theirArenaPick = "rock";
    }

    
}

function battle(){
    if (yourArenaPick =="rock" && theirArenaPick=="rock"){
        console.log("You Tied!");
    }  else  if (yourArenaPick =="rock" && theirArenaPick=="paper"){
        console.log("You Lost!");
    } else if (yourArenaPick =="rock" && theirArenaPick=="scissors"){
        console.log("You Won!");
        score++
        scoreSection.innerHTML = score
        console.log(score)
        // score++
    } else if (yourArenaPick =="paper" && theirArenaPick=="paper"){
        console.log("You Tied!");
    }  else  if (yourArenaPick =="paper" && theirArenaPick=="scissors"){
        console.log("You Lost!");
    } else if (yourArenaPick =="paper" && theirArenaPick=="rock"){
        console.log("You Won!");
        score++
        scoreSection.innerHTML = score
        console.log(score)
        // score++
    } else if (yourArenaPick =="scissors" && theirArenaPick=="scissors"){
        console.log("You Tied!");
    }  else  if (yourArenaPick =="scissors" && theirArenaPick=="rock"){
        console.log("You Lost!");
    } else if (yourArenaPick =="scissors" && theirArenaPick=="paper"){
        console.log("You Won!");
        score++
        scoreSection.innerHTML = score
        console.log(score)
        // score++
    }
    


}

function rulesOpen(){
    buttonDivArena.style.display = "none";
    rulesDiv.style.display = "inherit";
    rulesButton.style.display ="none";
    console.log(rulesDiv)
}

function rulesClose(){
    buttonDivArena.style.display = "inherit";
    rulesDiv.style.display = "none";
    rulesButton.style.display ="inherit";
}

//Events

rock.addEventListener('click', () =>{
    displayArena();
    shoot();
    console.log(theirArenaPick)
    //your pick
    yourArenaPick = "rock";
    console.log(yourArenaPick)
    yourImg = new Image(60, 60);
    yourImg.src="/icon-rock.svg";
    yourPick.appendChild(yourImg);
    //update class ->keeping same number as the rest
    yourImg.className = "yourPickArenaImg3"
    //Fight!!
    battle();
  
    }
    );

paper.addEventListener('click', () =>{

    displayArena();
    
    shoot();
    //your pick
    yourArenaPick ="paper";
    yourImg = new Image(60, 60);
    yourImg.src="/icon-paper.svg";
    yourPick.appendChild(yourImg);
    //update class ->keeping same number as the rest
    yourImg.className = "yourPickArenaImg1"
    //Fight!!
    battle();
    }
    );

scissors.addEventListener('click', () =>{

    displayArena();
    
    shoot();
    //your pick
    yourArenaPick ="scissors";
    yourImg = new Image(60, 60);
    yourImg.src="/icon-scissors.svg";
    yourPick.appendChild(yourImg);
    //update class ->keeping same number as the rest
    yourImg.className = "yourPickArenaImg2"
    
    //Fight!!
    battle();
    }
    );    
    
playAgain.addEventListener('click', reset);
rulesButton.addEventListener('click', rulesOpen)
rulesCloseButton.addEventListener('click', rulesClose)