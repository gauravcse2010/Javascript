const genderExpand = document.getElementById("GenderButton");
const genderMF = document.querySelectorAll(".gender");

genderMF.forEach(element => {
        element.style.display = "none";
});

genderExpand.addEventListener("click",collapsibleButton);
localStorage.setItem("ButtonValue","+");
function collapsibleButton(){
    if(localStorage.getItem("ButtonValue","+") === "+"){
        localStorage.setItem("ButtonValue","-");
        genderExpand.value = "-";
        genderMF.forEach(element => {
            element.style.display = "block";
    });
    }
    else{
        localStorage.setItem("ButtonValue","+");
        genderExpand.value = "+";
        genderMF.forEach(element => {
            element.style.display = "none";
    });
    }
}