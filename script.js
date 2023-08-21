const options = document.querySelectorAll('.option');
const submitBtn = document.getElementById('submit-btn');

let currentQuestion = 0;
let score = 0;
let chances = 2;

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
        answer: "Brasília"
    },
    // Adicione mais perguntas aqui...
];

loadQuestion();

submitBtn.addEventListener('click', checkAnswer);

function loadQuestion() {
    const questionContainer = document.querySelector('.question-container');
    const question = questions[currentQuestion];

    questionContainer.querySelector('img').src = `pergunta${currentQuestion + 1}.jpg`;
    questionContainer.querySelector('h2').textContent = `Pergunta ${currentQuestion + 1}: ${question.question}`;

    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) return;

    const answer = questions[currentQuestion].answer;
    const userAnswer = selectedOption.textContent;

    if (userAnswer === answer) {
        score += 10;
    } else {
        chances--;
        if (chances === 0) {
            alert("Você perdeu! Reiniciando o quiz.");
            currentQuestion = 0;
            score = 0;
            chances = 2;
        }
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz concluído! Sua pontuação final: ${score}`);
        currentQuestion = 0;
        score = 0;
        chances = 2;
        loadQuestion();
    }
}
