import { v4 as uuidv4 } from 'uuid';





export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/xTYkvr9W/Sky-Worlds-2.webp",
            "https://i.postimg.cc/SsMXrk2p/Sky-Worlds-3.webp",
            "https://i.postimg.cc/BZ2LPZfT/Skyworld-4.webp",
            "https://i.postimg.cc/GpZt9VMg/Skyworld-1.webp",
            "https://i.postimg.cc/9XDsxj5j/outdoor-Theme-Park-Img-Six.jpg",
            "https://i.postimg.cc/y62ttrs3/outdoor-Theme-Park-Img-Three.jpg",
            "https://i.postimg.cc/CLDXgHxP/outdoor-Theme-Park-Img-Two.jpg"

        ],
        title:"Tickets to Genting SkyWorld Outdoor Theme Park",
        desc:"Make your way to Genting SkyWorlds Theme, an exhilarating adventure spot that features 9 distinct themed worlds and houses 26 thrilling rides and attractions.",
        type:"bookTypeOne",
        preference: {
            offPeak:[
                {
                    title:"1 Day Pass Off Peak",
                    price:{
                        adult:130,
                        child:110,
                        senior:110
                    },
                    details:["1-day admission to Genting SkyWorlds Theme Park"]
                },
                {
                    title:"Combo: 1-Day Pass + Two-way Standard Gondola Ride Off Peak",
                    price:{
                        adult:151,
                        child:121,
                        senior:121
                    },
                    details:[
                        "Access to Genting Awana SkyWay standard gondola", 
                        "Two-way ride",
                        "1-day admission to Genting SkyWorlds Theme Park"
                    ]
                },
                {
                    title:"Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak",
                    price:{
                        adult:185,
                        child:160,
                        senior:160
                    },
                    details:[
                        "Admission to Genting Skytropolis",
                        "Admission to Genting SkyWorlds",
                        "Complimentary up to 6 VQ reservations"
                    ]
                },
            ],
            Peak:[
                {
                    title:"1 Day Pass Peak",
                    price:{
                        adult:156,
                        child:128,
                        senior:128
                    }, 
                    details:["1-day admission to Genting SkyWorlds Theme Park"]
                },
                {
                    title:"Combo: 1-Day Pass + Two-way Standard Gondola Ride Peak",
                    price:{
                        adult:179,
                        child:151,
                        senior:151
                    },
                    details:[
                        "Access to Genting Awana SkyWay standard gondola", 
                        "Two-way ride",
                        "1-day admission to Genting SkyWorlds Theme Park"
                    ]
                },
                {
                    title:"Combo: Skyworlds Themepark + Skytropolis Themepark Peak",
                    price:{
                        adult:221,
                        child:195,
                        senior:195
                    },
                    details:[
                        "Admission to Genting Skytropolis",
                        "Admission to Genting SkyWorlds",
                        "Complimentary up to 6 VQ reservations"
                    ]
                },
            ]
        },

    },
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/JnZnXxvr/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-1.jpg",
            "https://i.postimg.cc/fysbfXQx/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-2.jpg\nhttps://i.postimg.cc/fysbfXQx/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-2.jpg",
            "https://i.postimg.cc/rFJDghmz/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-3.jpg\nhttps://i.postimg.cc/rFJDghmz/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-3.jpg",
            "https://i.postimg.cc/0yXb1b7s/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-4.jpg",
            "https://i.postimg.cc/1zg4msKN/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-5.jpg",
            "https://i.postimg.cc/7ZZfRgG9/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-6.jpg",
            "https://i.postimg.cc/KjpV8Jgw/genting-Awanasky-Way-Img-Six.jpg",
            "https://i.postimg.cc/XvKzCVCw/genting-Awanasky-Way-Img-Ten.jpg",
            "https://i.postimg.cc/NfVShCtr/genting-Awanasky-Way-Img-Three.jpg",
            "https://i.postimg.cc/kgbZ7NMY/genting-Awanasky-Way-Img-Two.jpg"

        ],
        title:"Combo: Genting Awana SkyWay (One-way) + Skytropolis Indoor Theme Park Tickets",
        desc:"Non-stop excitement awaits as you explore the Awana SkyWay and the Skytropolis Indoor Theme Park with this money-saver combo ticket.",
        type:"bookTypeTwo",
        price: {
            general:75
        }
    },
    {
        id: uuidv4(),
      image:[
        "https://i.postimg.cc/KYgTVRFs/Skytropolis-1.jpg",
        "https://i.postimg.cc/L8WfNzd1/Skytropolis-2.jpg",
        "https://i.postimg.cc/c4XftpXT/Skytropolis-3.jpg",
        "https://i.postimg.cc/bY0xpDn7/Skytropolis-4.jpg",
        "https://i.postimg.cc/4NJzdfbm/Skytropolis-5.jpg",
        "https://i.postimg.cc/rsT55cBZ/Skytropolis-6.jpg"
        ],
        title:"Combo : Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets",
        desc:"Experience thrill, adventure, family fun, and more with these budget-friendly combo tickets to Genting Skytropolis and Skyworlds Theme Park.",
        type:"bookTypeThree",
        preference:{
            offPeak:[
                {
                    title:"Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak",
                    price:{
                        adult:185,
                        child:160,
                        senior:160
                    } 
                },
            ],
            Peak:[
                {
                    title:"Combo: Skyworlds Themepark + Skytropolis Themepark Peak",
                    price:{
                        adult:221,
                        child:195,
                        senior:195
                    } 
                },
            ]
        },
    },
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/xTYkvr9W/Sky-Worlds-2.webp",
        "https://i.postimg.cc/JnZnXxvr/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-1.jpg",
        "https://i.postimg.cc/1zg4msKN/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-5.jpg",
        "https://i.postimg.cc/0yXb1b7s/Awana-Sky-Way-Gondola-Cable-Car-in-Genting-Highlands-4.jpg"
        ],
        title:"Combo: Genting Awana SkyWay (One-way) + Skyworld Outdoor Theme Park Tickets",
        desc:"Experience thrill, adventure, family fun, and more with these budget-friendly combo tickets to Genting Skytropolis and Skyworlds Theme Park.",
        type:"bookTypeFour",
        preference:{
            offPeak:[
                {
                    title:"Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Off Peak",
                    price:{
                        adult:136,
                        child:110,
                        senior:110
                    } 
                },
            ],
            Peak:[
                {
                    title:"Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Peak",
                    price:{
                        adult:171,
                        child:141,
                        senior:141
                    } 
                },
            ]
        },
    },
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/rsT55cBZ/Skytropolis-6.jpg",
            "https://i.postimg.cc/FHz3yT6v/Skytropolis-7.jpg",
            "https://i.postimg.cc/hGHLPVpB/Skytropolis-8.jpg",
            "https://i.postimg.cc/HxXQJjh7/Skytropolis-9.jpg",
            "https://i.postimg.cc/SsMXrk2p/Sky-Worlds-3.webp",
            "https://i.postimg.cc/GpZt9VMg/Skyworld-1.webp"
        ],
        title:"Combo: Genting Awana Skyway (One-way) + Skyworld Outdoor + Skytropolis Indoor Theme Park ",
        desc:"Upgrade your Kuala Lumpur trip with this super saver combo that gives you access to the city's top attractions.",
        type:"bookTypeFive",
        preference:{
            offPeak:[
                {
                    title:"Combo: Genting Awana Skyway (One-way) + Skyworld Outdoor + Skytropolis Indoor Theme Park Off Peak",
                    price:{
                        adult:199,
                        child:169,
                        senior:169
                    } 
                },
            ],
            Peak:[
                {
                    title:"Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Peak",
                    price:{
                        adult:221,
                        child:197,
                        senior:197
                    } 
                },
            ]
        },
    },
    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Combo: 1-Day Pass + Two-Way Standard Gondola Ride",
        price: 171,
        details:[
            "Access to Genting Awana SkyWay standard gondola", 
            "Two-way ride",
            "1-day admission to Genting SkyWorlds Theme Park"
        ]
    },
    {
        id: uuidv4(),
        title: "1-Day Pass Off  Peak",
        price: 130,
        details:["1-day admission to Genting SkyWorlds Theme Park"]
    },
    // {
    //     id: uuidv4(),
    //     title: "1-Day Pass with Photo",
    //     price: 179,
    //     details:[
    //         "Photo opportunity",
    //         "1-day admission to Genting SkyWorlds Theme Park"
    //     ]
    // },
    {
        id: uuidv4(),
        title: "Combo: Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets",
        price: 215,
        details:[
            "Admission to Genting Skytropolis",
            "Admission to Genting SkyWorlds",
            "Complimentary up to 6 VQ reservations"
        ]
    }
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/cLwpMDTH/shop-studio-emporium-1.jpg",
        title:"Studio Plaza",
        desc:"Studio Plaza is a celebration of the cinema. You will come across your favorite movie characters as they are displayed in the Plaza, carved into the interiors. Explore the golden interiors, 360-degree Legends Cinema, diners, and retail stores to immerse yourself in a unique experience."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/pdvg0D1B/Eagle-Mountain-Overall-View-1.jpg",
        title:"Eagle Mountain",
        desc:"Soar to new heights amidst the Eagle Mountain Zone, where thrilling rides await against the backdrop of breathtaking mountain scenery. Experience an adrenaline-pumping adventure with panoramic views."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/T358pM09/central-Park-Img.jpg",
        title:"Central Park",
        desc:"Discover the heart of entertainment in Central Park, where the iconic Lake of Dreams water fountain show captivates audiences. This zone hosts diverse outdoor events, creating the perfect atmosphere for creating lasting memories with family and friends."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/43QBCm26/Whats-App-Image-2023-11-30-at-3-43-34-PM.jpg",
        title:"Andromeda Base Cosmic Journey",
        desc:"Embark on a cosmic journey in the Andromeda Base, a space-themed zone that transports visitors beyond the stars. Engage with futuristic rides and interactive exhibits that make this zone an out-of-this-world experience."
    },  
    {
        id: uuidv4(),
        image:"https://i.postimg.cc/N0NP4ddM/restaurants-Img.jpg",
        title:"Liberty Lane Cultural Celebration",
        desc:"Step into Liberty Lane for a cultural celebration that pays homage to iconic landmarks. Experience the essence of freedom, creativity, and innovation, making it a zone that combines entertainment with a touch of historical richness."
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/ThMVSxxL/Robots-Rivet-Town-Overview-1.jpg",
        title:"Robots Revet Town Technology",
        desc:"Immerse yourself in the futuristic world of Robots Rivet Town, a technological marvel showcasing cutting-edge innovations. Marvel at the seamless harmony between man and machine, making this zone a must-visit for tech enthusiasts."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/j524nvv5/Whats-App-Image-2023-11-30-at-3-47-24-PM.jpg",
        title:"Rio",
        desc:"Slip into the ultimate fun at Rio and explore the neighborhood of Santa Teresa while listening to Samba music. Make sure to take a spin at the colorful Rio Carnival Chaos teacup ride."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/VNDFN2qp/Whats-App-Image-2023-11-30-at-3-49-19-PM.jpg",
        title:"Epic",
        desc:"Step into the secret kingdom at Epic and Make a splash in the water as you tour the Moonhaven on Mub and Grub's boat ride. Enjoy the company of Nod, M.K, and Mandrake as you sail past the kingdom."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/wj82cCHF/ice-Age-Img.jpg",
        title:"Ice Age",
        desc:"Take a step back in time within the Ice Age Adventure zone, where larger-than-life attractions, thrilling rides, and immersive exhibits bring the ancient world to life. Prepare for an exhilarating journey through this frozen landscape."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        title:"Rides & Attractions",
        desc:"Explore Genting SkyWorlds' thrilling rides inspired by favorite movies. Meet characters from Ice Age, Epic, and Night at the Museum while enjoying rollercoasters and waterslides. With nine unique zones, each boasting multiple one-of-a-kind attractions, the park guarantees unforgettable experiences.",
        image: "https://i.postimg.cc/Kc3sPrBG/rides-Attractions-Img.jpg"
    },
    {
        id: uuidv4(),
        title:"Themed Areas",
        desc:"Immerse yourself in diverse landscapes at Genting SkyWorlds, where you can swiftly transition from the vibrant streets of Rio to the lively cityscape of San Francisco. Traverse the rugged terrain of the Californian desert at Eagle Mountain or journey back in time to the prehistoric era of the Ice Age. The theme park's themed areas offer a quick escape to various captivating destinations.",
        image: "https://i.postimg.cc/GppXHkb1/themed-Areas-Img-1.jpg"
    },
    {
        id: uuidv4(),
        title:"Games & Activities",
        desc:"Explore an array of exciting games and activities at Genting SkyWorlds theme park. Be captivated by the stunning water fountain show at Lake of Dreams in Central Park, immerse yourself in the festival vibe with the Sounds of Rio, or unleash your dance moves in the lively Samba Urbana. The park offers a diverse range of entertainment options to ensure a memorable and enjoyable visit.",
        image: "https://i.postimg.cc/j5bYpgzh/games-Activities-Img.jpg"
    },
    {
        id: uuidv4(),
        title:"Restaurants",
        desc:"Within Genting SkyWorlds Theme Park, you'll discover numerous restaurants and food establishments scattered across its nine distinct zones. Indulge in the globally renowned Fish & Chips from Harry Ramsden located in Central Park, or opt for a local culinary experience with a selection of the finest local and Middle Eastern menus at Cosmic Cafe.",
        image: "https://i.postimg.cc/N0NP4ddM/restaurants-Img.jpg"
    },
    {
        id: uuidv4(),
        title:"Stores",
        desc:"Explore the stores in all Genting SkyWorlds Theme Park zones to buy movie merchandise, collectibles, and galactic objects. Shop for toys in every movie-inspired zone, or pose for photo memorabilia in a photo kiosk.",
        image: "https://i.postimg.cc/cLwpMDTH/shop-studio-emporium-1.jpg"
    },
    {
        id: uuidv4(),
        title:"Photo Booth",
        desc:"Try out the Photo+ experience that offers stunning images using state-of-the-art facial recognition technology. You can capture your best reactions on rides or even ask for a slow-motion video to cherish the fun.",
        image: "https://i.postimg.cc/jS41WxNy/photo-Booth-Img.jpg"
    },
]








export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Which Tickets are Ideal for Genting SkyWorlds?",
        ans:"Choose between standard admission for unlimited access to all rides and attractions, or explore combo tickets for entry to Genting SkyWorlds and neighboring attractions like Genting Skytropolis and Genting Cable Car!"
    },
    {
        id: uuidv4(),
        ques:"Are Discounts Available on Genting SkyWorlds Tickets?",
        ans:"Certainly! Enjoy discounts of up to 20% on admission tickets. Additionally, children under 110cm and seniors over 60 receive special reduced pricing."
    },
    {
        id: uuidv4(),
        ques:"When is the Best Time to Visit Genting SkyWorlds?",
        ans:"The park operates daily from 11:00 AM to 6:00 PM. For a more relaxed experience, consider avoiding the peak season from June to September. Optimal times are during the off-season from September to November and January to March, while April and May can be warmer."
    },
    {
        id: uuidv4(),
        ques:"How Can I Reach Genting SkyWorlds Theme Park?",
        ans:"Located in Genting Highlands, Pahang, an hour from Kuala Lumpur, use Google Maps for directions. Choose from options like the Genting Express bus, driving, or the convenient Genting Awana Cable Car, with SkyAvenue Station just minutes away on foot."
    },
    {
        id: uuidv4(),
        ques:"How Long Should I Plan for Genting SkyWorlds?",
        ans:"With 26 rides across nine zones, plan to spend 4-6 hours for a comprehensive experience covering the top attractions."
    },
    {
        id: uuidv4(),
        ques:"Are Strollers and Wheelchairs Available at Genting SkyWorlds Theme Park?",
        ans:"Certainly! Visitors can conveniently rent strollers and wheelchairs within the park."
    },
    {
        id: uuidv4(),
        ques:"What are the Must-Try Rides & Attractions at Genting SkyWorlds?",
        ans:"Explore a variety of exciting rides suitable for all ages. Highly recommended experiences include: Invasion of the Planet of the Apes Independence Day: Defiance ESD Global Defender Rio Carnaval Chaos Rivet Town Roller Terraform Tower Challenge"
    },
    {
        id: uuidv4(),
        ques:"If my child is more than 110cm, can i buy child ticket?",
        ans:"No Child above 110cm will be considered as adult."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Skyworld : 11am - 6pm, Everyday(Closed every Tuesday except Public Holiday)", 
            "Skytropolis : 2pm - 9pm, Mon - Thu | 2pm - 10pm, Fri - Sun", 
            "Awana Skyway : 7am - 11pm everyday",
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age: 13 to 59 years old.",
            "Child height more than 110cm, need to purchase Adult Ticket.",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
]


export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHoliDayDate = [
    // "Tue Dec 19 2023 00:00:00 GMT+0800 (Malaysia Time)",
    "Sun Feb 11 2024",
    "Wed Apr 10 2024",
    "Thu Apr 11 2024",
    "Wed May 01 2024",
    "Wed May 22 2024",
    "Sun Jun 02 2024",
    "Mon Jun 03 2024",
    "Sun Jun 16 2024",
    "Mon Jun 17 2024",
    "Sun Jul 07 2024",
    "Sun Sep 15 2024",
    "Mon Sep 16 2024",
    "Wed Oct 30 2024",
    "Thu Oct 31 2024",
    "Wed Dec 25 2024"

]