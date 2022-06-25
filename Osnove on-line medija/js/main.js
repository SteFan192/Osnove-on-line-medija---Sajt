var image = document.querySelector('.image1-img');
var variable = "j";
var variable = "k";
var colorBtn = document.querySelector('#color-change');
var body = document.querySelector('.welcome1');


image.addEventListener('click', function(){
    if (variable == "j") {
        image.src = "image4.jpg";
        variable = "k";
    }
    else {
        image.src = "image1.jpg";
        variable = "j";
    }
})

function prikaziPoruku() {
    var checkBox = document.querySelectorAll(".checkbox");

    var text = document.querySelectorAll(".massageHidden");
  
    for(var i = 0; i<checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            text[i].style.display = "block";
        } 
        else {
            text[i].style.display = "none";
        }
    }
}

function posaljiPodatke() {
    var onsubmit = document.querySelectorAll(".submit");

    var text = document.querySelectorAll(".massageHidden");
  
    for(var i = 0; i<onsubmit.length; i++) {
        if (onsubmit[i].submitted == 1) {
            text[i].style.display = "block";
        } 
        else {
            text[i].style.display = "none";
        }
    }
}
function posaljiPodatke() {
    alert("Great choice! You have a good taste!");
}

colorBtn.addEventListener("click", function(){
    body.classList.toggle("change");
})

          			
