import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  type: "property" | "excursion";
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  rating,
  image,
  type,
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <AspectRatio ratio={4 / 3}>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform"
          />
        </AspectRatio>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold truncate">{title}</h3>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            <Badge variant="secondary">{rating}★</Badge>
          </div>
          <p className="mt-4 font-semibold">
            ${price} {type === "property" ? "/night" : "/person"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
