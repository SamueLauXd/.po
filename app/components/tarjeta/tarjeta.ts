import { Personaje } from '../../dataApi';

export const getCharacters = async (): Promise<Array<Personaje>> => {
    const personajes = await fetch('https://rickandmortyapi.com/api/character');
    const data = await personajes.json();
    console.log(data.results);
    return data.results;
};