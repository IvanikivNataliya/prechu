
function GetI(a){   
            return document.getElementById(a);  
}

function show(id){ 
    GetI(id).style.display = 'block';
}

function hide(id){ 
      GetI(id).style.display = 'none';
}

GetI('btn').onclick = function(){ 
    show('forma');
}

GetI('btn1').onclick = function(){ 
    show('forma');
}

GetI('btn2').onclick = function(){ 
    show('forma');
}

GetI('cans').onclick = function(){ 
    hide('forma');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySliders");
    
    if (n > slides.length) {
       slideIndex = 1; 
    }
    if (n < 1) {
        slideIndex=slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}