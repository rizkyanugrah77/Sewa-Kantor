import { City } from "../types/city.types";

const cityNames = [
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Bandung",
    "Medan",
    "Semarang",
    "Makasar",
    "Jambi",
    "Berebes",
    "Balikpapan"
];

export const cities: City[] = cityNames.map((name, i)=> {
    // const officeCount = offiiceSpaces.filter((space)=> space.location === name).length;
    return {
        id: i + 1,
        name,
        officeCount: 1,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) * 1}.png`,
        slug: name.toLocaleLowerCase().replace(/ /g, "-"),  //Jakarta Pusat -> jakarta-pusat
    }
})