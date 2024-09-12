import ring from "../assets/ring.png"
import pnecklace from "../assets/jdm_assets/necklece/polki1.jpg"
import knecklace from "../assets/jdm_assets/necklece/kundan1.jpg"
import pjhumka from "../assets/jdm_assets/jhumka/p-jhumka1.png"
import vlocket from "../assets/jdm_assets/locket/v-loc1.png"
import earing from "../assets/earing.png"
import polki from "../assets/polki.jpg"


import kundan1 from "../assets/jdm_assets/necklece/kundan1.jpg"
import phar1 from "../assets/jdm_assets/haram/p-har1.jpg"
import pbelt1 from "../assets/jdm_assets/belt/p-belt1.jpg"
import pbaju from "../assets/jdm_assets/bajuband/p-bajuband1.png"
import ploc1 from "../assets/jdm_assets/locket/p-loc1.png"


import dclosebelt from "../assets/jdm_assets/Diamond/diamond-closebelt.jpg"
import dclosetops1 from "../assets/jdm_assets/Diamond/diamond-closetops1.png"
import diamondhar1 from "../assets/jdm_assets/Diamond/diamond-har.jpg"
import diamondhar2 from "../assets/jdm_assets/Diamond/diamond-har2.jpg"

export const latestProducts = [
    {
        id: 1,
        title: "Polki Necklece",
        price: "300",
        img: pnecklace,
        new: true,
        free: true,
        offer: "40%"
    },
    {
        id: 2,
        title: "Kundan Necklece",
        price: "300",
        img: knecklace,
        new: true,
        free: true,
        offer: "50%"
    },
    {
        id: 3,
        title: "Polki Jhumka",
        price: "150",
        img: pjhumka,
        new: true,
        free: true,
        offer: "40%"
    },
    {
        id: 4,
        title: "Victorian Locket",
        price: "150",
        img: vlocket,
        new: true,
        free: true,
        offer: "40%"
    },
]



export const collections = [
    {
        id: 1,
        img: pnecklace,
        title: "PVK",
        head: "Polki & Victorian & Kundan",
        subs: [
            {
                id: "Necklace",
                name: "Necklace",
                img: kundan1,
            },
            {
                id: "Haram",
                name: "Haram",
                img: phar1,
            },
            {
                id: "Belt",
                name: "Belt",
                img: pbelt1,
            },
            {
                id: "Bajuband/Vanki",
                name: "Bajuband/Vanki",
                img: pbaju,
            },
            {
                id: "Locket",
                name: "Locket",
                img: ploc1,
            },
            {
                id: "Jhumka",
                name: "Jhumka",
                img: pjhumka,
            },
        ],
        choker: ["Single Choker", "Double Choker"]



    },

    {
        id: 2,
        img: dclosebelt,
        title: "Diamond",
        head: "Diamond",
        subs: [
            {
                id: "Belt",
                name: "Close Belt",
                img: dclosebelt,
            },
            {
                id: "Tops",
                name: "Close Tops",
                img: dclosetops1,
            },
            {
                id: "Haram",
                name: "Haram Open",
                img: diamondhar1,
            },

        ],
        necklace: ["Single", "Double"],
        choker: ["Single Choker", "Double Choker", "3 In 1"],
        haram: ["Single ", "Double "],
        Locket: ["Big", "Small"],

    },
]


