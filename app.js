let game=[];
let user=[];
let start=false;
let score=[0];
let level=0;
let body=document.querySelector("body");
let color1=document.querySelector(".color1");
let color2=document.querySelector(".color2");
let color3=document.querySelector(".color3");
let color4=document.querySelector(".color4");
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
//event listerner to check start.
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("started");
        start=true;
        levelup();
    }
})
//level up and random gen function.
function levelup(){
    level++;
    user=[];
    h2.innerText=`Welcome to level ${level}`;
        let x=Math.floor(Math.random()*4)+1;
        if(x==1){
            c=color1;
            game.push("color1");
        }
        else if(x==2){
            c=color2;
            game.push("color2");
        }
        else if(x==3){
            c=color3;
            game.push("color3");
        }
        else{
            c=color4;
            game.push("color4");
        }
        flashbtn(c);
}
//flashing function using adding class
function flashbtn(c){
    c.classList.add("flash");
    setTimeout(function(){
        c.classList.remove("flash");
    },700);
}

//checking up pattern func
function check(idx){
    if(user[idx]===game[idx]){
        if(user.length==game.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!!Your Score is<b> ${level}<b> <br>Press Any Key To Start!!`;
        backg();
        score.push(level);
        let Maxscore=Math.max(...score);
        h3.innerText=`Highest Score is ${Maxscore}`;
        reset();
    }
}
//function to check which button is pressed
function btnpress(){
    let btn=this;
    flashbtn(this);
    let press=this.getAttribute("id");
    console.log(press);
    user.push(press);
    check(user.length-1);
}
//event listener check which func is pressed
let allbtn=document.querySelectorAll(".box");
for(b of allbtn){
    b.addEventListener("click",btnpress);
}
//function to reset all things
function reset(){
    level=0;
    game=[];
    start=false;
    user=[];
    
}
//background color blick to red.
function backg(){
    body.classList.add("blink");
    setTimeout(function(){
        body.classList.remove("blink");
    },100);
    
}