// Image Carousel
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&h=200"
];

let current = 0;

function nextImage() {
  current = (current + 1) % images.length;
  document.getElementById('carouselImage').src = images[current];
}

// Quiz Data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Hemingway", "Dickens"],
    answer: "Shakespeare"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentQuiz = 0;

function loadQuiz() {
  const quiz = quizData[currentQuiz];
  document.getElementById("quizQuestion").textContent = quiz.question;
  const optionsDiv = document.getElementById("quizOptions");
  optionsDiv.innerHTML = "";

  quiz.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuiz].answer;
  const result = document.getElementById("quizResult");
  if (selected === correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong! Correct answer: ${correct}`;
    result.style.color = "red";
  }

  // Load next quiz after 2 seconds
  setTimeout(() => {
    currentQuiz = (currentQuiz + 1) % quizData.length;
    result.textContent = "";
    loadQuiz();
  }, 2000);
}

loadQuiz();

// Fetch Joke from API
function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = data.joke;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Oops! Couldn't load joke.";
    });
}
