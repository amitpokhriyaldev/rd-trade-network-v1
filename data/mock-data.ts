import {
  Shipment,
  Service,
  Testimonial,
  Stat,
  Director,
  Milestone,
  PincodeService,
} from "@/types";

export const stats: Stat[] = [
  { label: "Years Experience", value: "16", suffix: "+", icon: "Calendar" },
  { label: "Pin Codes Served", value: "21,000", suffix: "+", icon: "MapPin" },
  { label: "Cities Covered", value: "27", suffix: "+", icon: "Building2" },
  { label: "Happy Clients", value: "50,000", suffix: "+", icon: "Users" },
  { label: "Deliveries Daily", value: "10,000", suffix: "+", icon: "Package" },
  { label: "Success Rate", value: "99.8", suffix: "%", icon: "TrendingUp" },
];

export const services: Service[] = [
  {
    id: "air-cargo",
    title: "Air Cargo Services",
    description:
      "Fast and reliable air cargo solutions through commercial airlines including Vistara, Air India, and Indigo. Same-day pickup with next-flight availability for critical shipments.",
    icon: "Plane",
    features: [
      "Same-day pickup with next-flight option",
      "Airport-to-Airport & Door-to-Door delivery",
      "Pan-India coverage with 27 city counters",
      "24/7 operating team for critical shipments",
      "Commercial airline partnerships",
      "Real-time tracking and updates",
    ],
    image: "/images/air-cargo.jpg",
    price_starting: "₹150/kg",
  },
  {
    id: "surface-transport",
    title: "Surface Transport",
    description:
      "Economical door-to-door ground distribution service covering 55,400+ locations across India. Ideal for less time-sensitive shipments with cost-effective logistics solutions.",
    icon: "Truck",
    features: [
      "Coverage across 55,400+ locations",
      "Door-to-door ground distribution",
      "Economical pricing for bulk shipments",
      "Full truckload (FTL) & part truckload (PTL)",
      "GPS-enabled fleet tracking",
      "Dedicated route optimization",
    ],
    image: "/images/surface.jpg",
    price_starting: "₹25/kg",
  },
  {
    id: "rail-cargo",
    title: "Rail Cargo Services",
    description:
      "Comprehensive train cargo services across India with RR booking, rail lease booking, and wagon booking options. Reliable and cost-effective for heavy and bulk shipments.",
    icon: "Train",
    features: [
      "Pan-India train cargo coverage",
      "RR Booking & Rail Lease options",
      "Wagon booking for bulk cargo",
      "Door Pick & Door Delivery available",
      "Cost-effective for heavy shipments",
      "Environment-friendly transport option",
    ],
    image: "/images/rail.jpg",
    price_starting: "₹18/kg",
  },
  {
    id: "express-delivery",
    title: "Express Delivery",
    description:
      "Premium door-to-door day-definite delivery service for time-bound commercial shipments. Fastest delivery solution requiring regulatory clearances or special handling.",
    icon: "Zap",
    features: [
      "Day-definite delivery guarantee",
      "Door-to-door service",
      "Regulatory clearance handling",
      "Special handling for fragile items",
      "Priority processing at all hubs",
      "Dedicated customer support",
    ],
    image: "/images/express.jpg",
    price_starting: "₹200/kg",
  },
  {
    id: "document-delivery",
    title: "Document Delivery",
    description:
      "Secure and non-secure document delivery services across India. Specialized handling for confidential documents, legal papers, and business correspondence.",
    icon: "FileText",
    features: [
      "Secured & Non-secured document options",
      "Pan-India document delivery",
      "Confidential handling protocols",
      "Digital proof of delivery",
      "Same-day delivery in metro cities",
      "Bulk document management",
    ],
    image: "/images/document.jpg",
    price_starting: "₹50/document",
  },
  {
    id: "warehousing",
    title: "Warehousing & Storage",
    description:
      "State-of-the-art warehousing solutions with inventory management, order fulfillment, and distribution services. Strategic locations across major Indian cities.",
    icon: "Warehouse",
    features: [
      "Strategic warehouse locations",
      "Inventory management systems",
      "Order fulfillment services",
      "Temperature-controlled storage",
      "Cross-docking facilities",
      "Real-time inventory tracking",
    ],
    image: "/images/warehouse.jpg",
    price_starting: "₹15/sq.ft/month",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    company: "Tech Solutions India",
    role: "Operations Director",
    content:
      "RD Trade Network has transformed our supply chain operations. Their air cargo service is impeccable - we've reduced delivery times by 40% for our critical shipments. The real-time tracking gives us complete visibility.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    id: "2",
    name: "Priya Sharma",
    company: "Global Exports Ltd",
    role: "Logistics Manager",
    content:
      "We've been working with RD Trade Network for 5 years now. Their rail cargo services have been a game-changer for our bulk shipments. Cost-effective, reliable, and their team is always responsive.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    id: "3",
    name: "Amit Patel",
    company: "PharmaCare Industries",
    role: "Supply Chain Head",
    content:
      "The temperature-controlled warehousing and express delivery services from RD Trade Network have been crucial for our pharmaceutical products. Their attention to detail and compliance is outstanding.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
  {
    id: "4",
    name: "Sneha Gupta",
    company: "E-Commerce Ventures",
    role: "CEO",
    content:
      "As an e-commerce company, we need reliable last-mile delivery. RD Trade Network's surface transport covers even the remotest pin codes in India. Their NDR management and RTO handling is excellent.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
  },
];

export const directors: Director[] = [
  {
    name: "Rakesh Singh",
    role: "Director",
    image: "/images/director-rakesh.jpg",
    bio: "With over 20 years of experience in the logistics and courier industry, Rakesh Singh has been instrumental in building RD Trade Network's extensive network across India. His vision of providing single-window logistics solutions has driven the company's growth and innovation.",
  },
  {
    name: "Saty Prakash Singh",
    role: "Director",
    image: "/images/director-saty.jpg",
    bio: "Saty Prakash Singh brings deep expertise in operations management and strategic partnerships. He has successfully established relationships with leading courier brands and commercial airlines, expanding RD Trade Network's service capabilities nationwide.",
  },
  {
    name: "Seema Singh",
    role: "Director",
    image: "/images/director-seema.jpg",
    bio: "Seema Singh oversees customer relations and business development at RD Trade Network. Her focus on customized service delivery and client satisfaction has helped the company maintain long-term relationships with over 50,000 satisfied clients across India.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "RD Trade Network Pvt. Ltd. was established with a vision to provide comprehensive logistics solutions across India.",
  },
  {
    year: "2022",
    title: "Pan-India Expansion",
    description:
      "Expanded operations to cover all major cities in India, establishing partnerships with leading courier brands.",
  },
  {
    year: "2023",
    title: "Air Cargo Launch",
    description:
      "Launched air cargo services with tie-ups with commercial airlines, enabling same-day and next-day deliveries.",
  },
  {
    year: "2024",
    title: "Rail Cargo Integration",
    description:
      "Added comprehensive rail cargo services with RR booking and wagon leasing options for bulk transport.",
  },
  {
    year: "2024",
    title: "Technology Upgrade",
    description:
      "Implemented real-time tracking systems and digital proof of delivery across all services.",
  },
  {
    year: "2024",
    title: "21,000+ Pin Codes",
    description:
      "Achieved coverage of 21,000+ pin codes across India, becoming one of the most extensive logistics networks.",
  },
  {
    year: "2026",
    title: "Digital Transformation",
    description:
      "Launched comprehensive digital platform with online booking, tracking, and customer dashboard.",
  },
  {
    year: "2026",
    title: "Industry Leadership",
    description:
      "Recognized as a leading logistics provider with 99.8% delivery success rate and 50,000+ happy clients.",
  },
];

export const mockShipments: Shipment[] = [
  {
    id: "ship_1",
    tracking_id: "RDTN8X2K9P4M",
    sender_name: "ABC Enterprises",
    sender_address: "123 Business Park, Mumbai",
    sender_pincode: "400001",
    receiver_name: "XYZ Corp",
    receiver_address: "456 Industrial Area, Delhi",
    receiver_pincode: "110001",
    weight: 25.5,
    dimensions: "60x40x30 cm",
    service_type: "air",
    status: "in_transit",
    current_location: "Delhi Hub",
    estimated_delivery: "2024-12-20",
    created_at: "2024-12-18",
    updated_at: "2024-12-19",
    timeline: [
      {
        status: "ordered",
        location: "Mumbai",
        timestamp: "2024-12-18T09:00:00Z",
        description: "Shipment order created",
      },
      {
        status: "picked_up",
        location: "Mumbai",
        timestamp: "2024-12-18T14:30:00Z",
        description: "Package picked up from sender",
      },
      {
        status: "in_transit",
        location: "Delhi Hub",
        timestamp: "2024-12-19T08:00:00Z",
        description: "Package arrived at Delhi sorting hub",
      },
    ],
  },
  {
    id: "ship_2",
    tracking_id: "RDTN5Y7L3Q9R",
    sender_name: "Tech Solutions",
    sender_address: "789 IT Park, Bangalore",
    sender_pincode: "560001",
    receiver_name: "Global Industries",
    receiver_address: "321 Commerce Street, Chennai",
    receiver_pincode: "600001",
    weight: 15.0,
    dimensions: "40x30x25 cm",
    service_type: "surface",
    status: "delivered",
    current_location: "Chennai",
    estimated_delivery: "2024-12-17",
    actual_delivery: "2024-12-17",
    created_at: "2024-12-15",
    updated_at: "2024-12-17",
    timeline: [
      {
        status: "ordered",
        location: "Bangalore",
        timestamp: "2024-12-15T10:00:00Z",
        description: "Shipment order created",
      },
      {
        status: "picked_up",
        location: "Bangalore",
        timestamp: "2024-12-15T16:00:00Z",
        description: "Package picked up from sender",
      },
      {
        status: "in_transit",
        location: "Bangalore Hub",
        timestamp: "2024-12-16T06:00:00Z",
        description: "Package in transit to Chennai",
      },
      {
        status: "out_for_delivery",
        location: "Chennai",
        timestamp: "2024-12-17T08:00:00Z",
        description: "Out for delivery",
      },
      {
        status: "delivered",
        location: "Chennai",
        timestamp: "2024-12-17T14:30:00Z",
        description: "Package delivered successfully",
      },
    ],
  },
  {
    id: "ship_3",
    tracking_id: "RDTN2A4B6C8D",
    sender_name: "Manufacturing Co",
    sender_address: "555 Factory Road, Pune",
    sender_pincode: "411001",
    receiver_name: "Retail Chain Ltd",
    receiver_address: "888 Market Street, Kolkata",
    receiver_pincode: "700001",
    weight: 100.0,
    dimensions: "120x80x60 cm",
    service_type: "rail",
    status: "picked_up",
    current_location: "Pune",
    estimated_delivery: "2024-12-22",
    created_at: "2024-12-19",
    updated_at: "2024-12-19",
    timeline: [
      {
        status: "ordered",
        location: "Pune",
        timestamp: "2024-12-19T11:00:00Z",
        description: "Shipment order created",
      },
      {
        status: "picked_up",
        location: "Pune",
        timestamp: "2024-12-19T17:00:00Z",
        description: "Package picked up from sender",
      },
    ],
  },
];

export const mockPincodes: PincodeService[] = [
  {
    pincode: "110001",
    city: "New Delhi",
    state: "Delhi",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 1,
  },
  {
    pincode: "400001",
    city: "Mumbai",
    state: "Maharashtra",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 1,
  },
  {
    pincode: "560001",
    city: "Bangalore",
    state: "Karnataka",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 1,
  },
  {
    pincode: "600001",
    city: "Chennai",
    state: "Tamil Nadu",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 1,
  },
  {
    pincode: "700001",
    city: "Kolkata",
    state: "West Bengal",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 2,
  },
  {
    pincode: "411001",
    city: "Pune",
    state: "Maharashtra",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 1,
  },
  {
    pincode: "500001",
    city: "Hyderabad",
    state: "Telangana",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 1,
  },
  {
    pincode: "380001",
    city: "Ahmedabad",
    state: "Gujarat",
    available: true,
    services: ["air", "surface", "rail", "express"],
    estimated_days: 2,
  },
  {
    pincode: "302001",
    city: "Jaipur",
    state: "Rajasthan",
    available: true,
    services: ["air", "surface", "rail"],
    estimated_days: 2,
  },
  {
    pincode: "226001",
    city: "Lucknow",
    state: "Uttar Pradesh",
    available: true,
    services: ["air", "surface", "rail"],
    estimated_days: 2,
  },
  {
    pincode: "160001",
    city: "Chandigarh",
    state: "Chandigarh",
    available: true,
    services: ["air", "surface", "rail"],
    estimated_days: 2,
  },
  {
    pincode: "141001",
    city: "Ludhiana",
    state: "Punjab",
    available: true,
    services: ["air", "surface", "rail"],
    estimated_days: 2,
  },
  {
    pincode: "999999",
    city: "Unknown",
    state: "Unknown",
    available: false,
    services: [],
    estimated_days: 0,
  },
];

export const clients = [
  "Tech Solutions India",
  "Global Exports Ltd",
  "PharmaCare Industries",
  "E-Commerce Ventures",
  "Manufacturing Co",
  "Retail Chain Ltd",
  "ABC Enterprises",
  "XYZ Corp",
];
