

function signin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    var check = false;
    for (var i = 0; i < 6; i++) {
        if (username === localStorage.getItem("firstname" + i) && password === localStorage.getItem("password" + i)) {
            if (localStorage.getItem("result" + username) > 0) {
                location.href = "../Result.html"; check = true;
                sessionStorage.setItem("username", username);
                localStorage.setItem("loggeduser", username);

                break;
            }
            else {
                localStorage.setItem("loggeduser", username);
                sessionStorage.setItem("username", username);
                check = true;
                location.href = '../Nouran/final.html';
                console.log(check);
                break;
            }
        }
    }
    if (check == false) { alert("Wrong username or pw");
    }

}
// function getyourname()
// {
// var x=localstorage.getItem("firstname");
// console.log(x);

// }

