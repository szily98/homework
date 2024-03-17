/*
Started working on the other homework, unfortunetely didn't had time to fully finish it. Then instead of having a normal
landing page, I decided to make a parallax one, which agai, couldn't finsih in time. I had an issue with it which I 
haven't been able to fix yet. Not giving up tho!

Also, this homework made me cry more than any of my exes lol
It wouldn't be me if I wouldn't overcomplicate stuff. 

*/

//General fetch

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not okay.}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    });
}

//Functions

function getAllCharacters() {
  const charactersUrl = "https://rickandmortyapi.com/api/character";
  return fetchData(charactersUrl);
}

function getSingleCharacter(characterId) {
  const characterUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
  return fetchData(characterUrl);
}

function getAllLocations() {
  const locationsUrl = "https://rickandmortyapi.com/api/location";
  return fetchData(locationsUrl);
}

function getSingleLocation(locationId) {
  const locationUrl = `https://rickandmortyapi.com/api/location/${locationId}`;
  return fetchData(locationUrl);
}

function getAllEpisodes() {
  const episodesUrl = "https://rickandmortyapi.com/api/episode";
  return fetchData(episodesUrl);
}

function getSingleEpisode(episodeId) {
  const episodeUrl = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  return fetchData(episodeUrl);
}

// Characters

getAllCharacters().then((allCharacters) => {
  console.log("All characters:", allCharacters);
});

getSingleCharacter(1).then((character) => {
  console.log("Single character 1:", character);
});

getSingleCharacter(8).then((character) => {
  console.log("Single character 8:", character);
});

getSingleCharacter(12).then((character) => {
  console.log("Single character 12:", character);
});

// Locations

getAllLocations().then((allLocations) => {
  console.log("All locations:", allLocations);
});

getSingleLocation(1).then((location) => {
  console.log("Single location 1:", location);
});

getSingleLocation(8).then((location) => {
  console.log("Single location 8:", location);
});

getSingleLocation(14).then((location) => {
  console.log("Single location 14:", location);
});

// Episodes

getAllEpisodes().then((allEpisodes) => {
  console.log("All episodes:", allEpisodes);
});

getSingleEpisode(1).then((episode) => {
  console.log("Single episode 1:", episode);
});

getSingleEpisode(8).then((episode) => {
  console.log("Single episode 8:", episode);
});

getSingleEpisode(13).then((episode) => {
  console.log("Single episode 13:", episode);
});

// Other stuff

document.getElementById("allCharacters").addEventListener("click", function () {
  getAllCharacters().then((allCharacters) => {
    console.log("All characters:", allCharacters);
  });
});

document.getElementById("character1").addEventListener("click", function () {
  getSingleCharacter(1).then((character) => {
    console.log("Single character 1:", character);
  });
});

document.getElementById("character2").addEventListener("click", function () {
  getSingleCharacter(8).then((character) => {
    console.log("Single character 8:", character);
  });
});

document.getElementById("character3").addEventListener("click", function () {
  getSingleCharacter(12).then((character) => {
    console.log("Single character 12:", character);
  });
});

document.getElementById("allLocations").addEventListener("click", function () {
  getAllLocations().then((allLocations) => {
    console.log("All locations:", allLocations);
  });
});

document.getElementById("location1").addEventListener("click", function () {
  getSingleLocation(1).then((location) => {
    console.log("Single location 1:", location);
  });
});

document.getElementById("location2").addEventListener("click", function () {
  getSingleLocation(8).then((location) => {
    console.log("Single location 8:", location);
  });
});

document.getElementById("location3").addEventListener("click", function () {
  getSingleLocation(14).then((location) => {
    console.log("Single location 14:", location);
  });
});

document.getElementById("allEpisodes").addEventListener("click", function () {
  getAllEpisodes().then((allEpisodes) => {
    console.log("All episodes:", allEpisodes);
  });
});

document.getElementById("episode1").addEventListener("click", function () {
  getSingleEpisode(1).then((episode) => {
    console.log("Single episode 1:", episode);
  });
});

document.getElementById("episode2").addEventListener("click", function () {
  getSingleEpisode(8).then((episode) => {
    console.log("Single episode 8:", episode);
  });
});

document.getElementById("episode3").addEventListener("click", function () {
  getSingleEpisode(13).then((episode) => {
    console.log("Single episode 13:", episode);
  });
});
