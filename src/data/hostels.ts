export interface Hostel {
  id: string;
  name: string;
  type: string;
  gender: string;
  address: string;
  neighborhood?: string;
  distanceToCollege: number;
  distanceToMetro: number;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  amenities: string[];
  roomTypes: string[];
  pricing: Record<string, number>;
  messType: string;
  messFee?: number;
  securityDeposit: number;
  electricityIncluded: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  totalRooms: number;
  minimumStay?: number;
  paymentOptions?: string[];
  nearbyLandmarks?: string[];
  safetyRating?: number;
  ratings?: {
    cleanliness: number;
    staff: number;
    facilities: number;
    location: number;
    value: number;
    food: number;
  };
}

export const collegesList = [
  'Delhi University North Campus',
  'Delhi University South Campus',
  'Hansraj College',
  'St. Stephen\'s College',
  'Miranda House',
  'Lady Shri Ram College',
  'Hindu College',
  'Ramjas College',
  'Kirori Mal College',
  'Sri Venkateswara College'
];

export const hostels: Hostel[] = [
  {
    id: "1",
    name: "North Campus Residency",
    type: "PG Hostel",
    gender: "Female",
    address: "2134, Hudson Lane, GTB Nagar, Delhi - 110009",
    neighborhood: "Hudson Lane",
    distanceToCollege: 0.8,
    distanceToMetro: 0.3,
    price: 12000,
    rating: 4.2,
    reviewCount: 132,
    description: "Comfortable female hostel with modern amenities, located just minutes away from Delhi University North Campus. Our property offers air-conditioned rooms, high-speed WiFi, and delicious home-cooked meals.",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["wifi", "ac", "laundry", "security", "studyRoom", "powerBackup", "hotWater"],
    roomTypes: ["Single Room", "Double Sharing", "Triple Sharing"],
    pricing: {
      "Single Room": 16000,
      "Double Sharing": 12000,
      "Triple Sharing": 9000
    },
    messType: "Vegetarian",
    messFee: 3500,
    securityDeposit: 15000,
    electricityIncluded: false,
    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",
    totalRooms: 45,
    minimumStay: 3,
    paymentOptions: ["Cash", "Bank Transfer", "UPI"],
    nearbyLandmarks: ["Khalsa College", "Daulat Ram College", "GTB Nagar Metro Station"],
    safetyRating: 4,
    ratings: {
      cleanliness: 4.3,
      staff: 4.2,
      facilities: 4.0,
      location: 4.7,
      value: 3.9,
      food: 4.1
    }
  },
  {
    id: "2",
    name: "Metro Mansion",
    type: "Hostel",
    gender: "Male",
    address: "54, Vijay Nagar, Delhi University, Delhi - 110009",
    neighborhood: "Vijay Nagar",
    distanceToCollege: 1.2,
    distanceToMetro: 0.4,
    price: 10000,
    rating: 3.9,
    reviewCount: 98,
    description: "Affordable male hostel near Delhi University with comfortable accommodation and basic amenities. We offer clean rooms, nutritious meals, and a conducive environment for studies.",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["wifi", "security", "powerBackup", "hotWater"],
    roomTypes: ["Double Sharing", "Triple Sharing", "Dormitory"],
    pricing: {
      "Double Sharing": 11000,
      "Triple Sharing": 9000,
      "Dormitory": 7000
    },
    messType: "Both Veg & Non-Veg",
    messFee: 3000,
    securityDeposit: 10000,
    electricityIncluded: true,
    totalRooms: 30,
    minimumStay: 6,
    paymentOptions: ["Cash", "Bank Transfer"],
    nearbyLandmarks: ["Hansraj College", "SRCC", "Vishwavidyalaya Metro Station"],
    safetyRating: 3,
    ratings: {
      cleanliness: 3.7,
      staff: 3.8,
      facilities: 3.5,
      location: 4.2,
      value: 4.1,
      food: 3.9
    }
  },
  {
    id: "3",
    name: "DU Comfort Stay",
    type: "PG",
    gender: "Co-ed",
    address: "78, Kamla Nagar, Delhi - 110007",
    neighborhood: "Kamla Nagar",
    distanceToCollege: 1.5,
    distanceToMetro: 0.7,
    price: 14000,
    rating: 4.5,
    reviewCount: 215,
    description: "Premium co-living space for students with separate floors for males and females. Our PG offers spacious rooms, recreational facilities, high-speed internet, and various meal plans to choose from.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["wifi", "ac", "laundry", "gym", "security", "studyRoom", "powerBackup", "hotWater", "parking", "tvLounge"],
    roomTypes: ["Single Room", "Double Sharing"],
    pricing: {
      "Single Room": 18000,
      "Double Sharing": 14000
    },
    messType: "Both Veg & Non-Veg",
    messFee: 4000,
    securityDeposit: 20000,
    electricityIncluded: false,
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    totalRooms: 60,
    paymentOptions: ["Cash", "Bank Transfer", "Credit/Debit Card", "UPI"],
    nearbyLandmarks: ["Kirori Mal College", "Hindu College", "Kamla Nagar Market"],
    safetyRating: 4.5,
    ratings: {
      cleanliness: 4.6,
      staff: 4.4,
      facilities: 4.7,
      location: 4.3,
      value: 4.2,
      food: 4.5
    }
  },
  {
    id: "4",
    name: "Scholars Home",
    type: "Hostel",
    gender: "Female",
    address: "23, Patel Chest, Maurice Nagar, Delhi - 110007",
    neighborhood: "Maurice Nagar",
    distanceToCollege: 0.5,
    distanceToMetro: 0.9,
    price: 11000,
    rating: 4.0,
    reviewCount: 76,
    description: "All-female hostel with a focus on academic environment and safety. We provide clean accommodations, nutritious vegetarian meals, and 24x7 security for peace of mind.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["wifi", "security", "studyRoom", "powerBackup", "hotWater"],
    roomTypes: ["Double Sharing", "Triple Sharing"],
    pricing: {
      "Double Sharing": 12000,
      "Triple Sharing": 10000
    },
    messType: "Vegetarian",
    messFee: 3200,
    securityDeposit: 12000,
    electricityIncluded: true,
    checkInTime: "1:00 PM",
    checkOutTime: "11:00 AM",
    totalRooms: 35,
    minimumStay: 5,
    nearbyLandmarks: ["Delhi School of Economics", "Law Faculty", "Arts Faculty"],
    safetyRating: 4.5,
    ratings: {
      cleanliness: 4.1,
      staff: 4.2,
      facilities: 3.8,
      location: 4.6,
      value: 4.0,
      food: 3.7
    }
  },
  {
    id: "5",
    name: "Campus View Residency",
    type: "PG",
    gender: "Male",
    address: "112, Outram Lines, Kingsway Camp, Delhi - 110009",
    neighborhood: "Kingsway Camp",
    distanceToCollege: 1.8,
    distanceToMetro: 1.2,
    price: 9500,
    rating: 3.7,
    reviewCount: 54,
    description: "Budget-friendly PG for male students with basic amenities and good connectivity to Delhi University. We offer comfortable accommodations at affordable rates.",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["wifi", "security", "powerBackup", "hotWater"],
    roomTypes: ["Double Sharing", "Triple Sharing", "Dormitory"],
    pricing: {
      "Double Sharing": 10500,
      "Triple Sharing": 8500,
      "Dormitory": 6500
    },
    messType: "Both Veg & Non-Veg",
    messFee: 2800,
    securityDeposit: 10000,
    electricityIncluded: false,
    totalRooms: 25,
    paymentOptions: ["Cash", "Bank Transfer"],
    nearbyLandmarks: ["Ramjas College", "Daulat Ram College", "Kingsway Camp Market"],
    safetyRating: 3.5,
    ratings: {
      cleanliness: 3.5,
      staff: 3.6,
      facilities: 3.4,
      location: 3.8,
      value: 4.2,
      food: 3.5
    }
  },
  {
    id: "6",
    name: "University Square PG",
    type: "PG",
    gender: "Co-ed",
    address: "45, Mukherjee Nagar, Delhi - 110009",
    neighborhood: "Mukherjee Nagar",
    distanceToCollege: 2.2,
    distanceToMetro: 1.5,
    price: 13000,
    rating: 4.3,
    reviewCount: 121,
    description: "Modern co-ed PG with separate sections for males and females, offering convenient access to Delhi University and coaching centers. Ideal for students preparing for competitive exams.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["wifi", "ac", "laundry", "security", "studyRoom", "powerBackup", "hotWater"],
    roomTypes: ["Single Room", "Double Sharing", "Triple Sharing"],
    pricing: {
      "Single Room": 17000,
      "Double Sharing": 13000,
      "Triple Sharing": 10000
    },
    messType: "Both Veg & Non-Veg",
    messFee: 3500,
    securityDeposit: 15000,
    electricityIncluded: false,
    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",
    totalRooms: 50,
    minimumStay: 3,
    paymentOptions: ["Cash", "Bank Transfer", "UPI"],
    nearbyLandmarks: ["Delhi University Library", "Mukherjee Nagar Market", "Batra Cinema"],
    safetyRating: 4,
    ratings: {
      cleanliness: 4.4,
      staff: 4.3,
      facilities: 4.2,
      location: 4.0,
      value: 4.1,
      food: 4.3
    }
  }
];

export default hostels; 