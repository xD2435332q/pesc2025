import { properties } from "@/lib/data";
import PropertyCard from "./PropertyCard";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location")?.toLowerCase();
  const maxPrice = searchParams.get("maxPrice");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  const filteredProperties = properties.filter((property) => {
    if (location && !property.location.toLowerCase().includes(location)) {
      return false;
    }
    if (maxPrice && property.price > Number(maxPrice)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">
          {filteredProperties.length} properties found
          {location ? ` in ${location}` : ""}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
}
