// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");
  
    if (!name.value || !email.value || !message.value) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields.";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }
  
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your message has been sent.";
    this.reset();
  });
  
  // To-Do List Logic
  function addTask() {
    const taskInput = document.getElementById("todoInput");
    const taskText = taskInput.value.trim();
    const todoList = document.getElementById("todoList");
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    todoList.appendChild(li);
    taskInput.value = "";
  }
  