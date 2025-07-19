import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, PropertyProps } from "@/constants";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border ${
        active ? "bg-blue-600 text-white" : "bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

const filters = ["Luxury Villa", "Self Checkin", "Free Parking", "Pool"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="p-4 flex space-x-4 overflow-x-auto">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() =>
              setActiveFilter(activeFilter === filter ? null : filter)
            }
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {filteredProperties.map((property: PropertyProps) => (
          <div
            key={property.name}
            className="border rounded shadow overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-sm text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <p className="text-blue-600 font-bold">${property.price}</p>
              <p>Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
