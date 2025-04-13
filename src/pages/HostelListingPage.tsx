import React, { useState, useEffect } from 'react';
import { hostels, Hostel } from '../data/hostels';
import HostelCard from '../components/HostelCard';
import Filter, { FilterOptions } from '../components/Filter';

const HostelListingPage: React.FC = () => {
  const [filteredHostels, setFilteredHostels] = useState<Hostel[]>(hostels);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilterChange = (filters: FilterOptions) => {
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const filtered = hostels.filter((hostel) => {
        // Filter by price
        if (hostel.price > filters.priceRange[1]) {
          return false;
        }
        
        // Filter by mess type
        if (filters.messType !== 'all' && hostel.messType !== filters.messType) {
          return false;
        }
        
        // Filter by distance to college
        if (hostel.distance.college > filters.maxDistanceToCollege) {
          return false;
        }
        
        // Filter by distance to metro
        if (hostel.distance.metro > filters.maxDistanceToMetro) {
          return false;
        }
        
        // Filter by amenities
        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every((amenity) => 
            hostel.amenities.includes(amenity)
          );
          if (!hasAllAmenities) {
            return false;
          }
        }
        
        // Filter by college (if selected)
        if (filters.college && !hostel.address.includes(filters.college)) {
          return false;
        }
        
        return true;
      });
      
      setFilteredHostels(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary">Find Your Perfect Hostel</h1>
          <p className="mt-4 text-xl text-gray-500">
            Browse through our selection of hostels near Delhi University
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-4">
              <Filter onFilterChange={handleFilterChange} />
            </div>
          </div>
          
          {/* Hostel listings */}
          <div className="md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
              </div>
            ) : filteredHostels.length > 0 ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600 font-medium">
                    {filteredHostels.length} {filteredHostels.length === 1 ? 'hostel' : 'hostels'} found
                  </p>
                  <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      className="rounded-md border-gray-300 py-1 text-sm focus:border-accent focus:ring-accent"
                    >
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="distance">Distance to College</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredHostels.map((hostel) => (
                    <HostelCard key={hostel.id} hostel={hostel} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-primary">No hostels found</h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your filters to see more results.
                </p>
                <button
                  onClick={() => handleFilterChange({
                    college: '',
                    priceRange: [0, 20000] as [number, number],
                    messType: 'all',
                    maxDistanceToCollege: 5,
                    maxDistanceToMetro: 5,
                    amenities: []
                  })}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelListingPage; 