import { Dog } from "./Dog";

/**
 * Kutya API műveleteit végrehajtó osztály
 */
export class DogService {
    url = "dogs.json";

    /**
     * Visszaadja az összes kutya adatát
     * @returns A kutyák adatait tartalmazó lista
     */
    async getAll(): Promise<Dog[]> {
        const response = await fetch(this.url);
        const dogs = await response.json() as Dog[];
        return dogs;
    }

    /**
     * Módosít egy kutyát
     * @param id A kutya azonosítója
     * @param newValues A kutya új adatai
     */
    async update(id: number, newValues: Dog) {
        console.log(id, newValues);
        // TODO: implement method
    }
}