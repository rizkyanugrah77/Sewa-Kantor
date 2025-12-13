import { OfficeSpace } from "../types/offices.types";

export const officeSpaces : OfficeSpace[] = [
    {
        id : 1,
        title: 'Media Park center',
        slug: 'media-park-cener',
        price: 12232321,
        duration: '30 days',
        location: 'Jakarta Pusat',
        rating: 4.5,
        address: "jl bunga kamboja 44",
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/public/assets/images/thumbnails/thumbnails-2.png",
            "/public/assets/images/thumbnails/thumbnails-3.png"
        ],
        tags: ["Popular"],
        about: 'Wheter you need quiet private space away from distractions',
        features: ['Global Event', 'Privacy', "Free Move", 'Extra Snacks', "Compact"],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "Mayosi",
                role: 'Sales Manager',
                photo: '/public/assets/images/photos/photo-1.png'
            },
             {
                name: "Mayang",
                role: 'Sales Manager',
                photo: '/public/assets/images/photos/photo-2.png'
            }
        ]

    },
    {
        id : 2,
        title: 'Merdeka World',
        slug: 'merdeka-world',
        price: 12232321,
        duration: '30 days',
        location: 'Medan',
        rating: 4.5,
        address: "jl Medan Merdeka",
        image: "/assets/images/thumbnails/thumbnails-4.png",
        images: [
            "/public/assets/images/thumbnails/thumbnails-5.png",
            "/public/assets/images/thumbnails/thumbnails-6.png"
        ],
        tags: ["Popular"],
        about: 'Wheter you need quiet private space away from distractions',
        features: ['Global Event', 'Privacy', "Free Move", 'Extra Snacks', "Compact"],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "Mayosi",
                role: 'Sales Manager',
                photo: '/public/assets/images/photos/photo-1.png'
            },
             {
                name: "Mayang",
                role: 'Sales Manager',
                photo: '/public/assets/images/photos/photo-2.png'
            }
        ]

    }
];