
const questions = [
    {
        question: "What does a large language model actually predict?",
        options: [
            "The next token",
            "The entire paragraph",
            "The final answer",
            "The user's intention"
        ],
        answer: "The next token"
    },
    {
        question: "In the commit-message format used in this course, what comes before the colon?",
        options: [
            "The author's name",
            "The type, such as feat or fix",
            "The date",
            "The file name"
        ],
        answer: "The type, such as feat or fix"
    },
    {
        question: "What must a unit test do before the bug is fixed?",
        options: [
            "Fail",
            "Pass",
            "Stop running",
            "Delete the code"
        ],
        answer: "Fail"
    },
    {
        question: "Where should the styling for a webpage live?",
        options: [
            "In a separate CSS file",
            "Inside Python",
            "Inside the browser console",
            "Inside a text file"
        ],
        answer: "In a separate CSS file"
    },
    {
        question: "What does a loop inside another loop usually mean for time complexity?",
        options: [
            "It is constant",
            "It is logarithmic",
            "It is quadratic",
            "It is linear"
        ],
        answer: "It is quadratic"
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    resultElement.textContent = "";

    if (currentQuestion >= questions.length) {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        resultElement.textContent =
            `Your score is ${score} out of ${questions.length}`;
        return;
    }

    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;

        button.addEventListener("click", () => {
            if (option === q.answer) {
                score++;
            }

            currentQuestion++;
            showQuestion();
        });

        optionsElement.appendChild(button);
    });
}

showQuestion();
