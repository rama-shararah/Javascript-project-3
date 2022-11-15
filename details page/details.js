
var arr=["scientifically","Before","I was at the museum with Nouran.","done","I am going to my mother's house.","down","wore","We're wearing suits.",
"into","get along","got back","blew","were able to knock","nor","were given / would pick","so / that","Every time / how",
"why","originated / began","had been lying / was spotted",]


var i=0;
for (i;i<20;i++)
{
   document.getElementsByClassName("yourAnswer")[i].innerHTML+=" "+localStorage.getItem("Answer"+i);
    if(localStorage.getItem("Answer"+i)!=arr[i]){
    document.getElementsByClassName("yourAnswer")[i].style.backgroundColor="#FFD2D3";
}
else{
    document.getElementsByClassName("yourAnswer")[i].style.backgroundColor="#D3FBE8";
}
}



function logout() {

    location.href = "../Batool/project3.html";
    localStorage.setItem("result",0);
    localStorage.setItem("loggeduser","");
    sessionStorage.clear();

}