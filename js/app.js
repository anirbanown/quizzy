const quizData = [{
        question: "Who is considered the Father of the Indian Constitution?",
        a: "Mahatma Gandhi",
        b: "Jawaharlal Nehru",
        c: "Dr. B.R. Ambedkar",
        d: "Sardar Vallabhbhai Patel",
        correct: "c",
    },
    {
        question: "In which year did the Indian Constitution come into effect?",
        a: "1947",
        b: "1950",
        c: "1949",
        d: "1951",
        correct: "b",
    },
    {
        question: "Which part of the Constitution deals with Fundamental Rights?",
        a: "Part I",
        b: "Part III",
        c: "Part IV",
        d: "Part II",
        correct: "b",
    },
    {
        question: "How many schedules are there in the Indian Constitution?",
        a: "10",
        b: "8",
        c: "12",
        d: "11",
        correct: "c",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);