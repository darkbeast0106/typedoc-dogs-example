import { DogService } from "./DogService";
const dogService = new DogService();

document.addEventListener("DOMContentLoaded", () => {
  listDogs();
});

/**
 * Kilistázza a kutyákat a "dogs" azonosítójú táblázatba.
 */
export async function listDogs() {
  const dogs = await dogService.getAll();
  const tableRows = dogs.map(dog => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const breedCell = document.createElement("td");

    idCell.textContent = dog.id.toString();
    nameCell.textContent = dog.name;
    ageCell.textContent = dog.age.toString();
    breedCell.textContent = dog.breed;

    row.append(...[idCell, nameCell, ageCell, breedCell]);
    return row;
  });
  const dogsTable = document.getElementById("dogs");
  dogsTable!.textContent = "";
  dogsTable!.append(...tableRows);
}
