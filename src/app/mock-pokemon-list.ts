import { Pokemon } from "./pokemon";

export const POKEMONS: Pokemon[] =[
    {
        id:1,
        name:"Bulbizarre",
        hp:25,
        cp:5,
        picture:"https://tse2.mm.bing.net/th?id=OIP.7ssjXph97I_L15Y7iIXSZwHaHY&pid=Api&P=0&h=180",
        types:["Plante","Poison"],
        created: new Date,
    },
    {  
        id:2,
        name:"Salamèche",
        hp:28,
        cp:6,
        picture:"https://tse3.mm.bing.net/th?id=OIP.zFOjlj_6V9YIQGTfE0y7GQAAAA&pid=Api&P=0&h=180",
        types:["Feu"],
        created: new Date,
    },
    {
        id:3,
        name:"Carapuche",
        hp:21,
        cp:2,
        picture:"https://tse2.mm.bing.net/th?id=OIP.zR7HCvRPJe_e0Sw5B_zP1AAAAA&pid=Api&P=0&h=180",
        types:["Insecte","Poison"],
        created: new Date,
    },
];