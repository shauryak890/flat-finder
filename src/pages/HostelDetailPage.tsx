import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { hostels, Hostel } from '../data/hostels';

const HostelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hostel, setHostel] = useState<Hostel | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const foundHostel = hostels.find(h => h.id === id);
      if (foundHostel) {
        setHostel(foundHostel);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!hostel) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-primary">Hostel Not Found</h1>
        <p className="mt-4 text-lg text-gray-500">
          The hostel you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/hostels" className="mt-8 inline-block bg-accent text-white px-6 py-3 rounded-md font-medium">
          Back to Hostels
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link to="/hostels" className="text-accent hover:text-accent/80 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Hostels
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column - Images */}
        <div className="lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={hostel.images[activeImage]} 
              alt={hostel.name} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {hostel.images.map((image: string, index: number) => (
              <div 
                key={index}
                className={`cursor-pointer rounded-md overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${hostel.name} ${index + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Details */}
        <div className="lg:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-primary">{hostel.name}</h1>
              <p className="text-gray-600 mt-1">{hostel.address}</p>
            </div>
            <div className="flex items-center bg-accent text-white px-4 py-2 rounded-md">
              <span className="text-xl font-bold">₹{hostel.price.toLocaleString()}</span>
              <span className="text-sm ml-1">/month</span>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex items-center mr-6">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-700 font-medium ml-1">{hostel.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({hostel.reviewCount} reviews)</span>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
              hostel.messType === 'veg' 
                ? 'bg-green-100 text-green-800' 
                : hostel.messType === 'non-veg' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-purple-100 text-purple-800'
            }`}>
              {hostel.messType === 'both' ? 'Veg & Non-Veg' : hostel.messType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} Mess
            </span>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-primary">Distance</h2>
            <div className="mt-2 flex items-center space-x-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">{hostel.distanceToCollege} km to college</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700">{hostel.distanceToMetro} km to metro</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-primary">Amenities</h2>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {hostel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-primary">Contact Information</h2>
            <p className="text-gray-700 mt-2">{hostel.description.split('.')[0]}</p>
          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-md font-medium transition-colors duration-300">
              Book a Visit
            </button>
            <button className="w-full border border-accent text-accent hover:bg-accent/10 py-3 rounded-md font-medium transition-colors duration-300">
              Contact Hostel
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Similar Hostels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostels
            .filter(h => h.id !== hostel.id)
            .slice(0, 3)
            .map(similarHostel => (
              <div key={similarHostel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={similarHostel.images[0]} 
                  alt={similarHostel.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary">{similarHostel.name}</h3>
                  <p className="text-gray-600 text-sm">{similarHostel.address}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold text-accent">₹{similarHostel.price.toLocaleString()}/month</span>
                    <Link 
                      to={`/hostels/${similarHostel.id}`} 
                      className="text-primary hover:text-accent text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HostelDetailPage; 