let box = document.querySelectorAll('.changeable-back');
box.forEach(function(clickbox){
    clickbox.addEventListener("click", function(){
        if (clickbox.style.background === 'hotpink') {
            clickbox.style.background = 'mediumpurple';
        } else {
            clickbox.style.background = 'hotpink';
        }
    });
});