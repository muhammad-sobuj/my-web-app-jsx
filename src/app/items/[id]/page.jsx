import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft, Heart } from "lucide-react";
import { getItemById } from "@/lib/data";

export default async function ItemPage({ params }) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" className="mb-6" asChild>
        <Link href="/items">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Items
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {!item.inStock && (
              <Badge variant="secondary" className="absolute top-4 right-4">
                Out of Stock
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {item.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight">{item.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(item.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {item.rating} ({item.reviews} reviews)
              </span>
            </div>
          </div>

          <div>
            <span className="text-3xl font-bold">${item.price}</span>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span>{item.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability:</span>
                <span
                  className={item.inStock ? "text-green-600" : "text-red-600"}
                >
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rating:</span>
                <span>{item.rating}/5.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reviews:</span>
                <span>{item.reviews} reviews</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-4">
            <Button size="lg" disabled={!item.inStock} className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {item.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>• Free shipping on orders over $50</p>
            <p>• 30-day return policy</p>
            <p>• 1-year warranty included</p>
          </div>
        </div>
      </div>
    </div>
  );
}
