import SearchFilters from "./SearchFilters";

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1455587734955-081b22074882)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect Getaway
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Discover amazing properties and experiences around the world
          </p>
        </div>

        <SearchFilters />
      </div>
    </div>
  );
}
