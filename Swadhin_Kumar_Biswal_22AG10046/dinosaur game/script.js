
function restart() {
    let check1 = true;
    document.onkeydown = function (e) {
        if ((e.keyCode == 38 || e.keyCode == 32) && check1) {
            dino = document.querySelector('#dinosaur');
            if (dino.classList != 'animatedino')//so that the animation doesnot ruin the present animation
            {
                dino.classList.add('animatedino');
                setTimeout(() => {
                    dino.classList.remove('animatedino');
                }, 400);
            }
        }
    }
    let score = 0;
    let check = true;
    setInterval(() => {
        dino = document.querySelector('#dinosaur');
        cactus = document.querySelector('#cactus');
        cactusanimation = document.querySelector('.cactusanimation');

        dinosaurtop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
        if (cactusleft < 30 && cactusleft > 0 && dinosaurtop >= 140 && check1) {
            cactusanimation.style.animationDuration = '3s';
            cactus.classList.remove('cactusanimation');
            cactus.style.left = cactusleft + "px";
            score = score - 1;
            updatescore(score);
            game_over.style.visibility = "inherit";
            check1 = false;
            document.onkeydown = function (e) {
                if (e.keyCode == 38 || e.keyCode == 32) {
                    cactus.style.left = "770px";
                    score = 0;
                    updatescore(score);
                    cactus.classList.add('cactusanimation');
                    game_over.style.visibility = "hidden";
                    restart();
                }
            }
        }
        else if ((cactusleft < 52 && cactusleft > 0 && dinosaurtop >= 100 && check1 && check)) {
            score = score + 1;
            updatescore(score);
            check = false;
            setTimeout(() => {
                check = true;
            }, 1000);
            //increasing the difficulty leven
            setTimeout(() => {
                anidur = parseFloat(window.getComputedStyle(cactus).getPropertyValue('animation-duration'));
                newdur = anidur - 0.1;
                cactusanimation.style.animationDuration = newdur + 's';
            }, 200);
        }
    }, 10)

    function updatescore(score) {
        scores.innerHTML = "Your Score :" + score;
    }
}

restart();
