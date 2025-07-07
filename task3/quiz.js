const quizData = [
    {
      question: "What does DOM stand for?",
      a: "Document Object Model",
      b: "Data Object Method",
      c: "Document Oriented Method",
      correct: "a",
    },
    {
      question: "Which tag includes JavaScript?",
      a: "js",
      b: "script",
      c: "javascript",
      correct: "b",
    },
    {
      question: "Which method is used to call an API?",
      a: "getData()",
      b: "fetch()",
      c: "apiCall()",
      correct: "b",
    },
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.question}</p>
      <label><input type="radio" name="q${index}" value="a"> ${q.a}</label>
      <label><input type="radio" name="q${index}" value="b"> ${q.b}</label>
      <label><input type="radio" name="q${index}" value="c"> ${q.c}</label>
    `;
    quizContainer.appendChild(div);
  });
  
  document.getElementById("submit").addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, i) => {
      const ans = document.querySelector(`input[name="q${i}"]:checked`);
      if (ans && ans.value === q.correct) score++;
    });
    document.getElementById("quiz-result").innerText = `You scored ${score}/${quizData.length}`;
  });
  