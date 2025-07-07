function fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById("jokeDisplay").textContent = data.joke;
      })
      .catch(() => {
        document.getElementById("jokeDisplay").textContent = "Failed to load joke.";
      });
  }
  