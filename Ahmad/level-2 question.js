var text1;
var selected;
var result = Number(localStorage.getItem("result"));
var adaptCounter = 0;

// Questions will be asked
const Questions = [

    {
        id: 0,
        q: "I was driving ______ the road when my car started making a funny sound.",
        a: [{ text: "in", isCorrect: true },
        { text: "at", isCorrect: false },
        { text: "down", isCorrect: false },
        { text: "through", isCorrect: false }
        ]

    },


    {
        id: 1,
        q: "She ______ blue velvet to the party last night",
        a: [{ text: "worn", isCorrect: true },
        { text: "war", isCorrect: false },
        { text: "weared", isCorrect: false },
        { text: "wore", isCorrect: false }
        ]

    },

    {
        id: 2,
        q: "What are you wearing to the party?.",
        a: [{ text: "Wear wearing shirts.", isCorrect: false },
        { text: "Formal dress wearing we're.", isCorrect: false },
        { text: "We're wearing suits.", isCorrect: true },
        { text: "I wear a black suit.", isCorrect: false }
        ]

    },

    {
        id: 3,
        q: "The Olympic champion dove ______ the swimming pool from ten meters high.",
        a: [{ text: "to", isCorrect: false },
        { text: "into", isCorrect: true },
        { text: "onto", isCorrect: false },
        { text: "inside", isCorrect: false }
        ]

    },

    {
        id: 4,
        q: "You two are always fighting. Why can't you ______?",
        a: [{ text: "get along", isCorrect: false },
        { text: "get over", isCorrect: false },
        { text: "get off", isCorrect: false },
        { text: "get through", isCorrect: true }
        ]

    }


]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    // var result = document.getElementsByClassName("result");
    // result[0].innerText = "";


    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    var i = 0;

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#BBD8DE";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#F0F0F0";
        selected = op1.value;
        text1 = Questions[id].a[0].text;

    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#BBD8DE";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#F0F0F0";
        selected = op2.value;
        text1 = Questions[id].a[1].text;


    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#BBD8DE";
        op4.style.backgroundColor = "#F0F0F0";
        selected = op3.value;
        text1 = Questions[id].a[2].text;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#BBD8DE";
        selected = op4.value;
        text1 = Questions[id].a[3].text;
    })

    // Grabbing the evaluate button
    // const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    // evaluate[0].addEventListener("click", () => {
    //     if (selected == "true") {
    //         result[0].innerHTML = "True";
    //         result[0].style.color = "green";
    //     } else {
    //         result[0].innerHTML = "False";
    //         result[0].style.color = "red";
    //     }
    // })
}

if (start) {
    iterate("0");
}
var arr;

// Next button and method
const next = document.getElementsByClassName('next')[0];
const finish = document.getElementById("finish");
const level2 = document.getElementById("#level2")
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 6) {
        if (id + 1 == 4) {
            document.getElementById("finish").style.display = "block";
            document.getElementById("next").style.display = "none";
        }
        localStorage.setItem("Answer" + (id+5), text1);
        //  console.log(localStorage.getItem("Answer"+id));
        if (selected == "true") { result = result + 6; adaptCounter = adaptCounter + 1; } console.log(result); console.log(adaptCounter);
        console.log(selected);
        // batool

        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#F0F0F0";



        selected = "";
        id++;
        iterate(id);
    }
    localStorage.setItem("adaptCounter", adaptCounter);
    localStorage.setItem("result", result);
})
let FinishBtn = document.querySelector("#finish");
let Level3 = document.querySelector("#level3");
finish.addEventListener("click", () => {
    if (selected == "true") { result = result + 6; adaptCounter = adaptCounter + 1; } console.log(result); console.log(adaptCounter);

    localStorage.setItem("adaptCounter", adaptCounter);
    localStorage.setItem("result", result);
    localStorage.setItem("Answer" + (id+5), text1);
    // location.href="../Batool/project3.html"
    FinishBtn.style.display = "none";
    Level3.style.display = "block";
    panel.style.display = "none"



})

//guide Section
let guide = document.querySelector("#guide");

let continueBtn = document.querySelector("#continue");
let panel = document.querySelector(".panel");




//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click", () => {
    panel.style.display = "block";
    guide.style.display = "none";

})

Level3.addEventListener("click", () => {
    location.href = "../Ashraf/html quistion.html";
})

// ===============
//guide Section
// let guide = document.querySelector("#guide");

// let FinishBtn = document.querySelector("#finish");
// // let panel = document.querySelector(".panel");
// //what happen when 'Finish' Button Will Click
// FinishBtn.addEventListener("click", () => {
//     panel.style.display = "none";
//     guide.style.display = "none";
// })