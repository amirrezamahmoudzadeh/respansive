const bar = document.querySelector('.bar');
const mainNav = document.querySelector('.main_nav ul');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

window.addEventListener('mouseup' , function hand(Event){
    if(Event.target !=mainNav && Event.target.parentNode !=mainNav && Event.target.parentNode.parentNode !=mainNav){
        mainNav.classList.remove('right');
        line1.classList.remove('trans1');
        line2.classList.remove('trans2');
        line3.classList.remove('trans3');
        bar.addEventListener('click' , left);
            function left(){
            mainNav.classList.toggle('right');
            line1.classList.toggle('trans1');
            line2.classList.toggle('trans2');
            line3.classList.toggle('trans3');
            }
    }
});

