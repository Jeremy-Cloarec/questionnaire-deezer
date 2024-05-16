const dataQuiz = [
    {
        id: 1,
        titreQuestion: "Taylor Swift",
        question: "Quel est son nom complet ?",
        a: "Taylor Sarah Swift",
        b: "Taylor Alison Swift",
        c: "Taylor Lorie Swift",
        d: "Taylor Ashley Swift",
        correct: "b"
    },
    {
        id: 2,
        titreQuestion: "The Beatles",
        question: "En quelle année les Beatles se sont-ils séparés ?",
        a: "1968",
        b: "1970",
        c: "1972",
        d: "1974",
        correct: "b"
    },
    {
        id: 3,
        titreQuestion: "Michael Jackson",
        question: "Quel est le titre de l'album le plus vendu de Michael Jackson ?",
        a: "Thriller",
        b: "Bad",
        c: "Dangerous",
        d: "Off the Wall",
        correct: "a"
    },
    {
        id: 4,
        titreQuestion: "Beyoncé",
        question: "Quel est le nom de la première chanson solo de Beyoncé à atteindre le numéro un du Billboard Hot 100 ?",
        a: "Single Ladies",
        b: "Crazy in Love",
        c: "Halo",
        d: "Irreplaceable",
        correct: "b"
    },
    {
        id: 5,
        titreQuestion: "Elvis Presley",
        question: "Quel était le surnom d'Elvis Presley ?",
        a: "The King of Rock and Roll",
        b: "The King of Pop",
        c: "The Voice",
        d: "The Piano Man",
        correct: "a"
    },
    {
        id: 6,
        titreQuestion: "Adele",
        question: "Quel est le titre de l'album d'Adele sorti en 2015 ?",
        a: "19",
        b: "21",
        c: "25",
        d: "30",
        correct: "c"
    },
    {
        id: 7,
        titreQuestion: "Queen",
        question: "Quel est le nom du célèbre chanteur du groupe Queen ?",
        a: "Freddie Mercury",
        b: "Brian May",
        c: "Roger Taylor",
        d: "John Deacon",
        correct: "a"
    }
];

// Sélectionnez l'élément HTML où vous voulez insérer les questions et les réponses
const quizContainer = document.querySelector('.quiz-container');

// Créez une fonction pour générer le HTML pour une question et ses réponses
function generateQuestionHTML(questionData) {
    return `
        <div class="question-container">
            <h1>Q. ${questionData.id} ${questionData.titreQuestion}</h1>
            <div class="question">${questionData.question}</div>
        </div>
        <div class="answers-container">
            <button class="answer-button" data-answer="a"><span class="answer">${questionData.a}</span></button>
            <button class="answer-button" data-answer="b"><span class="answer">${questionData.b}</span></button>
            <button class="answer-button" data-answer="c"><span class="answer">${questionData.c}</span></button>
            <button class="answer-button" data-answer="d"><span class="answer">${questionData.d}</span></button>
        </div>
    `;
}

// Variable pour garder la trace de la question actuelle
let currentQuestionIndex = 0;

// Fonction pour afficher la question actuelle
function showCurrentQuestion() {
    quizContainer.innerHTML = generateQuestionHTML(dataQuiz[currentQuestionIndex]);
}

// Affichez la première question
showCurrentQuestion();

// Ajoutez un écouteur d'événements pour passer à la question suivante lorsque l'utilisateur sélectionne une réponse
quizContainer.addEventListener('click', function(event) {
    if (event.target.matches('.answer-button')) {
        // Vérifiez si la réponse est correcte
        if (event.target.dataset.answer === dataQuiz[currentQuestionIndex].correct) {
            event.target.style.backgroundColor = 'green';
        } else {
            event.target.style.backgroundColor = 'red';

            // Trouvez le bouton de la bonne réponse et changez sa couleur en vert
            const correctAnswerButton = quizContainer.querySelector(`.answer-button[data-answer="${dataQuiz[currentQuestionIndex].correct}"]`);
            correctAnswerButton.style.backgroundColor = 'green';
        }

        // Désactivez les boutons de réponse
        const answerButtons = quizContainer.querySelectorAll('.answer-button');
        answerButtons.forEach(button => button.disabled = true);

        // Passez à la question suivante après 5 secondes
        setTimeout(function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < dataQuiz.length) {
                showCurrentQuestion();
            } else {
                quizContainer.innerHTML = '<h1>Quiz terminé!</h1>';
            }
        }, 5000);
    }
});