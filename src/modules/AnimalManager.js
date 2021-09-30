const remoteURL = "http://localhost:5002"

// export const getAnimalById = (animalId) => {
//   //be sure your animals have good data and related to a location and customer
//   return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
//   .then(res => res.json())
// }

export const getAllAnimals = () => {
  const fetchResults = fetch(`${remoteURL}/animals?_expand=location&_expand=customer`)
  .then(res => res.json())
  console.log("fetchResults inside getAllAnimals is: ", fetchResults)
  return fetch(`${remoteURL}/animals?_expand=location&_expand=customer`)
  .then(res => res.json())
}