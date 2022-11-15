let result = localStorage.getItem("result");
var loggeduser = localStorage.getItem("loggeduser");
let imitateCounter = Number(localStorage.getItem("ImitateCounter" + loggeduser));
let adaptCounter = Number(localStorage.getItem("adaptCounter" + loggeduser));
let trasnposeCounter = Number(localStorage.getItem("trasnposeCounter" + loggeduser));
var totalcorrect = imitateCounter + adaptCounter + trasnposeCounter;
var totalwrong = 20 - totalcorrect;



if (result < 50) {
     document.getElementsByClassName("mainContainer")[0].style.backgroundColor = "#FC7676";
     document.getElementsByClassName("mainText")[0].innerHTML = "Better Luck Next Time!";
     document.getElementsByClassName("secondaryText")[0].innerHTML = "Unfortunately you weren't lucky this time";
     document.getElementsByClassName("mainImage")[0].src = "fail.png";
     document.getElementsByClassName("endMain")[0].innerHTML = "Better luck next time !"
     document.getElementsByClassName("endSecondary")[0].innerHTML = "You Might wanna :"
     document.getElementsByClassName("end-container")[0].style.backgroundColor = "#FC7676";



}
document.getElementsByClassName("resultsecondaryText")[0].innerHTML = result + "/100";
document.getElementById("correctanswers").innerHTML = "You Answered " + totalcorrect + " out of 20 Questions correctly";
document.getElementById("wronganswers").innerHTML = "You Answered " + totalwrong + " out of 20 Questions incorrectly";
document.getElementById("transposeLevel").innerHTML = trasnposeCounter + "/10";
document.getElementById("transposeLevel").style.width = trasnposeCounter / 10 * 100 + "%";
document.getElementById("adaptLevel").innerHTML = adaptCounter + "/5"
document.getElementById("adaptLevel").style.width = adaptCounter / 5 * 100 + "%";
document.getElementById("imitateLevel").innerHTML = imitateCounter + "/5"
document.getElementById("imitateLevel").style.width = imitateCounter / 5 * 100 + "%";



function logout() {

     location.href = "Batool/project3.html";

     sessionStorage.clear();

}