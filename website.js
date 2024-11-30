
let cursor= document.querySelector("#cursor");

let bee=document.querySelector(".bee");

let highScore=document.querySelector("#highScore");

let timeLeft=document.querySelector("#timeLeft");

let hits=document.querySelector("#hits");

let beeContainer=document.querySelector(".beeContainer");

let time=90;
timeLeft.textContent=time;

let hit=0;
hits.textContent=hit;

let btn=document.querySelector("button");

let gamestart=document.getElementById("game-start");

let gameover=document.getElementById("game-over");

let btnStart=document.getElementById("btnStart");

let btnRestart=document.getElementById("btnRestart");

let blood=document.getElementById("blood");

let highestScore=localStorage.getItem('score')||0;

highScore.textContent=highestScore


document.addEventListener("mousemove",(e)=>{
    let x= e.pageX;
    let y=e.pageY;
                                                                  
    cursor.style.top =`${y}px`                                    //set direction of cursor
    cursor.style.left=`${x}px`
    
})

function beeMove() {
    let containerHeight=beeContainer.clientHeight;
    let containerWidth=beeContainer.clientWidth;
                                                            
    let x=Math.random()*(containerWidth-70);                      //set width of container and moving bee
    let y=Math.random()*(containerHeight-90);

    bee.style.top=`${y}px`;
    bee.style.left=`${x}px`;
   

    
}

  let id ;

  btnStart.addEventListener("click",()=>{
    gamestart.style.display='none';
    bee.style.display='block';                                   //gameStart div

    
      id=setInterval(() => {
        
    
    
      if(time==0){
       
        if(hit>highestScore){
          highestScore=hit;
          highScore.textContent = highestScore
          localStorage.setItem('score',highestScore);
        }
        gameover.style.display='flex'
        bee.style.display = 'none';
        clearInterval(id);
      }
    
      else{                                                     // target time left
        blood.style.display='none'
        time--;
        timeLeft.textContent=time;
        beeMove();
      }
      
       
    
    }, 800);
  })

bee.addEventListener("click",()=>{
    hit++;
    hits.textContent=hit;                                       //target hit effect

    let x=bee.offsetLeft;
    let y=bee.offsetTop;

    blood.style.display="block"

    blood.style.left=`${x}px`;
    blood.style.top=`${y}px`;
    
})



btnRestart.addEventListener('click',()=>{

  hit=0;
  hits.textContent=hit;

    gameover.style.display='none';                              //targeting restart button
    bee.style.display='block';   
    time = 90;
    timeLeft.textContent = time;
      
    id=setInterval(() => {

      if(time==0){
        if(hit>highestScore){
          highestScore=hit;
          highScore.textContent = highestScore
          localStorage.setItem('score',highestScore);
        }
        gameover.style.display='none';
        gameover.style.display='flex'
        bee.style.display='none'
        blood.style.display='none'
        clearInterval(id);
      }
    
      else{                                                     // target time left
        
        blood.style.display='none';
        
        time--;
        timeLeft.textContent=time;
        beeMove();
      }
      
       
    
    }, 800);

});


btn.addEventListener("mouseover",()=>{
  cursor.style.display='none';                                //mouse hover pointer 
  
})
                                                          
btn.addEventListener('mouseleave',()=>{
  cursor.style.display='block';
})