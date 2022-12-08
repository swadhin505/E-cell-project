document.onkeydown = function(e){
    if(e.keyCode==38){
        dino = document.querySelector('#dinosaur');
        if(dino.classList != 'animatedino')//so that the animation doesnot ruin the present animation
        {
            dino.classList.add('animatedino');
            setTimeout(() => {
            dino.classList.remove('animatedino');
           },400 );
        }
    }
}
let score = 0;
let check = true;
let check1 = true;
setInterval(()=> {
    dino = document.querySelector('#dinosaur');
    cactus = document.querySelector('#cactus');

    dinosaurtop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if(cactusleft<30 && cactusleft>0 && dinosaurtop>=140 && check1)
    {
        cactus.classList.remove('cactusanimation');
        cactus.style.left = cactusleft + "px";
        score = score-1;
        updatescore(score);
        game_over.style.visibility = "inherit";
        check1 = false;
    }
    else if((cactusleft<52 && cactusleft>0 && dinosaurtop>=100 && check1 && check)){
        score = score+1;
        updatescore(score);
        check = false;
        setTimeout(() => {
            check = true;
        },1000);
        //increasing the difficulty leven
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(cactus).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            cactusanimation.style.animationDuration = newdur + 's';
        },800);
    }
},10)

function updatescore(score){
    scores.innerHTML = "Your Score :"+ score;
}