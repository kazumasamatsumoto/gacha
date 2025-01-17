import { ProductCard } from "@/components/product-card";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    name: "往日の夢草60個",
    price: 120,
    quantity: 60,
    bonus: 60,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3aeMUDqLTD1WIplSAcsKHLDjNChZ4.png",
  },
  {
    id: "2",
    name: "往日の夢草300個",
    price: 610,
    quantity: 300,
    bonus: 300,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3aeMUDqLTD1WIplSAcsKHLDjNChZ4.png",
  },
  {
    id: "3",
    name: "往日の夢草980個",
    price: 1840,
    quantity: 980,
    bonus: 980,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3aeMUDqLTD1WIplSAcsKHLDjNChZ4.png",
  },
  {
    id: "4",
    name: "往日の夢草1980個",
    price: 3680,
    quantity: 1980,
    bonus: 1980,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3aeMUDqLTD1WIplSAcsKHLDjNChZ4.png",
  },
  {
    id: "5",
    name: "往日の夢草3280個",
    price: 6100,
    quantity: 3280,
    bonus: 3280,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3aeMUDqLTD1WIplSAcsKHLDjNChZ4.png",
  },
  {
    id: "6",
    name: "往日の夢草6480個",
    price: 12000,
    quantity: 6480,
    bonus: 6480,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3aeMUDqLTD1WIplSAcsKHLDjNChZ4.png",
  },
];

export default function ExchangePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900/20 to-indigo-900/20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          アイテム交換所
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DUMMY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
