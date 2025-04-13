import React from 'react';
import { Link } from 'react-router-dom';
import { Hostel } from '../data/hostels';

interface HostelCardProps {
  hostel: Hostel;
  onCompare?: (hostel: Hostel) => void;
  isSelected?: boolean;
}

const HostelCard: React.FC<HostelCardProps> = ({ hostel, onCompare, isSelected = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg relative ${isSelected ? 'ring-2 ring-accent' : ''}`}>
      {/* Image */}
      <div className="relative h-48">
        <img
          src={hostel.images[0]}
          alt={hostel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 m-2 bg-primary text-white text-xs px-2 py-1 rounded">
          {hostel.type}
        </div>
        <div className="absolute top-0 right-0 m-2 bg-accent text-white text-xs px-2 py-1 rounded">
          {hostel.gender}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-semibold text-lg truncate">{hostel.name}</h3>
          <p className="text-white/90 text-sm truncate">{hostel.neighborhood}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center">
              <span className="font-bold text-primary text-lg">₹{hostel.price.toLocaleString()}</span>
              <span className="text-gray-500 text-sm ml-1">/month</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {hostel.securityDeposit > 0 && (
                <span>Security: ₹{hostel.securityDeposit.toLocaleString()}</span>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-accent font-bold mr-1">{hostel.rating}</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(hostel.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-gray-500 text-xs">({hostel.reviewCount})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {hostel.roomTypes.map((type) => (
            <span key={type} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {type}
            </span>
          ))}
        </div>

        <div className="flex justify-between mb-4 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{hostel.distanceToCollege.toFixed(1)} km to college</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{hostel.distanceToMetro.toFixed(1)} km to metro</span>
          </div>
        </div>

        <div className="flex flex-wrap mb-3">
          {hostel.amenities.slice(0, 4).map((amenity) => (
            <div key={amenity} className="flex items-center mr-3 mb-1">
              <svg className="w-3 h-3 text-accent mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-600">{amenity}</span>
            </div>
          ))}
          {hostel.amenities.length > 4 && (
            <div className="text-xs text-gray-500">+{hostel.amenities.length - 4} more</div>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <button 
            onClick={() => onCompare && onCompare(hostel)}
            className={`px-3 py-1 text-sm font-medium rounded-md ${isSelected ? 'bg-accent text-white' : 'border border-accent text-accent hover:bg-accent/10'}`}
          >
            {isSelected ? 'Selected' : 'Compare'}
          </button>
          <Link 
            to={`/hostels/${hostel.id}`}
            className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostelCard; 