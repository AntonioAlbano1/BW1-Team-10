const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// TIPS:
// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile
for (let i = 0; i < questions.length; i++) {
  const element = questions[i].correct_answer;
  questions[i].incorrect_answers.push(element);
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledArr = shuffle(questions[i].incorrect_answers);
  console.log(shuffledArr);
}

let time = null;
let timeVF = null;
function tempo() {
  let circularProgress = document.querySelector(".circular-progress");
  const timer = document.querySelector("#timer");
  timer.classList.add("color");
  clearInterval(time);
  clearInterval(timeVF);
  let times = 60;
  time = setInterval(() => {
    timer.innerHTML = `${times}`;
    times--;
    circularProgress.style.background = `conic-gradient(#00FFFF ${
      times * 6.1
    }deg , #ededed 0deg)`;
    if (times === 0) {
      clearInterval(time);
      changeByTimer();
    }
  }, 1000);
}

function tempoVF() {
  let circularProgress = document.querySelector(".circular-progress");
  const timer = document.querySelector("#timer");
  timer.classList.add("color");
  clearInterval(timeVF);
  clearInterval(time);
  let timesVF = 30;
  timeVF = setInterval(() => {
    timer.innerHTML = `${timesVF}`;
    timesVF--;
    circularProgress.style.background = `conic-gradient(#00FFFF ${
      timesVF * 12.5
    }deg , #ededed 0deg)`;
    if (timesVF === 0) {
      clearInterval(timeVF);
      changeByTimer();
    }
  }, 1000);
}
let right = 0;
let wrong = 0;
let percentR = 0;
let percentW = 0;
let y = 0;

const changeByTimer = () => {
  const currentDiv = document.querySelectorAll("div");
  currentDiv[y + 3].classList.add("active");
  currentDiv[y + 3].classList.add("selected");
  wrong++;
  console.log("sbagliata", wrong);
  console.log(percentW);
  change();
};

const change = () => {
  const currentQuestion = document.getElementsByClassName("active");
  console.log(currentQuestion[y]);
  if (y !== questions[y]) {
    currentQuestion[y].style.display = "none";
  }
  y++;
  if (y < questions.length) {
    generaDom();
  } else {
    clearInterval(time);
    clearInterval(timeVF);
    const timer = document.querySelector("#timer");
    timer.classList.add("hide");
    let circularProgress = document.querySelector(".circular-progress");
    circularProgress.classList.add("hide");
    const swit = document.querySelector("#donut");
    swit.style.display = "block";
    total();
  }
};

const selected = (e) => {
  e.currentTarget.classList.add("selected");
  e.currentTarget.parentNode.classList.add("active");
  const answer = document.querySelectorAll(".selected");
  console.log(answer);
  const a = answer[y].innerHTML;
  const element = questions[y].correct_answer;
  console.log(a);
  if (element === a) {
    right++;
    percentR = ((right / 10) * 100).toFixed(0);
    console.log("giusta", right);
    console.log(percentR);
  } else {
    wrong++;
    percentW = ((wrong / 10) * 100).toFixed(0);
    console.log(percentW);
    console.log("sbagliata", wrong);
  }

  change();
};

const generaDom = () => {
  const main = document.getElementById("onlyMain");
  const div = document.createElement("div");
  div.classList.add("btn");
  const quest = document.createElement("h1");
  quest.innerHTML = `${questions[y].question}`;
  div.appendChild(quest);
  for (let j = 0; j < questions[y].incorrect_answers.length; j++) {
    const button = document.createElement("button");
    button.classList.add("butt");
    button.type = "submit";
    button.innerHTML = `${questions[y].incorrect_answers[j]}`;
    div.appendChild(button);
    button.addEventListener("click", selected);
    if (questions[y].incorrect_answers.length === 2) {
      tempoVF();
    } else {
      tempo();
    }
  }
  const counter = document.createElement("span");
  const span = document.createElement("span");
  counter.innerHTML = `question ${y + 1}`;
  span.innerHTML = `/${questions.length}`;
  counter.classList.add("numbers");

  div.appendChild(counter);
  div.appendChild(span);

  main.appendChild(div);
};

const total = () => {
  if (right >= 6) {
    generate();
  } else {
    generate();
  }
};

const generate = () => {
  //   BLOCCO CENTRALE

  const grafic = document.querySelector("#grafico");
  const block = document.createElement("div");
  block.classList.add("results");
  const correct = document.createElement("h2");
  correct.innerText = "Correct";
  const percent = document.createElement("h3");
  percent.innerText = `${percentR}%`;
  const questions = document.createElement("h4");
  questions.innerText = `${right}/10 questions`;
  block.appendChild(correct);
  block.appendChild(percent);
  block.appendChild(questions);

  // CIAMBELLA
  const block1 = document.createElement("div");
  block1.classList.add("results");
  const container = document.createElement("div");
  container.classList.add("container-big");
  const circular = document.createElement("div");
  circular.classList.add("cirucular");
  const result = document.createElement("h5");
  result.innerText = "Congratulations";
  const coloredH5 = document.createElement("h5");
  coloredH5.classList.add("colored");
  coloredH5.innerText = "You passed the exam.";
  const info = document.createElement("p");
  info.innerText =
    "We'll send you the certificate in few minutes.Check your email (including promotions / spam folder)";
  info.classList.add("congrP");
  circular.appendChild(result);
  circular.appendChild(coloredH5);
  circular.appendChild(info);
  container.appendChild(circular);
  block1.appendChild(container);

  const block2 = document.createElement("div");
  block2.classList.add("results");
  const noCorrect = document.createElement("h2");
  noCorrect.innerText = "Wrong";
  const percent2 = document.createElement("h3");
  percent2.innerText = `${percentW}%`;
  const questions2 = document.createElement("h4");
  questions2.innerText = `${wrong}/10 questions`;

  block2.appendChild(noCorrect);
  block2.appendChild(percent2);
  block2.appendChild(questions2);

  grafic.appendChild(block);
  grafic.appendChild(block1);
  grafic.appendChild(block2);
};

const newButton = document.querySelector("#tofeed");
newButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./html.index/feedback.html";
});

window.onload = function () {
  generaDom();
};
