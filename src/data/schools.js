import { premieres, terminales } from "./classes";

export const schools = [
    {
        id: 1,
        name: "Lycée Technique de Loum",
        levels:[
            {
                id: 1,
                name: "Terminale ",
                classes: ["F3", "AMEB"],
                content: terminales
            },
            {   
                id:1,
                name: "Première ",
                classes: ["IH", "F4-BA-A"],
                content: premieres
            },
            {   
                id:1,
                name: "Secondes ",
                classes: ["F3-A"],
                content: {premieres}
            },
            {   
                id:1,
                name: "4ème Année ",
                classes: ["COME"],
                content: {premieres}
            },


        ],
        
    },
    {
        name: "Collège Bilingue Nal",
    },
    {
        name: "JFN-HUI",
    },
    {
        name: "JFN-HUI",
    },
    

]