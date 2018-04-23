

var container = document.getElementById('container');
var box = document.getElementById('box');
var turn = true;
var angle = 0;
var spin;
var score = 0;

container.addEventListener('click', function() {
    if(turn){
        box.classList.remove('red','lime');
        box.innerText = "play";
        spin = setInterval(function() {     
            angle += 45;       
            box.style.transform = "rotate("+angle+"deg)"
        } , 600);
    }        
    else{
        clearInterval(spin);
        if(angle%360 == 0){
            box.classList.add("lime");
            box.innerText = "win";
            score++;
            document.title = score + " points";
        }
        else{
            box.classList.add("red")
            box.innerText = "lost";
        }
    }
    
        turn = !turn;
});