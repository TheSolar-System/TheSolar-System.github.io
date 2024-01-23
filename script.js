function showPlanetInfo(planet) {
  var planetName = document.getElementById("planetName");
  var planetDescription = document.getElementById("planetDescription");
  var planetInfo = document.getElementById("planetInfo");

  // Update the planet information
  if (planet === 'mercury') {
    planetName.textContent = "Mercury";
    planetDescription.textContent = "Mercury is the closest planet to the Sun and has extreme temperature variations, with scorching hot days and freezing nights. It has no atmosphere, which means there is no protection from the Sun's intense heat and solar winds.";
  } else if (planet === 'venus') {
    planetName.textContent = "Venus";
    planetDescription.textContent = "Venus rotates on its axis very slowly and in the opposite direction to most other planets, making a day on Venus longer than a year. It has a thick atmosphere composed mainly of carbon dioxide, causing a runaway greenhouse effect and making it the hottest planet in our solar system.";
  } else if (planet === 'earth') {
    planetName.textContent = "Earth";
    planetDescription.textContent = "Earth is the only known planet to support life, with a diverse range of ecosystems and a variety of living organisms. The Earth's atmosphere is made up of about 78% nitrogen, 21% oxygen, and small amounts of other gases..";
  } else if (planet === 'mars') {
    planetName.textContent = "Mars";
    planetDescription.textContent = "Often called the Red Planet due to its reddish appearance, Mars has iron oxide (rust) on its surface. Mars has the tallest volcano and the deepest canyon in our solar system—Olympus Mons and Valles Marineris, respectively.";
  } else if (planet === 'jupiter') {
    planetName.textContent = "Jupiter";
    planetDescription.textContent = "Jupiter is the largest planet in our solar system, with a mass more than twice that of all the other planets combined. It has a strong magnetic field and dozens of moons, including the four largest called the Galilean moons: Io, Europa, Ganymede, and Callisto.";
  } else if (planet === 'saturn') {
    planetName.textContent = "Saturn";
    planetDescription.textContent = "Saturn is famous for its stunning ring system, which is composed of ice particles, rocks, and dust. It has a lower density than water, meaning it would float if there were a large enough bathtub to hold it.";
  } else if (planet === 'uranus') {
    planetName.textContent = "Uranus";
    planetDescription.textContent = "Uranus is unique among the planets because it rotates on its side, likely due to a collision early in its formation. It has a faint ring system and is often referred to as an ice giant.";
  } else if (planet === 'neptune') {
    planetName.textContent = "Neptune";
    planetDescription.textContent = "Neptune is the farthest planet from the Sun and is known for its deep blue color. It has the strongest winds in the solar system, reaching speeds of over 1,000 miles per hour.";
  }

  // Show the planet information card
  planetInfo.classList.add("active");
}

function closePlanetInfo() {
  var planetInfo = document.getElementById("planetInfo");

  // Hide the planet information card
  planetInfo.classList.remove("active");
}