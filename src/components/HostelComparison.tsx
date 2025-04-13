import React, { useState } from 'react';
import { Hostel } from '../data/hostels';

interface HostelComparisonProps {
  hostels: Hostel[];
  onClose: () => void;
}

const HostelComparison: React.FC<HostelComparisonProps> = ({ hostels, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Define comparison categories
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const amenitiesMap: Record<string, string> = {
    'wifi': 'Wi-Fi',
    'ac': 'Air Conditioning',
    'laundry': 'Laundry',
    'parking': 'Parking',
    'gym': 'Gym',
    'studyRoom': 'Study Room',
    'powerBackup': 'Power Backup',
    'security': '24x7 Security',
    'tvLounge': 'TV Lounge',
    'hotWater': 'Hot Water'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4 bg-primary text-white">
          <h2 className="text-xl font-bold">Compare Hostels</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-primary-dark transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === tab.id ? 'border-b-2 border-accent text-accent' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-auto flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {/* Hostel Headers */}
            {hostels.map(hostel => (
              <div key={hostel.id} className="sticky top-0 bg-white z-10 pb-2">
                <div className="h-48 relative rounded-lg overflow-hidden mb-2">
                  <img
                    src={hostel.images[0]}
                    alt={hostel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 text-white font-bold text-lg">{hostel.name}</h3>
                </div>
                <div className="text-sm text-gray-500">{hostel.address}</div>
              </div>
            ))}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                <ComparisonRow label="Type" hostels={hostels} render={(hostel) => hostel.type} />
                <ComparisonRow label="Gender" hostels={hostels} render={(hostel) => hostel.gender} />
                <ComparisonRow label="Total Rooms" hostels={hostels} render={(hostel) => hostel.totalRooms.toString()} />
                <ComparisonRow label="Room Types" hostels={hostels} render={(hostel) => hostel.roomTypes.join(', ')} />
                <ComparisonRow label="Mess Type" hostels={hostels} render={(hostel) => hostel.messType} />
                <ComparisonRow label="Check-in Time" hostels={hostels} render={(hostel) => hostel.checkInTime || 'Flexible'} />
                <ComparisonRow label="Check-out Time" hostels={hostels} render={(hostel) => hostel.checkOutTime || 'Flexible'} />
                <ComparisonRow 
                  label="Distance to College" 
                  hostels={hostels} 
                  render={(hostel) => `${hostel.distanceToCollege.toFixed(1)} km`} 
                />
                <ComparisonRow 
                  label="Distance to Metro" 
                  hostels={hostels} 
                  render={(hostel) => `${hostel.distanceToMetro.toFixed(1)} km`} 
                />
                <ComparisonRow 
                  label="Rating" 
                  hostels={hostels} 
                  render={(hostel) => (
                    <div className="flex items-center">
                      <span className="text-accent font-bold mr-1">{hostel.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(hostel.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-gray-500 text-sm">({hostel.reviewCount})</span>
                    </div>
                  )} 
                />
              </>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && (
              <>
                {hostels[0].roomTypes.map(roomType => (
                  <ComparisonRow
                    key={roomType}
                    label={roomType}
                    hostels={hostels}
                    render={(hostel) => {
                      const price = hostel.pricing[roomType];
                      return price ? `₹${price.toLocaleString()}/month` : 'Not available';
                    }}
                  />
                ))}
                <ComparisonRow
                  label="Security Deposit"
                  hostels={hostels}
                  render={(hostel) => `₹${hostel.securityDeposit.toLocaleString()}`}
                />
                <ComparisonRow
                  label="Mess Fee"
                  hostels={hostels}
                  render={(hostel) => hostel.messFee ? `₹${hostel.messFee.toLocaleString()}/month` : 'Not included'}
                />
                <ComparisonRow
                  label="Electricity"
                  hostels={hostels}
                  render={(hostel) => hostel.electricityIncluded ? 'Included' : 'Not included'}
                />
                <ComparisonRow
                  label="Minimum Stay"
                  hostels={hostels}
                  render={(hostel) => hostel.minimumStay ? `${hostel.minimumStay} months` : 'No minimum'}
                />
                <ComparisonRow
                  label="Payment Options"
                  hostels={hostels}
                  render={(hostel) => hostel.paymentOptions ? hostel.paymentOptions.join(', ') : 'Cash only'}
                />
              </>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <>
                {Object.entries(amenitiesMap).map(([key, label]) => (
                  <ComparisonRow
                    key={key}
                    label={label}
                    hostels={hostels}
                    render={(hostel) => (
                      hostel.amenities.includes(key) ? (
                        <span className="text-green-600 flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Yes
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          No
                        </span>
                      )
                    )}
                  />
                ))}
              </>
            )}

            {/* Location Tab */}
            {activeTab === 'location' && (
              <>
                <ComparisonRow
                  label="Full Address"
                  hostels={hostels}
                  render={(hostel) => hostel.address}
                />
                <ComparisonRow
                  label="Neighborhood"
                  hostels={hostels}
                  render={(hostel) => hostel.neighborhood || 'Not specified'}
                />
                <ComparisonRow
                  label="Distance to College"
                  hostels={hostels}
                  render={(hostel) => `${hostel.distanceToCollege.toFixed(1)} km (${Math.round(hostel.distanceToCollege * 1000 / 80)} min walk)`}
                />
                <ComparisonRow
                  label="Distance to Metro"
                  hostels={hostels}
                  render={(hostel) => `${hostel.distanceToMetro.toFixed(1)} km (${Math.round(hostel.distanceToMetro * 1000 / 80)} min walk)`}
                />
                <ComparisonRow
                  label="Nearby Landmarks"
                  hostels={hostels}
                  render={(hostel) => hostel.nearbyLandmarks ? hostel.nearbyLandmarks.join(', ') : 'Not specified'}
                />
                <ComparisonRow
                  label="Safe Area"
                  hostels={hostels}
                  render={(hostel) => (
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < (hostel.safetyRating || 3) ? 'text-green-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  )}
                />
              </>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <>
                <ComparisonRow
                  label="Overall Rating"
                  hostels={hostels}
                  render={(hostel) => (
                    <div className="flex items-center">
                      <span className="text-accent font-bold mr-1">{hostel.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(hostel.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-gray-500 text-sm">({hostel.reviewCount} reviews)</span>
                    </div>
                  )}
                />
                <ComparisonRow
                  label="Cleanliness"
                  hostels={hostels}
                  render={(hostel) => renderRatingStars(hostel.ratings?.cleanliness || 0)}
                />
                <ComparisonRow
                  label="Staff"
                  hostels={hostels}
                  render={(hostel) => renderRatingStars(hostel.ratings?.staff || 0)}
                />
                <ComparisonRow
                  label="Facilities"
                  hostels={hostels}
                  render={(hostel) => renderRatingStars(hostel.ratings?.facilities || 0)}
                />
                <ComparisonRow
                  label="Location"
                  hostels={hostels}
                  render={(hostel) => renderRatingStars(hostel.ratings?.location || 0)}
                />
                <ComparisonRow
                  label="Value for Money"
                  hostels={hostels}
                  render={(hostel) => renderRatingStars(hostel.ratings?.value || 0)}
                />
                <ComparisonRow
                  label="Food Quality"
                  hostels={hostels}
                  render={(hostel) => renderRatingStars(hostel.ratings?.food || 0)}
                />
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-between">
          <div className="text-sm text-gray-500">
            Comparing {hostels.length} hostels
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90"
            >
              Book Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ComparisonRowProps {
  label: string;
  hostels: Hostel[];
  render: (hostel: Hostel) => React.ReactNode;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ label, hostels, render }) => {
  return (
    <>
      <div className="font-medium py-3 border-b">{label}</div>
      {hostels.map((hostel) => (
        <div key={`${hostel.id}-${label}`} className="py-3 border-b">
          {render(hostel)}
        </div>
      ))}
    </>
  );
};

const renderRatingStars = (rating: number) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default HostelComparison; 