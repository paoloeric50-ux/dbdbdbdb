// JavaScript for EduXplore video popup

const watchButtons = document.querySelectorAll(".watch-btn");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

if (videoModal) {
  watchButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const videoLink = button.getAttribute("data-video");

      videoFrame.src = videoLink;
      videoModal.style.display = "flex";
    });
  });

  closeVideo.addEventListener("click", function () {
    videoModal.style.display = "none";
    videoFrame.src = "";
  });

  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      videoFrame.src = "";
    }
  });
}

// JavaScript for EduXplore quiz score

const submitQuiz = document.getElementById("submitQuiz");
const retakeQuiz = document.getElementById("retakeQuiz");
const quizResult = document.getElementById("quizResult");

if (submitQuiz) {
  submitQuiz.addEventListener("click", function () {
    let score = 0;

    const answers = {
      question1: "q1-b",
      question2: "q2-c",
      question3: "q3-b",
      question4: "q4-d",
      question5: "q5-a",
      question6: "q6-b",
      question7: "q7-c",
      question8: "q8-b",
      question9: "q9-b",
      question10: "q10-b",
    };

    for (let question in answers) {
      const selectedAnswer = document.querySelector(
        "input[name='" + question + "']:checked",
      );

      if (selectedAnswer && selectedAnswer.id === answers[question]) {
        score++;
      }
    }

    quizResult.textContent = "Your score is " + score + " out of 10.";
  });
}

if (retakeQuiz) {
  retakeQuiz.addEventListener("click", function () {
    const selectedAnswers = document.querySelectorAll(
      "input[type='radio']:checked",
    );

    selectedAnswers.forEach(function (answer) {
      answer.checked = false;
    });

    quizResult.textContent = "";
  });
}

// JavaScript for topic quizzes

const lessonQuizzes = {
  motherboard: {
    title: "Motherboard Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What is the motherboard?",
        choices: [
          "Main circuit board",
          "Sound device",
          "Storage device",
          "Printer part",
        ],
        answer: "Main circuit board",
      },
      {
        question: "What does the motherboard connect?",
        choices: [
          "Only the monitor",
          "Major computer components",
          "Only the mouse",
          "Only the keyboard",
        ],
        answer: "Major computer components",
      },
      {
        question: "Which part is installed on the motherboard?",
        choices: ["CPU", "Paper tray", "Ink cartridge", "Speaker cone"],
        answer: "CPU",
      },
      {
        question: "Which specification is checked for a motherboard?",
        choices: ["CPU socket", "Ink level", "Paper size", "Microphone volume"],
        answer: "CPU socket",
      },
      {
        question: "Why is the motherboard important?",
        choices: [
          "It lets parts communicate",
          "It prints files",
          "It records voice",
          "It controls room lights",
        ],
        answer: "It lets parts communicate",
      },
    ],
  },

  cpu: {
    title: "CPU Quiz",
    passingScore: 3,
    questions: [
      {
        question: "Which component is known as the brain of the computer?",
        choices: ["CPU", "RAM", "PSU", "Keyboard"],
        answer: "CPU",
      },
      {
        question: "What does the CPU do?",
        choices: [
          "Executes instructions",
          "Prints documents",
          "Displays images",
          "Captures sound",
        ],
        answer: "Executes instructions",
      },
      {
        question: "Which CPU specification is commonly checked?",
        choices: ["Clock speed", "Paper size", "Ink color", "Cable length"],
        answer: "Clock speed",
      },
      {
        question: "What does core count describe?",
        choices: [
          "Processing units",
          "Keyboard keys",
          "Speaker volume",
          "Printer paper",
        ],
        answer: "Processing units",
      },
      {
        question: "Where is the CPU usually installed?",
        choices: [
          "Motherboard socket",
          "Printer tray",
          "Monitor screen",
          "Mouse pad",
        ],
        answer: "Motherboard socket",
      },
    ],
  },

  ram: {
    title: "RAM Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does RAM temporarily hold?",
        choices: [
          "Active data and programs",
          "Printed paper",
          "Sound waves",
          "Internet cables",
        ],
        answer: "Active data and programs",
      },
      {
        question: "What happens to RAM data when the computer turns off?",
        choices: [
          "It is usually cleared",
          "It prints automatically",
          "It becomes louder",
          "It turns into storage",
        ],
        answer: "It is usually cleared",
      },
      {
        question: "Which RAM specification is commonly checked?",
        choices: [
          "Capacity in GB",
          "Paper size",
          "Screen brightness",
          "Ink type",
        ],
        answer: "Capacity in GB",
      },
      {
        question: "More RAM can help a computer handle more what?",
        choices: [
          "Applications at the same time",
          "Printed pages only",
          "External speakers only",
          "Mouse clicks only",
        ],
        answer: "Applications at the same time",
      },
      {
        question: "RAM is installed in what part?",
        choices: [
          "Memory slots",
          "Printer tray",
          "Monitor stand",
          "Speaker box",
        ],
        answer: "Memory slots",
      },
    ],
  },

  psu: {
    title: "Power Supply Unit Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does PSU stand for?",
        choices: [
          "Power Supply Unit",
          "Personal Storage Unit",
          "Print Setup Utility",
          "Processor Sound Unit",
        ],
        answer: "Power Supply Unit",
      },
      {
        question: "What does the PSU provide?",
        choices: [
          "Electrical power",
          "Printed documents",
          "Audio recording",
          "Screen image",
        ],
        answer: "Electrical power",
      },
      {
        question: "What does the PSU convert?",
        choices: [
          "AC power to DC power",
          "Sound to text",
          "Files to paper",
          "Images to ink",
        ],
        answer: "AC power to DC power",
      },
      {
        question: "Which PSU specification is commonly checked?",
        choices: ["Wattage", "DPI", "Screen size", "Keyboard layout"],
        answer: "Wattage",
      },
      {
        question: "Why is the PSU important?",
        choices: [
          "It powers internal components",
          "It types text",
          "It prints photos",
          "It moves the pointer",
        ],
        answer: "It powers internal components",
      },
    ],
  },

  keyboard: {
    title: "Keyboard Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What is a keyboard used for?",
        choices: [
          "Typing letters and commands",
          "Displaying images",
          "Printing documents",
          "Storing files",
        ],
        answer: "Typing letters and commands",
      },
      {
        question: "Which device is an input device?",
        choices: ["Keyboard", "Monitor", "Printer", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "Which keyboard specification is commonly checked?",
        choices: ["Layout", "Screen size", "Wattage", "Paper size"],
        answer: "Layout",
      },
      {
        question: "What does a keyboard send to the computer?",
        choices: [
          "Typed characters and commands",
          "Printed paper",
          "Visual output",
          "Sound output",
        ],
        answer: "Typed characters and commands",
      },
      {
        question: "Which key area is found on many keyboards?",
        choices: [
          "Numeric keypad",
          "Ink tray",
          "Speaker grill",
          "Disk platter",
        ],
        answer: "Numeric keypad",
      },
    ],
  },

  mouse: {
    title: "Mouse Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does a mouse control?",
        choices: ["Pointer", "Printer ink", "Speaker sound", "RAM speed"],
        answer: "Pointer",
      },
      {
        question: "Which action can be done with a mouse?",
        choices: [
          "Click and drag",
          "Print paper",
          "Store files",
          "Display videos",
        ],
        answer: "Click and drag",
      },
      {
        question: "Which mouse specification is commonly checked?",
        choices: ["DPI", "Wattage", "Paper size", "Clock speed"],
        answer: "DPI",
      },
      {
        question: "A mouse is what type of device?",
        choices: [
          "Input device",
          "Output device",
          "Storage device",
          "Power device",
        ],
        answer: "Input device",
      },
      {
        question: "What does wireless mean for a mouse?",
        choices: [
          "It connects without a cable",
          "It prints faster",
          "It has more RAM",
          "It has a bigger screen",
        ],
        answer: "It connects without a cable",
      },
    ],
  },

  microphone: {
    title: "Microphone Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does a microphone capture?",
        choices: ["Sound", "Printed paper", "Screen image", "Stored files"],
        answer: "Sound",
      },
      {
        question: "A microphone is what type of device?",
        choices: [
          "Input device",
          "Output device",
          "Storage device",
          "Power device",
        ],
        answer: "Input device",
      },
      {
        question: "What can a microphone be used for?",
        choices: [
          "Recording voice",
          "Printing images",
          "Displaying text",
          "Storing files",
        ],
        answer: "Recording voice",
      },
      {
        question: "Which microphone specification may be checked?",
        choices: ["Pickup pattern", "Wattage", "Screen size", "RAM slots"],
        answer: "Pickup pattern",
      },
      {
        question: "What does a microphone change sound into?",
        choices: [
          "Audio signal",
          "Printed document",
          "Video display",
          "Storage drive",
        ],
        answer: "Audio signal",
      },
    ],
  },

  monitor: {
    title: "Monitor Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does a monitor display?",
        choices: [
          "Visual output",
          "Printed paper",
          "Typed commands",
          "Stored files",
        ],
        answer: "Visual output",
      },
      {
        question: "A monitor is what type of device?",
        choices: [
          "Output device",
          "Input device",
          "Storage device",
          "Power device",
        ],
        answer: "Output device",
      },
      {
        question: "Which monitor specification is commonly checked?",
        choices: [
          "Resolution",
          "Wattage only",
          "Keyboard layout",
          "Pickup pattern",
        ],
        answer: "Resolution",
      },
      {
        question: "Which content can a monitor show?",
        choices: [
          "Text, images, and videos",
          "Only sound",
          "Only printed paper",
          "Only power cables",
        ],
        answer: "Text, images, and videos",
      },
      {
        question: "Which is an example of visual output?",
        choices: [
          "Picture on screen",
          "Voice recording",
          "Mouse click",
          "Keyboard typing",
        ],
        answer: "Picture on screen",
      },
    ],
  },

  speakers: {
    title: "Speakers Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What do speakers produce?",
        choices: ["Sound", "Printed paper", "Typed text", "Stored files"],
        answer: "Sound",
      },
      {
        question: "Speakers are what type of device?",
        choices: [
          "Output device",
          "Input device",
          "Storage device",
          "Power device",
        ],
        answer: "Output device",
      },
      {
        question: "Which speaker specification may be checked?",
        choices: ["Power output", "Screen size", "RAM capacity", "CPU socket"],
        answer: "Power output",
      },
      {
        question: "What do speakers convert digital audio into?",
        choices: [
          "Sound people can hear",
          "Printed pages",
          "Keyboard commands",
          "Stored files",
        ],
        answer: "Sound people can hear",
      },
      {
        question: "Which device is also used for audio output?",
        choices: ["Headphones", "Keyboard", "Mouse", "Microphone"],
        answer: "Headphones",
      },
    ],
  },

  printer: {
    title: "Printer Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does a printer produce?",
        choices: [
          "Physical copies",
          "Sound",
          "Pointer movement",
          "Temporary memory",
        ],
        answer: "Physical copies",
      },
      {
        question: "A printer is what type of device?",
        choices: [
          "Output device",
          "Input device",
          "Storage device",
          "Power device",
        ],
        answer: "Output device",
      },
      {
        question: "Which printer specification is commonly checked?",
        choices: ["Print speed", "CPU socket", "RAM slots", "Pickup pattern"],
        answer: "Print speed",
      },
      {
        question: "What can a printer print?",
        choices: [
          "Documents and images",
          "Audio only",
          "Mouse movement",
          "Computer power",
        ],
        answer: "Documents and images",
      },
      {
        question: "Which is a common printer type?",
        choices: ["Inkjet", "CPU", "RAM", "SSD"],
        answer: "Inkjet",
      },
    ],
  },

  hdd: {
    title: "HDD Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does HDD stand for?",
        choices: [
          "Hard Disk Drive",
          "High Display Device",
          "Hardware Design Driver",
          "Home Data Display",
        ],
        answer: "Hard Disk Drive",
      },
      {
        question: "What does an HDD use to store data?",
        choices: [
          "Spinning magnetic disks",
          "Printed paper",
          "Speaker cones",
          "Keyboard keys",
        ],
        answer: "Spinning magnetic disks",
      },
      {
        question: "What is an HDD used for?",
        choices: [
          "Long-term storage",
          "Typing text",
          "Playing sound",
          "Showing images",
        ],
        answer: "Long-term storage",
      },
      {
        question: "Which HDD specification is commonly checked?",
        choices: [
          "Capacity",
          "Screen brightness",
          "Ink color",
          "Pickup pattern",
        ],
        answer: "Capacity",
      },
      {
        question: "Which is a storage device?",
        choices: ["HDD", "Keyboard", "Mouse", "Speaker"],
        answer: "HDD",
      },
    ],
  },

  ssd: {
    title: "SSD Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What does SSD stand for?",
        choices: [
          "Solid-State Drive",
          "Sound Storage Device",
          "Screen System Display",
          "Simple Software Driver",
        ],
        answer: "Solid-State Drive",
      },
      {
        question: "What does an SSD use?",
        choices: ["Flash memory", "Spinning disks", "Ink", "Paper"],
        answer: "Flash memory",
      },
      {
        question: "Compared to many HDDs, SSDs are usually what?",
        choices: ["Faster", "Louder", "Heavier always", "Only for printing"],
        answer: "Faster",
      },
      {
        question: "Which SSD specification is commonly checked?",
        choices: [
          "Read and write speed",
          "Paper size",
          "Speaker volume",
          "Keyboard layout",
        ],
        answer: "Read and write speed",
      },
      {
        question: "An SSD has no what?",
        choices: ["Moving disks", "Storage", "Files", "Connection"],
        answer: "Moving disks",
      },
    ],
  },

  usb: {
    title: "USB Flash Drive Quiz",
    passingScore: 3,
    questions: [
      {
        question: "What is a USB flash drive?",
        choices: [
          "Small portable storage device",
          "Monitor type",
          "Speaker part",
          "Power cable only",
        ],
        answer: "Small portable storage device",
      },
      {
        question: "What is a USB flash drive commonly used for?",
        choices: [
          "Transferring files",
          "Displaying images",
          "Typing text",
          "Printing documents",
        ],
        answer: "Transferring files",
      },
      {
        question: "Which USB flash drive specification is commonly checked?",
        choices: ["Capacity", "Screen size", "Wattage", "CPU socket"],
        answer: "Capacity",
      },
      {
        question: "Which connector may be found on USB drives?",
        choices: [
          "USB-A or USB-C",
          "HDMI only",
          "Audio jack only",
          "Power plug only",
        ],
        answer: "USB-A or USB-C",
      },
      {
        question: "A USB flash drive is what type of device?",
        choices: [
          "Storage device",
          "Output device only",
          "Input device only",
          "Power device",
        ],
        answer: "Storage device",
      },
    ],
  },
};

const lessonQuizButtons = document.querySelectorAll(".lesson-quiz-btn");
const quizModal = document.getElementById("quizModal");
const closeLessonQuiz = document.getElementById("closeLessonQuiz");
const lessonQuizTitle = document.getElementById("lessonQuizTitle");
const lessonQuizQuestion = document.getElementById("lessonQuizQuestion");
const lessonQuizChoices = document.getElementById("lessonQuizChoices");
const submitLessonQuiz = document.getElementById("submitLessonQuiz");
const nextLessonQuestion = document.getElementById("nextLessonQuestion");
const lessonQuizMessage = document.getElementById("lessonQuizMessage");

let currentQuiz = "";
let currentQuestionNumber = 0;
let lessonScore = 0;
let answerSubmitted = false;

lessonQuizButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentQuiz = button.getAttribute("data-quiz");
    currentQuestionNumber = 0;
    lessonScore = 0;
    answerSubmitted = false;

    openLessonQuiz();
  });
});

function openLessonQuiz() {
  const quiz = lessonQuizzes[currentQuiz];

  quizModal.style.display = "flex";
  lessonQuizTitle.textContent = quiz.title;
  lessonQuizMessage.textContent = "";

  submitLessonQuiz.style.display = "inline-block";
  nextLessonQuestion.style.display = "inline-block";

  showLessonQuestion();
}

function showLessonQuestion() {
  const quiz = lessonQuizzes[currentQuiz];
  const currentQuestion = quiz.questions[currentQuestionNumber];

  answerSubmitted = false;
  lessonQuizQuestion.textContent = currentQuestion.question;
  lessonQuizChoices.innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "lessonChoice";
    radio.value = choice;

    label.appendChild(radio);
    label.append(" " + choice);

    lessonQuizChoices.appendChild(label);
  });

  lessonQuizMessage.textContent = "";
}

if (submitLessonQuiz) {
  submitLessonQuiz.addEventListener("click", function () {
    const selectedChoice = document.querySelector(
      "input[name='lessonChoice']:checked",
    );

    if (answerSubmitted) {
      lessonQuizMessage.textContent = "Click Next Question to continue.";
      return;
    }

    if (!selectedChoice) {
      lessonQuizMessage.textContent = "Please select an answer first.";
      return;
    }

    const quiz = lessonQuizzes[currentQuiz];
    const correctAnswer = quiz.questions[currentQuestionNumber].answer;

    if (selectedChoice.value === correctAnswer) {
      lessonScore++;
      lessonQuizMessage.textContent = "Correct!";
    } else {
      lessonQuizMessage.textContent = "Wrong. Correct answer: " + correctAnswer;
    }

    answerSubmitted = true;

    const choices = document.querySelectorAll("input[name='lessonChoice']");
    choices.forEach(function (choice) {
      choice.disabled = true;
    });
  });
}

if (nextLessonQuestion) {
  nextLessonQuestion.addEventListener("click", function () {
    if (!answerSubmitted) {
      lessonQuizMessage.textContent = "Please submit your answer first.";
      return;
    }

    const quiz = lessonQuizzes[currentQuiz];

    currentQuestionNumber++;

    if (currentQuestionNumber < quiz.questions.length) {
      showLessonQuestion();
    } else {
      finishLessonQuiz();
    }
  });
}

async function finishLessonQuiz() {
  const completedTopic = currentQuiz;
  const completedScore = lessonScore;

  lessonQuizMessage.textContent = "Saving your quiz result...";
  lessonQuizQuestion.textContent = "You have completed this topic quiz.";
  lessonQuizChoices.innerHTML = "";

  submitLessonQuiz.style.display = "none";
  nextLessonQuestion.style.display = "none";

  try {
    const result = await saveQuizResult(completedTopic, completedScore);
    updateLessonStatus(completedTopic, result);
    lessonQuizMessage.textContent =
      "Quiz finished and saved. Status: " +
      result.status +
      " | Score: " +
      result.score +
      "/" +
      result.total;
  } catch (error) {
    lessonQuizMessage.textContent =
      "Quiz finished, but the result could not be saved. Please check your connection and try again later.";
  }
}

async function saveQuizResult(topic, score) {
  const response = await fetch("/api/quiz-results", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, score }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Could not save the quiz result.");
  }

  return data.result;
}

async function getQuizResults() {
  const response = await fetch("/api/quiz-results");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Could not load quiz results.");
  }

  return data.results;
}

function updateLessonStatus(quizName, result) {
  const statusText = result ? result.status : "Not Taken";
  const scoreText = result ? result.score + "/" + result.total : "0/5";
  const retakesText = result ? result.retakes : "0";

  const statusElement = document.getElementById(quizName + "Status");
  const scoreElement = document.getElementById(quizName + "Score");
  const retakesElement = document.getElementById(quizName + "Retakes");

  if (statusElement) {
    statusElement.textContent = "Status: " + statusText;
  }

  if (scoreElement) {
    scoreElement.textContent = "Score: " + scoreText;
  }

  if (retakesElement) {
    retakesElement.textContent = "Retakes: " + retakesText;
  }
}

if (closeLessonQuiz) {
  closeLessonQuiz.addEventListener("click", function () {
    quizModal.style.display = "none";
  });
}

if (quizModal) {
  quizModal.addEventListener("click", function (event) {
    if (event.target === quizModal) {
      quizModal.style.display = "none";
    }
  });
}
// JavaScript for quiz history page

const quizHistoryTopics = [
  "motherboard",
  "cpu",
  "ram",
  "psu",
  "keyboard",
  "mouse",
  "microphone",
  "monitor",
  "speakers",
  "printer",
  "hdd",
  "ssd",
  "usb",
];

function capitalizeTopicName(topicName) {
  if (topicName === "cpu") {
    return "Cpu";
  }

  if (topicName === "ram") {
    return "Ram";
  }

  if (topicName === "psu") {
    return "Psu";
  }

  if (topicName === "hdd") {
    return "Hdd";
  }

  if (topicName === "ssd") {
    return "Ssd";
  }

  if (topicName === "usb") {
    return "Usb";
  }

  return topicName.charAt(0).toUpperCase() + topicName.slice(1);
}

async function loadQuizHistory() {
  const message = document.getElementById("quizHistoryMessage");

  if (!message) {
    return;
  }

  try {
    const quizResults = await getQuizResults();

    quizHistoryTopics.forEach(function (topic) {
      const displayName = capitalizeTopicName(topic);

      const statusElement = document.getElementById(
        "history" + displayName + "Status",
      );
      const scoreElement = document.getElementById(
        "history" + displayName + "Score",
      );
      const retakesElement = document.getElementById(
        "history" + displayName + "Retakes",
      );

      const result = quizResults[topic];
      const savedStatus = result ? result.status : "Not Taken Yet";
      const savedScore = result ? result.score + "/" + result.total : "0/5";
      const savedRetakes = result ? result.retakes : "0";

      if (statusElement) {
        statusElement.textContent = "Status: " + savedStatus;
      }

      if (scoreElement) {
        scoreElement.textContent = "Score: " + savedScore;
      }

      if (retakesElement) {
        retakesElement.textContent = "Retakes: " + savedRetakes;
      }
    });
    message.textContent = "Quiz history loaded from the app server.";
  } catch (error) {
    message.textContent =
      "Could not load quiz history from the server. Please refresh the page.";
  }
}

async function loadLessonProgress() {
  const message = document.getElementById("lessonProgressMessage");

  if (!message) {
    return;
  }

  try {
    const quizResults = await getQuizResults();

    quizHistoryTopics.forEach(function (topic) {
      updateLessonStatus(topic, quizResults[topic]);
    });
    message.textContent = "Saved quiz progress loaded from the app server.";
  } catch (error) {
    message.textContent =
      "Could not load saved quiz progress. Quiz results need the app server to be running.";
  }
}

loadQuizHistory();
loadLessonProgress();