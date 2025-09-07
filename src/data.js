import beforeDesign from "./assets/threeDImages/beforeDesign.jpg";
import materials from "./assets/threeDImages/materials.jpg";
import form from "./assets/threeDImages/form.jpg";
import natureDesign from "./assets/threeDImages/NatureArhDesign.jpg";
import spaceArch from "./assets/threeDImages/spaceArchiD.jpg";
import structure from "./assets/threeDImages/structureDesign.jpg";
import greenArch from "./assets/threeDImages/greenDesign.jpg";
import humanCentric from "./assets/threeDImages/humanCentric.jpg";
import information from "./assets/threeDImages/InfoDesign.jpg";
import collab from "./assets/threeDImages/Collaboration & Documentation.jpg"


export const navData = [
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"Services",
        children:[
            {
                id:1,
                name:"Construction",
                path:"/constructionandrenovation"
            },
            {
                id:2,
                name:"Design&Planning",
                path:"/designandplanning"
            }
        ]
    },
    {
        id:3,
        name:"Pricing",
        path:"/pricing"
    },
    {
        id:4,
        name:"Contact",
        path:"/contact"
    }
];

export const testimonialData = [
    {
        id:1,
        name:"Karthik",
        role:"Senior Software developer at Zoho",
        feedback:
        "I was blown away by their professionalism. They understood my brand vision perfectly and delivered content that truly connected with our audience.",
    },
    {
        id:2,
        name:"Vasanth",
        role:"Marketing Manager Tech Mahendra",
        feedback:
        "Working with this team has been a game-changer. Their attention to detail and creativity helped us scale our campaigns faster than expected.",
    },
    {
        id:3,
        name:"Niyas",
        role:"CEO and Founder webzTech",
        feedback:"Thanks team for being full supportive untill the end of the project, it's a pleasure working with you"
    }
];

export const ArchitectureSteps = [
  {
    id:1,
    title:"Site Analysis Before Design",
    img:beforeDesign,
    steps:[
      "Study sun path, wind direction, soil conditions, noise levels, and surroundings.",
      "This ensures the building is placed in the most optimal way."
    ]
  }, 
  {
    id:2,
    title:"Sustainable Design (Green Architecture)",
    img:greenArch,
    steps:[
      "Use energy-efficient materials, natural ventilation, solar panels, and rainwater harvesting.",
      "Reduce carbon footprint and future running costs."
    ]
  },
  {
    id:3,
    title:"Functionality Over Form",
    img:form,
    steps:[
        "A building must serve its purpose first (comfort, safety, usability).",
        "Form should enhance function, not compromise it."
    ]
  },
  {
    id:4,
    title:"Space Optimization",
    img:spaceArch,
    steps:[
      "Plan layouts that maximize usability.",
      "Avoid wasted corridors, ensure flexible spaces, and plan for future expansion."
    ]
  },
  {
    id:5,  
    title:"Structural Integrity & Safety",
    img:structure,
    steps:[
      "Follow building codes (IS Codes in India, International Codes elsewhere).",
      "Use proper load calculations, earthquake-resistant design, and fire safety measures."
    ]
  },
  {
    id:6,
    title:"Natural Light & Ventilation",
    img:natureDesign,
    steps:[
      "Orient windows/rooms to get maximum daylight and cross-ventilation.",
      "Reduces electricity usage and improves occupant health."
    ]
  },

  {
    id:7,
    title:"Integration of Technology",
    img:information,
    steps:[
      "mart building systems (IoT, automated lighting, HVAC control).",
      "BIM (Building Information Modeling) for planning and reducing errors before construction."
    ]
  },
  {
    id:8,
    title:"Material Selection",
    img:materials,
    steps:[
      "Choose locally available, durable, and low-maintenance materials",
      "Consider thermal comfort (ex: clay bricks, AAC blocks, stone, recycled wood)."
    ]
  },
  {
    id:9,
    title:"Human-Centric Design",
    img:humanCentric,
    steps:[
      "Keep ergonomics in mind → stair dimensions, door heights, corridor widths.",
      "Ensure accessibility (ramps, lifts, universal design for differently-abled)."
    ]
  },
  {
    id:10,
    title:"Collaboration & Documentation",
    img:collab,
    steps:[
      "Maintain clear communication between architect, client, contractor, and engineers.",
      "Keep detailed drawings (plans, sections, elevations, MEP layouts).",
      "Update “as-built drawings” after construction."
    ]
  }
]

export const PricingData = [
    {
        id:1,
        name:"Basic",
        Price:2199,
        Offers:[
            "Site Visits 1 time per day",
            "Standard Planning and Designing",
            "Daily Report to Client",
            "1 design revision included"
        ]
    },
    {
        id:2,
        name:"Premium",
        Price:2999,
        Offers:[
            "On-site inspection & strategy",
            "Architectural Planning and Designing",
            "3D Visualization & design preview",
            "Dedicated Project Manager",
            "Unlimited design revision"
        ]
    },
    {
        id:3,
        name:"Basic plus",
        Price:2599,
        Offers:[
            "On-site inspection & strategy",
            "Monthly strategy session with senior Architect",
            "Advanced 3D Rendering & Walkthrough",
            "Daily Report to Client",
            "Full project management handled",
            "24/7 support"
        ]
    },

];

export const packages = [
  {
    id: 1,
    title: "Design",
    plans: {
      Basic: [
        "Scheme Drawing: All Floors (2D)",
        "Elevation Design: (3D)"
      ],
      BasicPlus: [
        "Scheme Drawing: All Floors (2D)",
        "Elevation Design: (3D)",
        "Half Layout: All Floors (3D)",
        "Electrical Drawings: All Floors (2D)",
        "Plumbing Drawing: All Floors (2D)",
        "Working Drawing: All Floors (2D)",
        "Soil Test Report",
        "Structural Drawings",
        "Furniture Layout: All Floors (2D)",
        "Elevation Detail Drawing: (2D)"
      ],
      Premium: [
        "Scheme Drawing: All Floors (2D)",
        "Elevation Design: (3D)",
        "Half Layout: All Floors (3D)",
        "Electrical Drawings: All Floors (2D)",
        "Plumbing Drawing: All Floors (2D)",
        "Working Drawing: All Floors (2D)",
        "Soil Test Report",
        "Structural Drawings",
        "Furniture Layout: All Floors (2D)",
        "Elevation Detail Drawing: (2D)",
        "Site Assessment & Site Plan",
        "Interior 3D Walk-through",
        "Approval Drawing",
        "Landscaping Architectural Designs"
      ]
    }
  },
  {
    id: 2,
    title: "Project Management",
    plans: {
      Basic: [
        "Site Engineer: Two Visits Per Day",
        "Project Manager: Daily Site Visit",
        "Daily Updates: Access to App for Site Status Update"
      ],
      BasicPlus: [
        "Site Engineer: Dedicated Full-Time Site Engineer",
        "Project Manager: Daily Site Visit",
        "Daily Updates: Daily Photo Upload, Project Status Monitoring",
        "Architect: Dedicated Architect throughout the Project. Stage-wise Site Visit. Material Selection Support."
      ],
      Premium: [
        "Site Engineer: Dedicated Full-Time Site Engineer",
        "Project Manager: Daily Site Visit",
        "Daily Updates: Daily Photo Upload, Project Status Monitoring",
        "Architect: Dedicated Architect, Frequent Site Visits. Material & Brand Selection Support including Interiors and Home Decor."
      ]
    }
  },
  {
    id: 3,
    title: "Structure",
    plans: {
      Basic: [
        "Basement Height: Up to 2 feet",
        "Steel: Any ISI Brand",
        "Chambar Bricks: For Partition walls. 8-inch Thick Exterior Walls | 4 inch Thick Inner Walls",
        "Cement: Valimai / Dalmia",
        "M Sand: Blockwork & All Masonry Works",
        "P Sand: Plastering Works",
        "Concrete Grade: M20 (Manual Mix)",
        "Ceiling Height: 10 Feet",
        "Steel Reinforcement: As per Standard",
        "Parapet Wall: 3 Feet Height | 4\" Thick (Only for Floor with Headroom)"
      ],
      BasicPlus: [
        "Basement Height: Up to 3.5 feet",
        "Steel: ARS or Equivalent",
        "Wire-Cut Bricks: For Partition walls. 9-inch Thick Exterior Walls | 4 inch Thick Inner Walls",
        "Cement: Ramco / Dalmia",
        "M Sand: Blockwork & All Masonry Works",
        "River Sand: Plastering Works",
        "Concrete Grade: M20 | RMC for Roof",
        "Ceiling Height: 10 Feet (FFL to FFL)",
        "Steel Reinforcement: As per SA Construction Structural Detailing",
        "Parapet Wall: 3.5 Feet Height | 6\" Thick",
        "Lift Pit & Shaft: Included (if Required)"
      ],
      Premium: [
        "Basement Height: Up to 5 feet",
        "Steel: TATA Steel",
        "Wire-Cut Bricks: For Partition walls. 9-inch Thick Exterior Walls | 4 inch Thick Inner Walls",
        "Cement: Ramco / Dalmia / Coramandel",
        "River Sand: Blockwork & All Masonry Works",
        "River Sand: Plastering Works",
        "Concrete Grade: M25 | RMC for Roof",
        "Ceiling Height: 11 Feet (FFL to FFL)",
        "Steel Reinforcement: 1.5 times Strength all as per SA Structural Drawings and Detailing by SA Construction Structural Engineer",
        "Parapet Wall: 3.5 Feet Height | 6\" Thick (or) Toughened Glass Railing if Required",
        "RCC Lift Pit: Included (if Required)",
        "RCC Concrete Slab for Base",
        "Lift Pit & Shaft: Included (if Required)"
      ]
    }
  },
  {
    id: 4,
    title: "Bathroom & Plumbing",
    plans: {
      Basic: [
        "Wall Tiles: Upto 7' Height. Size 2'X1' Vitrified Tile. Upto ₹40/sqft",
        "Bath & CP Fittings: Cera | Upto ₹12000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer",
        "Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. Brands: Any ISI Brand",
        "Overhead Tank: 1000 litres Sintex | 3 Layered | UV Protected | White Colour"
      ],
      BasicPlus: [
        "Wall Tiles: Upto Ceiling (FULL Height). Size 2'X2' Vitrified Tile. Upto ₹50/sqft. 1 Colour for 2 Bathrooms",
        "Bath & CP Fittings: Parryware | Upto ₹17000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer",
        "Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. Brands: Any ISI Brand",
        "Overhead Tank: 2000 litres Sintex | 3 Layered | UV Protected | White Colour"
      ],
      Premium: [
        "Wall Tiles: Upto Ceiling (FULL Height). Size 4'X2' Digital Vitrified Tile. Upto ₹120/sqft",
        "Bath & CP Fittings: Kohler | Upto ₹60000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slap, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer",
        "Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
        "RCC Overhead Tank: Upto 6000 litres with Waterproofing",
        "Solar Heater Plumbing Lines: Included (If Required)"
      ]
    }
  },
  {
    id: 5,
    title: "Flooring",
    plans: {
      Basic: [
        "Living, Dining, Bedrooms & Kitchen: 2'X2' Vitrified Tiles Upto ₹40/sqft. Anuj / Sparrow",
        "Balcony & Utility: Size 1'X1' Tile. Upto ₹35/sqft",
        "Staircase: Size 1'X1' Parking Tile. Upto ₹35/sqft",
        "Car Parking: Size 1'X1' Parking Tile. Upto ₹35/sqft",
        "Terrace Flooring: Screed Concreting with Waterproofing"
      ],
      BasicPlus: [
        "Living, Dining, Bedrooms & Kitchen: 4'X2' Vitrified Tiles Upto ₹65/sqft. 1 Model for Living, Dining and Kitchen. KAG / Sunheart or Equivalent",
        "Balcony & Utility: Size 2'X2' Upto ₹50/sqft | Antiskid",
        "Staircase: Full Body Tile Upto ₹110/sqft",
        "Car Parking: Size 1'X1' Heavy Duty Tile Upto ₹50/sqft",
        "Terrace Flooring: Screed Concreting with Waterproofing"
      ],
      Premium: [
        "Living, Dining, Bedrooms & Kitchen: 6'X6' Quarts Tiles Upto ₹200/sqft",
        "Balcony & Utility: Size 2'X2' Upto ₹60/sqft",
        "Staircase: Marble Upto ₹120/sqft",
        "Car Parking: Granitel Upto ₹120/sqft",
        "Terrace Flooring: 2'X2' Exterior Grade Vitrified Tile (Any Grade) with Waterproofing"
      ]
    }
  },
  {
    id: 6,
    title: "Kitchen & Dining",
    plans: {
      Basic: [
        "Wall Tile: Vitrified Tile (2'X1') | Upto ₹40/sqft",
        "Sink Faucet: Upto ₹900 / nos",
        "Kitchen Sink: Stainless Steel single bowl Upto ₹2800",
        "Dining: Wall Mounted Wash Basin",
        "Kitchen Granite Top: Upto ₹90/sqft"
      ],
      BasicPlus: [
        "Wall Tile: Vitrified Tile (2'X2') | Upto ₹55/sqft",
        "Sink Faucet: Upto ₹2000 / nos",
        "Kitchen Sink: Stainless Steel sink with Drain Upto ₹4000",
        "Dining: Wall Mounted Wash Basin",
        "Kitchen Granite Top: Upto ₹140/sqft"
      ],
      Premium: [
        "Wall Tile: Vitrified Designer Tile (4'X2') | Upto ₹125/sqft",
        "Sink Faucet: Floor Mounter Pull-Out | Upto ₹8000 / nos",
        "Kitchen Sink: Multifunction Sink Upto ₹15000",
        "Dining: Premium Designer Collection Wash Basin with Marble Counter and Designer Top",
        "Kitchen Granite Top: Quarts Stone Upto ₹350/sqft"
      ]
    }
  },
  {
    id: 7,
    title: "Door, Windows and Railing",
    plans: {
      Basic: [
        "Main Door: Malaysian Teak Door & Teak Frame | 32mm Thickness | 5'X3\" Thick Frame | 7' Height 3.5 Feet Width",
        "Room Doors: White Panel Door | Sal Wood Frame | 7'X3'",
        "Bathroom Door: PVC Door | 7'X2.5'",
        "Windows: Aluminium Sliding window | Max 4'X4' | One Window Per Room | 5mm Clear Glass",
        "Staircase Railing: MS Railling",
        "Balcony Railing: MS Railing"
      ],
      BasicPlus: [
        "Main Door: Malaysian Teak Door & Teak Frame-Readymade | 35mm Thickness | 5'X3\" Thick Frame | 7' Height 3.5 Feet Width | Upto 22000/nos 1 Nos only",
        "Room Doors: Flush Door | Sal Wood Frame | 7'X3'",
        "Bathroom Door: WPC Door & Frame | 7'X2.5'",
        "Windows: UPVC Sliding White | Max 5'X5' | One Window Per Room | 5mm Clear Glass",
        "Staircase Railing: SS 304 Grade Railling",
        "Balcony Railing: SS 304 Grade Railing with 8mm Toughened Glass with Posts"
      ],
      Premium: [
        "Main Door: Designer Wood Door of Height upto 8Feet X 5Feet (or) Security Steel Door of Size (8'X4.5') Pure Stainless Steel with Digital Lock.",
        "Room Doors: Flush Door with Laminate | Ghana Wood Frame | 8'X3.5'",
        "Bathroom Door: Water Proof Flush Door with Designer Laminates | 8'X3'",
        "Windows: Openable Type | UPVC Coloured | No Restriction on Size and Quantity | Toughened Glass",
        "Staircase Railing: Toughened Glass with SS or Wood Railing or Aluminium",
        "Balcony Railing: 10mm Full Toughened Glass with Aluminium Railing"
      ]
    }
  },
  {
    id: 8,
    title: "Painting",
    plans: {
      Basic: [
        "Inner Wall Putty: 2 coats of Wall Putty | Any ISI Brand",
        "Wall Painting: 1 Coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
        "Ceiling Painting: 1 Coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
        "Exterior Paint: 1 Coat of Primer | 2 Coats of Ace | Any ISI Brand"
      ],
      BasicPlus: [
        "Inner Wall Putty: 2 coats of Wall Putty | Nippon",
        "Wall Painting: 1 Coat of Primer | 2 coats of Breeze emulsion | Nippon",
        "Ceiling Painting: 1 Coat of Primer | 2 coats of Breeze emulsion | Nippon",
        "Exterior Paint: 1 Coat of Primer | 2 Coats of Sumo Xtra | Nippon",
        "Elevation Putty: 2 Coat of Putty for Front Elevation | Nippon Exterior Putty"
      ],
      Premium: [
        "Inner Wall Putty: 2 coats of Wall Putty | Brila",
        "Wall Painting: 1 Coat of Primer | 2 coats of Royal Shyne | Asian",
        "Ceiling Painting: 1 Coat of Primer | 2 coats of Royal Shyne | Nippon",
        "Exterior Paint: 1 Coat of Primer | 2 Coats of Apex Ultima Protek | Nippon",
        "Elevation Putty: 2 Coat of Putty for all sides of Elevation | Birla Wallseal Waterproofing"
      ]
    }
  },
  {
    id: 9,
    title: "Electrical",
    plans: {
      Basic: [
        "Wires: Essar",
        "Switches: Fybros",
        "Bedroom: 2 Switch Box (8-Module). One at Entrance and one at Bed-side",
        "Bathroom: 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
        "Living Room: Upto 4 Switch Box (8-Module)",
        "Dining: 1 Switch (8-Module)",
        "Pooja: 1 Switch 3 Module",
        "Kitchen: 3 Switch Box (6-Module). Point for HOB, Chimney, RO",
        "Utility: 1 Switch Box (4-Module)",
        "AC Points: 1 for Each Bedroom",
        "Entrance: 1 Switch Box (6-Module)",
        "Balconies: 1 Switch Box (3-Module)"
      ],
      BasicPlus: [
        "Wires: Orbit (FRLS)",
        "Switches: Legrand",
        "Bedroom: 3 Switch Box (8-Module)",
        "Bathroom: 1 Switch Box (Inner) 4-Module, 1 Switch Box (Outer) 3-Module. Point for Heater & Exhaust",
        "Living Room: Upto 4 Switch Box (8-Module)",
        "Dining: 1 Switch (8-Module)",
        "Pooja: 1 Switch 3 Module",
        "Kitchen: 3 Switch Box (6-Module). Point for HOB, Chimney, RO",
        "Utility: 1 Switch Box (4-Module)",
        "AC Points: 1 for Each Bedroom. 1 for Living Room",
        "Entrance: 1 Switch Box (6-Module)",
        "Balconies: 1 Switch Box (3-Module)"
      ],
      Premium: [
        "Wires: Finolex / Havells Orbit (FRLS)",
        "Switches: Touch Switches with Glass Plates",
        "No Restriction on Number of Points. Required power points will be provided for Lifts, DG, Curtain Motors, Swimming Pool, RO Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, Lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems",
        "Electricity Panel Board: Upto 2 Service Connection with RLCB - Exterior Grade"
      ]
    }
  },
  {
    id: 10,
    title: "What's Not Included",
    plans: {
      Basic: [
        "Compound Wall @ 425/sqft & Gate",
        "Sump & Septic Tank @ 24/Litre",
        "Lift, Lift Pit and Shaft",
        "Electricity Connection",
        "Building Plan Approval",
        "Elevation Special Materials"
      ],
      BasicPlus: [
        "Compound Wall @ 425/sqft & Gate",
        "Sump & Septic Tank @ 24/Litre",
        "Lift, Lift Pit and Shaft",
        "Electricity Connection",
        "Building Plan Approval",
        "Elevation Special Materials"
      ],
      Premium: [
        "Compound Wall @ 425/sqft & Gate",
        "Sump & Septic Tank @ 24/Litre",
        "Lift, Lift Pit and Shaft",
        "Electricity Connection",
        "Building Plan Approval",
        "Elevation Special Materials"
      ]
    }
  }
];


export const Faqs = [
      
  {
    question: "Do you offer free consultations or quotes?",
    answer: "Yes, we provide free initial consultations and quotes. Just share your project details, and we’ll get back with an estimate."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve all over Tanjavur, but we can take on projects in nearby areas depending on the scope."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on size—small renovations take a few weeks, while full construction projects may take several months."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, our team is fully licensed and insured, ensuring your project is safe and compliant with regulations."
  },
  {
    question: "Do you handle permits and approvals?",
    answer: "Absolutely! We take care of the necessary permits and approvals to make your project hassle-free."
  }


]



