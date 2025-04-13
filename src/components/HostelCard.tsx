import React from 'react';
import { Link } from 'react-router-dom';
import { Hostel } from '../data/hostels';

interface HostelCardProps {
  hostel: Hostel;
}

const HostelCard: React.FC<HostelCardProps> = ({ hostel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48">
        <img 
          src={hostel.photos[0]} 
          alt={hostel.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-accent text-white text-sm font-semibold px-2 py-1 rounded-md">
          ₹{hostel.price.toLocaleString()}/month
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-primary truncate">{hostel.name}</h3>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-700 font-medium ml-1">{hostel.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({hostel.reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-2">{hostel.address}</p>
        
        <div className="flex items-center mb-4 text-sm">
          <div className="mr-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{hostel.distance.college} km to college</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{hostel.distance.metro} km to metro</span>
          </div>
        </div>
        
        <div className="flex flex-wrap mb-4">
          <span className={`px-2 py-1 text-xs font-semibold rounded-md mr-2 mb-2 ${
            hostel.messType === 'veg' 
              ? 'bg-green-100 text-green-800' 
              : hostel.messType === 'non-veg' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-purple-100 text-purple-800'
          }`}>
            {hostel.messType === 'both' ? 'Veg & Non-Veg' : hostel.messType === 'veg' ? 'Veg' : 'Non-Veg'} Mess
          </span>
          
          {hostel.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-semibold rounded-md mr-2 mb-2">
              {amenity}
            </span>
          ))}
          
          {hostel.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-semibold rounded-md mr-2 mb-2">
              +{hostel.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/hostels/${hostel.id}`} 
            className="text-accent hover:text-accent/80 font-medium"
          >
            View Details
          </Link>
          <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelCard; 