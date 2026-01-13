"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Plus } from "lucide-react";
import { AppProviders } from "@/components/app-providers";
import { ButtonSpinner } from "@/components/ui/loading-spinner";
import { FormLoadingSkeleton } from "@/components/ui/skeleton-loader";

const categories = [
  "Coffee Beans",
  "Equipment",
  "Accessories",
  "Brewing Tools",
  "Grinders",
  "Espresso Machines",
  "Pour Over",
  "French Press",
];

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Item added successfully!");
        router.push("/items");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to add item");
      }
    } catch (error) {
      toast.error("An error occurred while adding the item");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Reset image error when image URL changes
    if (field === "image") {
      setImageError(false);
    }
  };

  return (
    <AppProviders>
      <div className="container mx-auto py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/items">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Coffee Collection
          </Link>
        </Button>

        {isPageLoading ? (
          <FormLoadingSkeleton />
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-cream-gradient">
              <CardHeader className="bg-coffee-shop-gradient">
                <CardTitle className="flex items-center space-x-2 text-coffee-gradient">
                  <Plus className="h-6 w-6" />
                  <span>Add New Coffee Product</span>
                </CardTitle>
                <CardDescription className="text-amber-700">
                  Add a new coffee product or equipment to our collection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Coffee Product Name</Label>
                    <Input
                     className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                      id="name"
                      placeholder="e.g., Ethiopian Single Origin, Espresso Machine"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Product Description</Label>
                    <Textarea
                     className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                      id="description"
                      placeholder="Describe the coffee origin, flavor notes, or equipment features"
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                       className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                        id="price"
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={(e) =>
                          handleInputChange("price", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Product Category</Label>
                      <Select
                       className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                        value={formData.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select coffee category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Product Image URL</Label>
                    <Input
                     className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                      id="image"
                      type="url"
                      placeholder="https://images.unsplash.com/coffee-image.jpg"
                      value={formData.image}
                      onChange={(e) =>
                        handleInputChange("image", e.target.value)
                      }
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Provide a URL to a high-quality image of the coffee
                      product
                    </p>
                  </div>

                  {formData.image && (
                    <div className="space-y-2">
                      <Label>Image Preview</Label>
                      <div className="aspect-video w-full max-w-sm relative rounded-lg overflow-hidden border bg-gray-100">
                        {!imageError ? (
                          <Image
                            src={formData.image}
                            alt="Preview"
                            fill
                            sizes="(max-width: 384px) 100vw, 384px"
                            className="object-cover"
                            onError={() => setImageError(true)}
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <div className="text-center p-4">
                              <p className="text-sm text-gray-600">
                                Invalid Image URL
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Please check the URL and try again
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-emerald-gradient hover:shadow-lg text-white hover-glow"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <ButtonSpinner className="mr-2" />
                          Adding Product...
                        </div>
                      ) : (
                        "Add Coffee Product"
                      )}
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <Link href="/items">Cancel</Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AppProviders>
  );
}
