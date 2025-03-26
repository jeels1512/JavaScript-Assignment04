fetch("https://raw.githubusercontent.com/jeels1512/stepwell-json-data/main/data.json")
  .then(res => res.json())
  .then(displayPlaces);


function displayPlaces(places) {
  const container = document.getElementById("places-container");
  places.forEach((place) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" />
      <div class="card-content">
        <h2>${place.name}</h2>
        <p><strong>Location:</strong> ${place.location}</p>
        <p><strong>Year Built:</strong> ${place.yearBuilt}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
