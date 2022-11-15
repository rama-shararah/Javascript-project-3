var y = sessionStorage.getItem("username");

console.log(y);

document.getElementById("username").innerHTML = y;



function logout() {

    
   
    sessionStorage.clear();
    location.href = "../Batool/project3.html";

}
