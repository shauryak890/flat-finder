import React, { useState } from 'react';
import { collegesList } from '../data/hostels';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  distanceToCollege: number;
  distanceToMetro: number;
  roomTypes: string[];
  messType: string[];
  amenities: string[];
  sortBy: string;
  gender: string;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [3000, 15000],
    distanceToCollege: 5,
    distanceToMetro: 2,
    roomTypes: [],
    messType: [],
    amenities: [],
    sortBy: 'recommended',
    gender: 'all'
  });

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newPriceRange = [...filters.priceRange] as [number, number];
    newPriceRange[index] = newValue;
    
    // Ensure min <= max
    if (index === 0 && newPriceRange[0] > newPriceRange[1]) {
      newPriceRange[0] = newPriceRange[1];
    } else if (index === 1 && newPriceRange[1] < newPriceRange[0]) {
      newPriceRange[1] = newPriceRange[0];
    }
    
    updateFilters('priceRange', newPriceRange);
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'distanceToCollege' | 'distanceToMetro') => {
    updateFilters(type, parseInt(e.target.value));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'roomTypes' | 'messType' | 'amenities') => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    const currentValues = [...filters[type]];
    
    if (isChecked && !currentValues.includes(value)) {
      updateFilters(type, [...currentValues, value]);
    } else if (!isChecked && currentValues.includes(value)) {
      updateFilters(type, currentValues.filter(item => item !== value));
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilters('sortBy', e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilters('gender', e.target.value);
  };

  const updateFilters = (key: keyof FilterState, value: any) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      priceRange: [3000, 15000],
      distanceToCollege: 5,
      distanceToMetro: 2,
      roomTypes: [],
      messType: [],
      amenities: [],
      sortBy: 'recommended',
      gender: 'all'
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const roomTypeOptions = [
    { value: 'single', label: 'Single Room' },
    { value: 'double', label: 'Double Sharing' },
    { value: 'triple', label: 'Triple Sharing' },
    { value: 'dormitory', label: 'Dormitory' }
  ];

  const messTypeOptions = [
    { value: 'veg', label: 'Vegetarian' },
    { value: 'nonveg', label: 'Non-Vegetarian' },
    { value: 'both', label: 'Both Options' },
    { value: 'none', label: 'No Mess' }
  ];

  const amenitiesOptions = [
    { value: 'wifi', label: 'Wi-Fi' },
    { value: 'ac', label: 'Air Conditioning' },
    { value: 'laundry', label: 'Laundry' },
    { value: 'parking', label: 'Parking' },
    { value: 'gym', label: 'Gym' },
    { value: 'studyRoom', label: 'Study Room' },
    { value: 'powerBackup', label: 'Power Backup' },
    { value: 'security', label: '24x7 Security' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-primary">Filters</h2>
        <button 
          onClick={resetFilters}
          className="text-sm text-accent hover:underline"
        >
          Reset All
        </button>
      </div>
      
      {/* Sort By */}
      <div className="mb-6">
        <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select
          id="sortBy"
          value={filters.sortBy}
          onChange={handleSortChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
        >
          <option value="recommended">Recommended</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="distanceCollege">Nearest to College</option>
          <option value="distanceMetro">Nearest to Metro</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range (₹ per month)</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">₹{filters.priceRange[0]}</span>
          <span className="text-sm text-gray-500">₹{filters.priceRange[1]}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="minPrice" className="sr-only">Minimum Price</label>
            <input
              type="range"
              id="minPrice"
              min={3000}
              max={15000}
              step={500}
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceRangeChange(e, 0)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="sr-only">Maximum Price</label>
            <input
              type="range"
              id="maxPrice"
              min={3000}
              max={15000}
              step={500}
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(e, 1)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex-1">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceRangeChange(e, 0)}
              min={3000}
              max={filters.priceRange[1]}
              step={500}
              className="w-full p-1 text-sm border border-gray-300 rounded"
            />
          </div>
          <div className="mx-2 flex items-center">
            <span className="text-gray-500">-</span>
          </div>
          <div className="flex-1">
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(e, 1)}
              min={filters.priceRange[0]}
              max={15000}
              step={500}
              className="w-full p-1 text-sm border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
      
      {/* Distance Sliders */}
      <div className="mb-6">
        <div className="mb-4">
          <label htmlFor="distanceToCollege" className="block text-sm font-medium text-gray-700 mb-1">
            Max Distance to College ({filters.distanceToCollege} km)
          </label>
          <input
            type="range"
            id="distanceToCollege"
            min={1}
            max={10}
            value={filters.distanceToCollege}
            onChange={(e) => handleDistanceChange(e, 'distanceToCollege')}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label htmlFor="distanceToMetro" className="block text-sm font-medium text-gray-700 mb-1">
            Max Distance to Metro ({filters.distanceToMetro} km)
          </label>
          <input
            type="range"
            id="distanceToMetro"
            min={0.5}
            max={5}
            step={0.5}
            value={filters.distanceToMetro}
            onChange={(e) => handleDistanceChange(e, 'distanceToMetro')}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {/* Gender */}
      <div className="mb-6">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <select
          id="gender"
          value={filters.gender}
          onChange={handleGenderChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
        >
          <option value="all">All</option>
          <option value="male">Boys Hostel</option>
          <option value="female">Girls Hostel</option>
          <option value="coed">Co-ed</option>
        </select>
      </div>
      
      {/* Room Types */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Room Type</h3>
        <div className="space-y-2">
          {roomTypeOptions.map(option => (
            <div key={option.value} className="flex items-center">
              <input
                id={`roomType-${option.value}`}
                type="checkbox"
                value={option.value}
                checked={filters.roomTypes.includes(option.value)}
                onChange={(e) => handleCheckboxChange(e, 'roomTypes')}
                className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
              />
              <label htmlFor={`roomType-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mess Type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Mess Type</h3>
        <div className="space-y-2">
          {messTypeOptions.map(option => (
            <div key={option.value} className="flex items-center">
              <input
                id={`messType-${option.value}`}
                type="checkbox"
                value={option.value}
                checked={filters.messType.includes(option.value)}
                onChange={(e) => handleCheckboxChange(e, 'messType')}
                className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
              />
              <label htmlFor={`messType-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Amenities */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {amenitiesOptions.map(option => (
            <div key={option.value} className="flex items-center">
              <input
                id={`amenity-${option.value}`}
                type="checkbox"
                value={option.value}
                checked={filters.amenities.includes(option.value)}
                onChange={(e) => handleCheckboxChange(e, 'amenities')}
                className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
              />
              <label htmlFor={`amenity-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <button 
          onClick={() => onFilterChange(filters)}
          className="w-full bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter; 