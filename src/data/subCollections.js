import earing from "../assets/earing.png"
import polki from "../assets/polki.jpg"
import victorian from "../assets/victorian.jpg"
import kundan from "../assets/kundan.jpeg"
// Necklece
import kundan1 from "../assets/jdm_assets/necklece/kundan1.jpg"
import kundan2 from "../assets/jdm_assets/necklece/kundan2.jpg"
import kundan3 from "../assets/jdm_assets/necklece/kundan3.jpg"
import polki1 from "../assets/jdm_assets/necklece/polki1.jpg"
import polki2 from "../assets/jdm_assets/necklece/polki2.jpg"
import victorian1 from "../assets/jdm_assets/necklece/victorian1.jpg"
import victorian2 from "../assets/jdm_assets/necklece/victorian2.jpg"
// Haram
import phar1 from "../assets/jdm_assets/haram/p-har1.jpg"
import phar2 from "../assets/jdm_assets/haram/p-har2.jpg"
import phar3 from "../assets/jdm_assets/haram/p-har3.jpg"
import phar4 from "../assets/jdm_assets/haram/p-har4.jpg"
import vhar1 from "../assets/jdm_assets/haram/v-har1.jpg"
import vhar2 from "../assets/jdm_assets/haram/v-har2.jpg"
import vhar3 from "../assets/jdm_assets/haram/v-har3.jpg"
import vhar4 from "../assets/jdm_assets/haram/v-har4.jpg"
// Belt
import pbelt1 from "../assets/jdm_assets/belt/p-belt1.jpg"
import pbelt2 from "../assets/jdm_assets/belt/p-belt2.jpg"
import pbelt3 from "../assets/jdm_assets/belt/p-belt3.jpg"
import pbelt4 from "../assets/jdm_assets/belt/p-belt4.jpg"
// Bajuband
import pbaju from "../assets/jdm_assets/bajuband/p-bajuband1.png"
import pbaju2 from "../assets/jdm_assets/bajuband/p-bajuband2.png"
import pbaju3 from "../assets/jdm_assets/bajuband/p-bajuband3.png"
import pbaju4 from "../assets/jdm_assets/bajuband/p-bajuband4.png"
// Lockets
import ploc1 from "../assets/jdm_assets/locket/p-loc1.png"
import ploc2 from "../assets/jdm_assets/locket/p-loc2.png"
import ploc3 from "../assets/jdm_assets/locket/p-loc3.png"
import ploc4 from "../assets/jdm_assets/locket/p-loc4.png"
import vloc1 from "../assets/jdm_assets/locket/v-loc1.png"
import vloc2 from "../assets/jdm_assets/locket/v-loc2.png"
import vloc3 from "../assets/jdm_assets/locket/v-loc3.png"
import vloc4 from "../assets/jdm_assets/locket/v-loc4.png"
// Jhumka
import pjhumka1 from "../assets/jdm_assets/jhumka/p-jhumka1.png"
import pjhumka2 from "../assets/jdm_assets/jhumka/p-jhumka2.png"
import pjhumka3 from "../assets/jdm_assets/jhumka/p-jhumka3.png"
import pjhumka4 from "../assets/jdm_assets/jhumka/p-jhumka4.png"
// Chandbali 
import pchand from "../assets/jdm_assets/chandbali/p-chand.png"
import pchand2 from "../assets/jdm_assets/chandbali/p-chand2.png"
import pchand3 from "../assets/jdm_assets/chandbali/p-chand3.png"
import pchand4 from "../assets/jdm_assets/chandbali/p-chand4.png"
import pchand5 from "../assets/jdm_assets/chandbali/p-chand5.png"

// !!Diamond
import dclosebelt from "../assets/jdm_assets/Diamond/diamond-closebelt.jpg"
import dclosetops1 from "../assets/jdm_assets/Diamond/diamond-closetops1.png"
import dclosetops2 from "../assets/jdm_assets/Diamond/diamond-closetops2.png"
import dclosetops3 from "../assets/jdm_assets/Diamond/diamond-closetops3.png"
import dclosetops4 from "../assets/jdm_assets/Diamond/diamond-closetops4.png"
import diamondhar1 from "../assets/jdm_assets/Diamond/diamond-har.jpg"
import diamondhar2 from "../assets/jdm_assets/Diamond/diamond-har2.jpg"



export const pvksubs = [
    {
        id: "Necklace",
        name: "Necklace (Kundan, Polki, Victorian)",
        // img: [kundan, kundan, kundan],
        obj: [
            {
                img: kundan1,
                prod: "Kundan",
                free: true,
            },
            {
                img: kundan2,
                prod: "Kundan",
                free: true,
            },
            {
                img: kundan3,
                prod: "Kundan",
                free: true,
            },
            {
                img: polki1,
                prod: "Polki",
                free: true,

            },
            {
                img: polki2,
                prod: "Polki",
                free: true,
            },
            {
                img: victorian1,
                prod: "Victorian",
                free: false,
            },
            {
                img: victorian2,
                prod: "Victorian",
                free: false,
            },
        ],
        price: "300",
    },
    // {
    //     id: "Choker",
    //     name: "Choker (Kundan, Polki, Victorian)",
    //     // img: [kundan, kundan, kundan],
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     price: "300",
    // },
    {
        id: "Haram",
        name: "Haram (Kundan, Polki, Victorian)",
        // img: [kundan, kundan, kundan],
        obj: [
            {
                img: vhar1,
                prod: "Victorian",
                free: true
            },
            {
                img: vhar2,
                prod: "Victorian",
                free: true
            },
            {
                img: vhar3,
                prod: "Victorian",
                free: true
            },
            {
                img: vhar4,
                prod: "Victorian",
                free: false,
            },
            {
                img: phar1,
                prod: "Polki",
                free: true
            },
            {
                img: phar2,
                prod: "Polki",
                free: true
            },
            {
                img: phar3,
                prod: "Polki",
                free: true
            },
            {
                img: phar4,
                prod: "Polki",
                free: false
            },
        ],
        price: "400",
    },
    {
        id: "Belt",
        name: "Belt (Kundan, Polki, Victorian)",
        // img: [kundan, kundan, kundan],
        obj: [
            {
                img: pbelt1,
                prod: "Polki",
                free: true,
            },
            {
                img: pbelt2,
                prod: "Polki",
                free: true,
            },
            {
                img: pbelt3,
                prod: "Polki",
                free: true,
            },
            {
                img: pbelt4,
                prod: "Polki",
                free: false,
            },
        ],
        price: "400",
    },
    // {
    //     id: "JDA-Bridal",
    //     name: "JDA-Bridal (Kundan, Polki, Victorian)",
    //     // img: [kundan, kundan, kundan],
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     price: "400",
    // },
    {
        id: "Bajuband/Vanki",
        name: "Bajuband/Vanki (Kundan, Polki, Victorian)",
        // img: [kundan, kundan, kundan],
        obj: [
            {
                img: pbaju,
                prod: "Polki",
                free: true,
            },
            {
                img: pbaju2,
                prod: "Polki",
                free: true,
            },
            {
                img: pbaju3,
                prod: "Polki",
                free: true,
            },
            {
                img: pbaju4,
                prod: "Polki",
                free: false,
            },
        ],
        price: "200",
    },
    {
        id: "Locket",
        name: "Locket (Kundan, Polki, Victorian)",
        // img: [kundan, kundan, kundan],
        obj: [
            {
                img: vloc1,
                prod: "Victorian",
                free: true,
            },
            {
                img: vloc2,
                prod: "Victorian",
                free: true,
            },
            {
                img: vloc3,
                prod: "Victorian",
                free: true,
            },
            {
                img: vloc4,
                prod: "Victorian",
                free: false,
            },
            {
                img: ploc1,
                prod: "Polki",
                free: true,
            },
            {
                img: ploc2,
                prod: "Polki",
                free: true,
            },
            {
                img: ploc3,
                prod: "Polki",
                free: true,
            },
            {
                img: ploc4,
                prod: "Polki",
                free: false,
            },
        ],
        price: "150",
    },
    // {
    //     id: "Tops",
    //     name: "Tops (Kundan, Polki, Victorian)",
    //     // img: [kundan, kundan, kundan],
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     price: "100",
    // },
    {
        id: "Jhumka",
        name: "Jhumka (Kundan, Polki, Victorian)",
        obj: [
            {
                img: pjhumka1,
                prod: "Polki",
                free: true,
            },
            {
                img: pjhumka2,
                prod: "Polki",
                free: true,
            },
            {
                img: pjhumka3,
                prod: "Polki",
                free: true,
            },
            {
                img: pjhumka4,
                prod: "Polki",
                free: false,
            },
        ],
        // img: [kundan, kundan, kundan],
        price: "150",
    },
    // {
    //     id: "Earing",
    //     name: "Earing (Kundan, Polki, Victorian)",
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     // img: [kundan, kundan, kundan],
    //     price: "150",
    // },
    {
        id: "Chandbali",
        name: "Chandbali (Kundan, Polki, Victorian)",
        obj: [

            {
                img: pchand,
                prod: "Polki",
                free: true,
            },
            {
                img: pchand2,
                prod: "Polki",
                free: true,
            },
            {
                img: pchand3,
                prod: "Polki",
                free: true,
            },
            {
                img: pchand4,
                prod: "Polki",
                free: true,
            },
            {
                img: pchand5,
                prod: "Polki",
                free: false,
            },
        ],
        // img: [kundan, kundan, kundan],
        price: "150",
    },
    // {
    //     id: "Bangles",
    //     name: "Bangles (Kundan, Polki, Victorian)",
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     // img: [kundan, kundan, kundan],
    //     price: "150",
    // },
    // {
    //     id: "Bracelet",
    //     name: "Bracelet (Kundan, Polki, Victorian)",
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     img: [kundan, kundan, kundan],
    //     price: "150",
    // },
    // {
    //     id: "Tika",
    //     name: "Tika (Kundan, Polki, Victorian)",
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     img: [kundan, kundan, kundan],
    //     price: "150",
    // },
    // {
    //     id: "Ring",
    //     name: "Ring (Kundan, Polki, Victorian)",
    //     obj: [
    //         {
    //             img: kundan,
    //             prod: "Kundan"
    //         },
    //         {
    //             img: victorian,
    //             prod: "Victorian"
    //         },
    //         {
    //             img: polki,
    //             prod: "Polki"
    //         },
    //     ],
    //     img: [kundan, kundan, kundan],
    //     price: "100",
    // },
]


export const DiamondSubs = [
    {
        id: "Belt",
        name: "Belt",
        obj: [
            {
                img: dclosebelt,
                prod: "Belt (Close)",
                free: true,
            },

        ],
        price: "400 / X2 700",
    },
    {
        id: "Tops",
        name: "Tops",
        obj: [
            {
                img: dclosetops1,
                prod: "Tops(Close)",
                free: true,
            },
            {
                img: dclosetops2,
                prod: "Tops(Close)",
                free: true,
            },
            {
                img: dclosetops3,
                prod: "Tops(Close)",
                free: true,
            },
            {
                img: dclosetops4,
                prod: "Tops(Close)",
                free: false,
            },

        ],
        price: "100",
    },
    {
        id: "Haram",
        name: "Haram",
        obj: [
            {
                img: diamondhar1,
                prod: "Haram(Open)",
                free: true,
            },
            {
                img: diamondhar2,
                prod: "Haram(Open)",
                free: true,
            },

        ],
        price: "500 /X2 800",
    },


]
