"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Search, Filter } from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/stagger-container";
import {
  SkeletonLoader,
  ProductCardSkeleton,
  PageLoadingSkeleton,
} from "@/components/ui/skeleton-loader";
import { CoffeeSpinner, ButtonSpinner } from "@/components/ui/loading-spinner";
import { AppProviders } from "@/components/app-providers";
import { motion } from "framer-motion";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/items");
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      // Add a small delay to show the skeleton loading
      setTimeout(() => setLoading(false), 800);
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppProviders>
      <SkeletonLoader>
        <div className="container mx-auto py-8">
          <FadeIn>
            <div className="flex flex-col space-y-6 mb-8">
              <div className="text-center">
                <motion.h1
                  className="text-4xl font-bold tracking-tight mb-4 text-coffee-gradient"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Coffee Collection
                </motion.h1>
                <motion.p
                  className="text-muted-foreground text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  Discover our premium selection of coffee beans and brewing
                  equipment, carefully curated for the perfect cup every time
                </motion.p>
              </div>

              {/* Search and Filter Bar */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search coffee & equipment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          {loading ? (
            <PageLoadingSkeleton />
          ) : (
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item, index) => (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="hover-lift"
                  >
                    <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-cream-gradient hover-glow">
                      <div className="aspect-square relative group">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {!item.inStock && (
                          <Badge
                            variant="secondary"
                            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm animate-pulse"
                          >
                            Out of Stock
                          </Badge>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <motion.div
                          className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-cream-gradient backdrop-blur-sm shadow-lg hover-glow"
                          >
                            Quick View
                          </Button>
                        </motion.div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="line-clamp-1 text-lg">
                            {item.name}
                          </CardTitle>
                          <Badge variant="outline" className="ml-2 shrink-0">
                            {item.category}
                          </Badge>
                        </div>
                        <CardDescription className="line-clamp-2 text-sm">
                          {item.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0 flex-1 flex flex-col justify-end">
                        <div className="flex items-center justify-between mb-3">
                          <motion.span
                            className="text-2xl font-bold text-coffee-gradient"
                            whileHover={{ scale: 1.05 }}
                          >
                            ${item.price}
                          </motion.span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground">
                              {item.rating} ({item.reviews})
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-amber-600 text-amber-800 hover:bg-amber-50"
                            asChild
                          >
                            <Link href={`/items/${item.id}`}>View Details</Link>
                          </Button>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              disabled={!item.inStock}
                              className="flex items-center space-x-1 bg-emerald-gradient hover:shadow-lg text-white"
                            >
                              <ShoppingCart className="h-4 w-4" />
                              <span>Add</span>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {!loading && filteredItems.length === 0 && (
            <FadeIn className="text-center py-12">
              <div className="text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">
                  No coffee products found
                </h3>
                <p>
                  Try adjusting your search terms or browse all coffee products
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </SkeletonLoader>
    </AppProviders>
  );
}
