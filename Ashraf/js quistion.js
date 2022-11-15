
var text1;
var selected;
var result = Number(localStorage.getItem("result"));
var trasnposeCounter = 0;
// Questions will be asked
const Questions = [{
    id: 0,
    q: "1) Batool______ from Korea last week.",
    a: [{ text: "gets back", isCorrect: false },
    { text: "has gotten back", isCorrect: false },
    { text: "got back", isCorrect: true },
    { text: "gotten back", isCorrect: false }
    ]

},
{
    id: 1,
    q: "2) The wind ______ hard all night.",
    a: [{ text: "blow", isCorrect: false },
    { text: "blowing", isCorrect: false },
    { text: "blowed", isCorrect: false },
    { text: "blew", isCorrect: true }
    ]

},
{
    id: 2,
    q: "3)As the tree was too high to climb, the mischievous boys ------ their ball down only by throwing sticks at it.",
    a: [{ text: "would have knocked", isCorrect: false },
    { text: "will have to knock", isCorrect: false },
    { text: "were able to knock", isCorrect: true },
    { text: "could have knocked", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4)She failed to get anyone to repair the taps for her at the weekend,-------- could she do it on her own.",
    a: [{ text: "as", isCorrect: false },
    { text: "only if", isCorrect: false },
    { text: "nor", isCorrect: true },
    { text: "so", isCorrect: false }
    ]

},

{
    id: 4,
    q: "5)If I ----- the choice of making either an oral or a written report, I ------ the second alternative.",
    a: [{ text: "gave / could pick", isCorrect: false },
    { text: "had been given / might pick", isCorrect: false },
    { text: "were given / would pick", isCorrect: true },
    { text: "would have given / had picked", isCorrect: false }
    ]

},

{
    id: 5,
    q: "6)You would not expect anyone ----- intelligent to make----- stupid mistake, but he did so.",
    a: [{ text: "too / such", isCorrect: false },
    { text: "too much / those", isCorrect: false },
    { text: "so / that", isCorrect: true },
    { text: "as / as", isCorrect: false }
    ]

},

{
    id: 6,
    q: "7)----- a celebrity arrives in Istanbul, the first question reporters ask them is ---- they like Istanbul.",
    a: [{ text: "During / whether", isCorrect: false },
    { text: "Until / if", isCorrect: false },
    { text: "Every time / how", isCorrect: true },
    { text: "When / wherever", isCorrect: false }
    ]

},

{
    id: 7,
    q: "8)Despite my insistence, Ashraf didn’t tell me ------ he didn’t like me and my family.",
    a: [{ text: "the reason", isCorrect: false },
    { text: "even if", isCorrect: false },
    { text: "why", isCorrect: true },
    { text: "about whom", isCorrect: false }
    ]

},
{
    id: 8,
    q: "9)Tourists ----- when large numbers of middle-class people ----- to join the more wealthy aristocratic travellers.",
    a: [{ text: "have originated / had begun", isCorrect: false },
    { text: "had originated / began", isCorrect: false },
    { text: "originated / began", isCorrect: true },
    { text: "could have originated / have begun", isCorrect: false }
    ]

},
{
    id: 9,
    q: "10)The wounded hunter------ on the ground for almost an hour when, coincidentally, he ------ by another hunter, who must have keen eyes.",
    a: [{ text: "has been lying / is spotting", isCorrect: false },
    { text: "will have lain / had been spotted", isCorrect: false },
    { text: "had been lying / was spotted", isCorrect: true },
    { text: "was lying / spotted", isCorrect: false }
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
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 10) {

        if (id + 1 == 9) {
            document.getElementById("finish").style.display = "block";
            document.getElementById("next").style.display = "none";
        }
        localStorage.setItem("Answer" + (id+10), text1);
        //  console.log(localStorage.getItem("Answer"+id));
        if (selected == "true") { result = result + 5; trasnposeCounter = trasnposeCounter + 1; } console.log(result); console.log(trasnposeCounter);
        console.log(selected);
        selected = "";
        id++;

        iterate(id);


    }

    // AAAAAAA 
    op1.style.backgroundColor = "#F0F0F0";
    op2.style.backgroundColor = "#F0F0F0";
    op3.style.backgroundColor = "#F0F0F0";
    op4.style.backgroundColor = "#F0F0F0";


    localStorage.setItem("trasnposeCounter", trasnposeCounter);
    localStorage.setItem("result", result);
});
finish.addEventListener("click", () => {
    if (selected == "true") { result = result + 4; trasnposeCounter = trasnposeCounter + 1; }
    console.log(result); console.log(trasnposeCounter);
    localStorage.setItem("trasnposeCounter", trasnposeCounter);
    localStorage.setItem("result", result);
    console.log(localStorage.getItem("loggeduser"));
    var loggeduser = localStorage.getItem("loggeduser");
    localStorage.setItem("Answer" + (id+10), text1);
    localStorage.setItem("result" + loggeduser, result);
    localStorage.setItem("trasnposeCounter"+loggeduser,trasnposeCounter);
    localStorage.setItem("adaptCounter"+loggeduser,localStorage.getItem("adaptCounter"));
    localStorage.setItem("ImitateCounter"+loggeduser,localStorage.getItem("ImitateCounter"));


    location.href = "../Result.html"
});

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");
let panel = document.querySelector(".panel");




//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click", () => {
    panel.style.display = "block";
    guide.style.display = "none";
})