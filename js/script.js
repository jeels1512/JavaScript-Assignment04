fetch("https://raw.githubusercontent.com/jeels1512/stepwell-json-data/refs/heads/main/data.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to fetch JSON");
    return res.json();
  })
  .then(data => {
    const container = document.getElementById("stepwell-container");
    container.innerHTML = ""; // Clear if needed

    data.forEach(stepwell => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${stepwell.image}" alt="${stepwell.name}" />
        <h3>${stepwell.name}</h3>
        <p><strong>Location:</strong> ${stepwell.location}</p>
        <p><strong>Year Built:</strong> ${stepwell.yearBuilt}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading data:", err));
