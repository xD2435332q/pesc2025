import { useParams } from "react-router-dom";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Bed, Bath, Users, Check } from "lucide-react";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <div>Property not found</div>;

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            {property.images
              ?.slice(1, 5)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-[195px] object-cover rounded-lg"
                />
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <p className="text-muted-foreground">{property.location}</p>
            </div>

            <Separator />

            {property.type === "property" && (
              <div className="flex gap-6">
                {property.bedrooms && (
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                )}
                {property.maxGuests && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Up to {property.maxGuests} guests</span>
                  </div>
                )}
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground">{property.description}</p>
            </div>

            {property.amenities && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Card */}
          <Card className="p-6 h-fit sticky top-24">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-2xl font-bold">${property.price}</p>
                <p className="text-muted-foreground">
                  {property.type === "property" ? "/night" : "/person"}
                </p>
              </div>
              <Badge variant="secondary">{property.rating}★</Badge>
            </div>

            <Calendar
              mode="range"
              className="mb-4"
              selected={undefined}
              onSelect={() => {}}
            />

            <Button className="w-full">Book Now</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
