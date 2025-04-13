import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Trusted by Delhi University Students
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Join thousands of students who found their perfect hostel using DU Flat Finder.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary">Aarav Sharma</h3>
                    <p className="text-sm text-gray-500">Hansraj College</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I was struggling to find a good hostel near North Campus. DU Flat Finder made it super easy! The filters are amazing, and I found exactly what I was looking for."
                </p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary">Priya Patel</h3>
                    <p className="text-sm text-gray-500">Miranda House</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a first-year student, I was anxious about finding safe accommodation. This platform helped me find a women's hostel with all the amenities I needed within my budget."
                </p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary">Rahul Gupta</h3>
                    <p className="text-sm text-gray-500">St. Stephen's College</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The ability to filter hostels based on distance to metro and college was a game-changer! I found a great place just a few minutes away from both."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to find your perfect hostel?</span>
              <span className="block text-accent">Start your search today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/hostels"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
                >
                  Browse Hostels
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 