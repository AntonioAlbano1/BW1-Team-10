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

window.onload = function () {
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
  const dom = [];
  for (let i = 0; i < questions.length; i++) {
    const element = questions[i].correct_answer;
    questions[i].incorrect_answers.push(element);
  }
  console.log(questions[0].incorrect_answers);

  const timer = document.querySelector("#timer");
  const starting = 1;
  let time = starting * 60;
  timer.classList.add("color");
  const couwntdown = () => {
    const tempo = setInterval(() => {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      timer.innerHTML = `${minutes}: ${seconds}`;
      time--;
      if (minutes === 0 && seconds === 0) {
        clearInterval(tempo);
        changeByTimer();
      }
    }, 1000);
  };

  const changeByTimer = () => {
    const currentDiv = document.querySelectorAll("div");
    currentDiv[y].classList.add("active");
    console.log(currentDiv);
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
      couwntdown();
    } else {
      window.location.href = "./results.html";
    }
  };

  let right = 0;
  let wrong = 0;
  let y = 0;

  const selected = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("selected");
    e.currentTarget.parentNode.classList.add("active");
    const answer = document.querySelectorAll(".selected");
    console.log(answer);
    const a = answer[y].innerHTML;
    console.log(y);
    const element = questions[y].correct_answer;
    console.log(a);
    if (element === a) {
      right++;
      console.log("giusta", right);
    } else {
      wrong++;
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
    }
    const counter = document.createElement("p");
    counter.innerHTML = `question ${y + 1}/${questions.length}`;
    counter.classList.add("numbers");

    div.appendChild(counter);

    main.appendChild(div);

    couwntdown();
  };
  generaDom();
};
