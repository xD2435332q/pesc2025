export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  type: "property" | "excursion";
  description?: string;
  amenities?: string[];
  maxGuests?: number;
  bedrooms?: number;
  bathrooms?: number;
  images?: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Beach Villa",
    location: "Maldives",
    price: 599,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    type: "property",
    description: "Stunning beachfront villa with private pool and ocean views",
    amenities: [
      "Private Pool",
      "Ocean View",
      "WiFi",
      "Kitchen",
      "Air Conditioning",
    ],
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    ],
  },
  {
    id: 2,
    title: "Mountain Retreat",
    location: "Swiss Alps",
    price: 299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    type: "property",
    description: "Cozy mountain cabin with breathtaking views",
    amenities: ["Fireplace", "Mountain View", "WiFi", "Kitchen", "Heating"],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    ],
  },
  {
    id: 3,
    title: "Desert Safari Experience",
    location: "Dubai",
    price: 149,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3",
    type: "excursion",
    description: "Thrilling desert safari with dinner and entertainment",
    amenities: ["Transportation", "Meals Included", "Guide", "Entertainment"],
    maxGuests: 10,
  },
  {
    id: 4,
    title: "Tropical Paradise",
    location: "Bali",
    price: 199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    type: "property",
    description: "Traditional Balinese villa with private garden",
    amenities: [
      "Private Garden",
      "Pool",
      "WiFi",
      "Kitchen",
      "Air Conditioning",
    ],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
      "https://images.unsplash.com/photo-1437846972679-9e6e537be46e",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    ],
  },
  {
    id: 5,
    title: "Rainforest Adventure",
    location: "Costa Rica",
    price: 129,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f",
    type: "excursion",
    description: "Guided rainforest tour with zip-lining",
    amenities: ["Transportation", "Equipment", "Guide", "Lunch Included"],
    maxGuests: 8,
  },
  {
    id: 6,
    title: "City View Apartment",
    location: "Tokyo",
    price: 249,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    type: "property",
    description: "Modern apartment in the heart of Tokyo",
    amenities: ["City View", "WiFi", "Kitchen", "Air Conditioning"],
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1480796927426-f609979314bd",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      "https://images.unsplash.com/photo-1536437557680-80087f04a042",
    ],
  },
];
