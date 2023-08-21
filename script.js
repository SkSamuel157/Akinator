const questionElement = document.getElementById('question');
const questionImageElement = document.getElementById('question-image');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let chances = 2;

const questions = [
    {
        question: 'Qual é o processo pelo qual as plantas produzem seu próprio alimento?',
        image: 'img/fotossintese.jpg',
        answers: [
            { text: 'Fotossíntese', correct: true },
            { text: 'Respiração', correct: false },
            { text: 'Digestão', correct: false },
            { text: 'Secreção', correct: false }
        ]
    },
    {
        question: 'Qual é o valor de x na equação 2x + 5 = 17?',
        image: 'img/Mat.jpg',
        answers: [
            { text: 'X = 9', correct: false },
            { text: 'X = 8', correct: false },
            { text: 'X = 7', correct: false },
            { text: 'X = 6', correct: true }
        ]
    },
    {
        question: 'Qual é o maior órgão do sistema circulatório humano?',
        image: 'img/CorpoH.jpeg',
        answers: [
            { text: 'Fígado', correct: false },
            { text: 'Coração', correct: true },
            { text: 'Pulmões', correct: false },
            { text: 'Veia Cava', correct: false }
        ]
    },
    {
        question: 'Qual foi o tratado que encerrou oficialmente a Primeira Guerra Mundial?',
        image: 'img/tratado.jpg',
        answers: [
            { text: 'Tratado de Paris', correct: false },
            { text: 'Tratado de Viena', correct: false },
            { text: 'Tratado de Versalhes', correct: true },
            { text: 'Tratado de Tordesilhas', correct: false }
        ]
    },
    {
        question: 'Qual é a fórmula química do ácido sulfúrico?',
        image: 'img/Acido.jpg',
        answers: [
            { text: 'HCI', correct: false },
            { text: 'NaOH', correct: false },
            { text: 'CO2', correct: false },
            { text: 'H2SO4', correct: true }
        ]
    },
];

function showQuestion(question) {
    questionElement.innerText = question.question;
    questionImageElement.src = question.image;

    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score += 10;
        resultElement.innerText = 'Resposta correta! Você ganhou 10 pontos.';
        resultElement.style.color = 'green';
    } else {
        chances--;
        resultElement.innerText = 'Resposta incorreta! Tente novamente. Você tem ' + chances + ' chances restantes.';
        resultElement.style.color = 'red';
    }

    answerButtons.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    if (chances === 0) {
        nextButton.innerText = 'Reiniciar';
    } else {
        nextButton.innerText = 'Próxima Pergunta';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        resultContainer.classList.add('hidden');
        answerButtons.classList.remove('hidden');
        nextButton.innerText = 'Responder';
    } else {
        questionElement.innerText = 'Fim do Quiz! Sua pontuação final é: ' + score + ' pontos.';
        questionImageElement.src = '';
        answerButtons.innerHTML = '';
        resultContainer.classList.remove('hidden');
        nextButton.innerText = 'Finalizar';
    }
}

nextButton.addEventListener('click', () => {
    if (chances === 0 || currentQuestionIndex === questions.length) {
        currentQuestionIndex = 0;
        score = 0;
        chances = 2;
        showQuestion(questions[currentQuestionIndex]);
        resultContainer.classList.add('hidden');
        answerButtons.classList.remove('hidden');
        nextButton.innerText = 'Responder';
    } else {
        nextQuestion();
    }
});

showQuestion(questions[currentQuestionIndex]);

