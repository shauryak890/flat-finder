import React, { useState, useEffect } from 'react';
import { Hostel } from '../data/hostels';

interface CostCalculatorProps {
  hostel: Hostel;
  onClose: () => void;
}

interface CostBreakdown {
  rent: number;
  messFee: number;
  electricityAndUtilities: number;
  security: number;
  transportation: number;
  additionalExpenses: number;
  total: number;
}

const CostCalculator: React.FC<CostCalculatorProps> = ({ hostel, onClose }) => {
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [stayDuration, setStayDuration] = useState<number>(10);
  const [electricityEstimate, setElectricityEstimate] = useState<number>(hostel.electricityIncluded ? 0 : 1000);
  const [transportBudget, setTransportBudget] = useState<number>(1500);
  const [additionalExpenses, setAdditionalExpenses] = useState<number>(2000);
  const [costBreakdown, setCostBreakdown] = useState<CostBreakdown>({
    rent: 0,
    messFee: 0,
    electricityAndUtilities: 0,
    security: 0,
    transportation: 0,
    additionalExpenses: 0,
    total: 0
  });

  useEffect(() => {
    // Set default room type
    if (hostel.roomTypes.length > 0 && !selectedRoom) {
      setSelectedRoom(hostel.roomTypes[0]);
    }
  }, [hostel.roomTypes, selectedRoom]);

  useEffect(() => {
    calculateCosts();
  }, [selectedRoom, stayDuration, electricityEstimate, transportBudget, additionalExpenses]);

  const calculateCosts = () => {
    if (!selectedRoom) return;

    const monthlyRent = hostel.pricing[selectedRoom] || 0;
    const monthlyMessFee = hostel.messFee || 0;
    const monthlyCost = monthlyRent + monthlyMessFee;
    
    // Calculate rent for the entire duration
    const totalRent = monthlyRent * stayDuration;
    
    // Calculate mess fee for the entire duration
    const totalMessFee = monthlyMessFee * stayDuration;
    
    // Electricity and utilities
    const totalElectricity = hostel.electricityIncluded ? 0 : electricityEstimate * stayDuration;
    
    // Security deposit (one-time)
    const securityDeposit = hostel.securityDeposit || 0;
    
    // Transportation costs
    const totalTransport = transportBudget * stayDuration;
    
    // Additional expenses (personal items, entertainment, etc.)
    const totalAdditional = additionalExpenses * stayDuration;
    
    // Calculate total cost
    const totalCost = totalRent + totalMessFee + totalElectricity + securityDeposit + totalTransport + totalAdditional;
    
    setCostBreakdown({
      rent: totalRent,
      messFee: totalMessFee,
      electricityAndUtilities: totalElectricity,
      security: securityDeposit,
      transportation: totalTransport,
      additionalExpenses: totalAdditional,
      total: totalCost
    });
  };

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const getPercentage = (amount: number) => {
    return ((amount / costBreakdown.total) * 100).toFixed(1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4 bg-primary text-white">
          <h2 className="text-xl font-bold">Cost Calculator: {hostel.name}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-primary-dark transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-auto flex-grow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">Cost Parameters</h3>
              
              {/* Room Type */}
              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                  Room Type
                </label>
                <select
                  id="roomType"
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                >
                  {hostel.roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type} - {formatCurrency(hostel.pricing[type] || 0)}/month
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Stay Duration */}
              <div>
                <label htmlFor="stayDuration" className="block text-sm font-medium text-gray-700 mb-1">
                  Stay Duration (months)
                </label>
                <div className="flex items-center">
                  <input
                    type="range"
                    id="stayDuration"
                    min={1}
                    max={12}
                    step={1}
                    value={stayDuration}
                    onChange={(e) => setStayDuration(parseInt(e.target.value))}
                    className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700 font-medium w-8 text-center">{stayDuration}</span>
                </div>
              </div>
              
              {/* Electricity Estimate */}
              {!hostel.electricityIncluded && (
                <div>
                  <label htmlFor="electricity" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Electricity & Utilities (₹)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
                    </div>
                    <input
                      type="number"
                      id="electricity"
                      min={0}
                      value={electricityEstimate}
                      onChange={(e) => setElectricityEstimate(parseInt(e.target.value) || 0)}
                      className="focus:ring-accent focus:border-accent block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0"
                    />
                  </div>
                </div>
              )}
              
              {/* Transportation Budget */}
              <div>
                <label htmlFor="transport" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Transportation Budget (₹)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="number"
                    id="transport"
                    min={0}
                    value={transportBudget}
                    onChange={(e) => setTransportBudget(parseInt(e.target.value) || 0)}
                    className="focus:ring-accent focus:border-accent block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
              
              {/* Additional Expenses */}
              <div>
                <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Personal Expenses (₹)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="number"
                    id="additional"
                    min={0}
                    value={additionalExpenses}
                    onChange={(e) => setAdditionalExpenses(parseInt(e.target.value) || 0)}
                    className="focus:ring-accent focus:border-accent block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Includes food outside mess, entertainment, books, etc.
                </p>
              </div>
            </div>
            
            {/* Cost Breakdown */}
            <div>
              <h3 className="text-lg font-semibold text-primary border-b pb-2">Cost Breakdown</h3>
              
              <div className="mt-4 space-y-4">
                <CostItem 
                  label="Room Rent" 
                  amount={costBreakdown.rent}
                  percentage={getPercentage(costBreakdown.rent)} 
                  color="bg-blue-500" 
                />
                
                {hostel.messFee && (
                  <CostItem 
                    label="Mess Fee" 
                    amount={costBreakdown.messFee}
                    percentage={getPercentage(costBreakdown.messFee)} 
                    color="bg-green-500" 
                  />
                )}
                
                {!hostel.electricityIncluded && (
                  <CostItem 
                    label="Electricity & Utilities" 
                    amount={costBreakdown.electricityAndUtilities}
                    percentage={getPercentage(costBreakdown.electricityAndUtilities)} 
                    color="bg-yellow-500" 
                  />
                )}
                
                <CostItem 
                  label="Security Deposit" 
                  amount={costBreakdown.security}
                  percentage={getPercentage(costBreakdown.security)} 
                  color="bg-purple-500" 
                  isOneTime
                />
                
                <CostItem 
                  label="Transportation" 
                  amount={costBreakdown.transportation}
                  percentage={getPercentage(costBreakdown.transportation)} 
                  color="bg-red-500" 
                />
                
                <CostItem 
                  label="Personal Expenses" 
                  amount={costBreakdown.additionalExpenses}
                  percentage={getPercentage(costBreakdown.additionalExpenses)} 
                  color="bg-indigo-500" 
                />
                
                <div className="pt-4 border-t mt-4">
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total Cost</span>
                    <span>{formatCurrency(costBreakdown.total)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    For {stayDuration} month{stayDuration > 1 ? 's' : ''} stay
                  </p>
                </div>
              </div>
              
              {/* Visual Representation */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Cost Distribution</h4>
                <div className="w-full h-6 rounded-full overflow-hidden flex">
                  {costBreakdown.rent > 0 && (
                    <div 
                      className="bg-blue-500 h-full" 
                      style={{ width: `${getPercentage(costBreakdown.rent)}%` }}
                      title={`Rent: ${getPercentage(costBreakdown.rent)}%`}
                    ></div>
                  )}
                  {costBreakdown.messFee > 0 && (
                    <div 
                      className="bg-green-500 h-full" 
                      style={{ width: `${getPercentage(costBreakdown.messFee)}%` }}
                      title={`Mess Fee: ${getPercentage(costBreakdown.messFee)}%`}
                    ></div>
                  )}
                  {costBreakdown.electricityAndUtilities > 0 && (
                    <div 
                      className="bg-yellow-500 h-full" 
                      style={{ width: `${getPercentage(costBreakdown.electricityAndUtilities)}%` }}
                      title={`Electricity & Utilities: ${getPercentage(costBreakdown.electricityAndUtilities)}%`}
                    ></div>
                  )}
                  {costBreakdown.security > 0 && (
                    <div 
                      className="bg-purple-500 h-full" 
                      style={{ width: `${getPercentage(costBreakdown.security)}%` }}
                      title={`Security Deposit: ${getPercentage(costBreakdown.security)}%`}
                    ></div>
                  )}
                  {costBreakdown.transportation > 0 && (
                    <div 
                      className="bg-red-500 h-full" 
                      style={{ width: `${getPercentage(costBreakdown.transportation)}%` }}
                      title={`Transportation: ${getPercentage(costBreakdown.transportation)}%`}
                    ></div>
                  )}
                  {costBreakdown.additionalExpenses > 0 && (
                    <div 
                      className="bg-indigo-500 h-full" 
                      style={{ width: `${getPercentage(costBreakdown.additionalExpenses)}%` }}
                      title={`Personal Expenses: ${getPercentage(costBreakdown.additionalExpenses)}%`}
                    ></div>
                  )}
                </div>
                
                <div className="mt-2 text-xs flex flex-wrap gap-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <span>Rent</span>
                  </div>
                  {hostel.messFee && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                      <span>Mess</span>
                    </div>
                  )}
                  {!hostel.electricityIncluded && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                      <span>Utilities</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
                    <span>Security</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <span>Transport</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1"></div>
                    <span>Personal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-gray-700">Tips to Save Money</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Consider sharing a room to reduce rent costs</li>
              <li>Look for hostels closer to college to save on transportation</li>
              <li>Subscribe to mess plans instead of eating out frequently</li>
              <li>Look for hostels that include electricity in the rent</li>
              <li>Search for student discounts on transportation and services</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-between">
          <div className="text-sm text-gray-500">
            Estimated monthly cost: {formatCurrency(costBreakdown.total / stayDuration)}
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
              Save Calculation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CostItemProps {
  label: string;
  amount: number;
  percentage: string;
  color: string;
  isOneTime?: boolean;
}

const CostItem: React.FC<CostItemProps> = ({ label, amount, percentage, color, isOneTime }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
          <span className="font-medium">{label}</span>
          {isOneTime && <span className="ml-1 text-xs text-gray-500">(one-time)</span>}
        </div>
        <span>₹{amount.toLocaleString()}</span>
      </div>
      <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
        <div className={`${color} h-1.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-500 mt-0.5">
        <span>{percentage}% of total</span>
      </div>
    </div>
  );
};

export default CostCalculator; 