export interface Hostel {
  id: number;
  name: string;
  address: string;
  distance: {
    college: number;
    metro: number;
  };
  price: number;
  messType: 'veg' | 'non-veg' | 'both';
  amenities: string[];
  photos: string[];
  contactInfo: string;
  rating: number;
  reviews: number;
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
    id: 1,
    name: 'Sunrise Hostel',
    address: 'Vijay Nagar, Delhi University North Campus',
    distance: {
      college: 0.5,
      metro: 1.2
    },
    price: 12000,
    messType: 'both',
    amenities: ['WiFi', 'AC', 'Laundry', 'Library', '24/7 Security'],
    photos: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543210',
    rating: 4.5,
    reviews: 120
  },
  {
    id: 2,
    name: 'Student Haven',
    address: 'Kamla Nagar, Near North Campus',
    distance: {
      college: 1.0,
      metro: 0.5
    },
    price: 10000,
    messType: 'veg',
    amenities: ['WiFi', 'Gym', 'Study Rooms', 'Indoor Games'],
    photos: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543211',
    rating: 4.2,
    reviews: 98
  },
  {
    id: 3,
    name: 'Metro Residency',
    address: 'GTB Nagar, Delhi',
    distance: {
      college: 1.5,
      metro: 0.2
    },
    price: 15000,
    messType: 'non-veg',
    amenities: ['WiFi', 'AC', 'Power Backup', 'CCTV', 'Hot Water'],
    photos: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543212',
    rating: 4.7,
    reviews: 210
  },
  {
    id: 4,
    name: 'South Campus Lodge',
    address: 'Satya Niketan, South Campus',
    distance: {
      college: 0.8,
      metro: 1.5
    },
    price: 13500,
    messType: 'both',
    amenities: ['WiFi', 'Food Delivery', 'Study Tables', 'Balcony'],
    photos: [
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543213',
    rating: 4.0,
    reviews: 75
  },
  {
    id: 5,
    name: 'College Gateway',
    address: 'Hudson Lane, Near North Campus',
    distance: {
      college: 0.3,
      metro: 0.9
    },
    price: 18000,
    messType: 'both',
    amenities: ['WiFi', 'AC', 'TV Lounge', 'Housekeeping', 'Gaming Zone', 'Cafeteria'],
    photos: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543214',
    rating: 4.8,
    reviews: 155
  },
  {
    id: 6,
    name: 'University Plaza',
    address: 'Model Town, Delhi',
    distance: {
      college: 2.0,
      metro: 0.7
    },
    price: 9000,
    messType: 'veg',
    amenities: ['WiFi', 'Study Area', 'Common Kitchen', 'Water Purifier'],
    photos: [
      'https://images.unsplash.com/photo-1499916078039-922301b0eb83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543215',
    rating: 3.9,
    reviews: 65
  },
  {
    id: 7,
    name: 'Scholar\'s Home',
    address: 'Malka Ganj, Delhi',
    distance: {
      college: 1.2,
      metro: 1.0
    },
    price: 11500,
    messType: 'non-veg',
    amenities: ['WiFi', 'AC', 'Medical Assistance', 'Transportation', 'Refrigerator'],
    photos: [
      'https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543216',
    rating: 4.3,
    reviews: 89
  },
  {
    id: 8,
    name: 'DU Residences',
    address: 'Patel Chest, Near North Campus',
    distance: {
      college: 0.4,
      metro: 1.3
    },
    price: 14000,
    messType: 'both',
    amenities: ['WiFi', 'AC', 'Laundry', '24/7 Security', 'Study Hall'],
    photos: [
      'https://images.unsplash.com/photo-1594560913095-8cf34bae6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    contactInfo: '+91 9876543217',
    rating: 4.5,
    reviews: 102
  }
]; 