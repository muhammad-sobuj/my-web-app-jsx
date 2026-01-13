"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  Filter,
  Search,
  Zap,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/stagger-container";
import { MagneticButton } from "@/components/animated/magnetic-button";
import { AppProviders } from "@/components/app-providers";
import { motion } from "framer-motion";

const equipmentCategories = [
  {
    id: "espresso-machines",
    name: "Espresso Machines",
    description: "Professional-grade espresso machines for the perfect shot",
    icon: "☕",
    count: 12,
  },
  {
    id: "grinders",
    name: "Coffee Grinders",
    description: "Precision burr grinders for consistent particle size",
    icon: "⚙️",
    count: 8,
  },
  {
    id: "brewing",
    name: "Brewing Equipment",
    description: "Pour-over, French press, and specialty brewing tools",
    icon: "🫖",
    count: 15,
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Scales, tampers, and professional barista tools",
    icon: "⚖️",
    count: 20,
  },
];

const featuredEquipment = [
  {
    id: 1,
    name: "Professional Espresso Machine Pro X1",
    description:
      "Commercial-grade dual boiler espresso machine with PID temperature control, pre-infusion, and steam wand. Perfect for cafes and serious home baristas.",
    price: 2499.99,
    originalPrice: 2799.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    category: "Espresso Machines",
    rating: 4.9,
    reviews: 127,
    features: [
      "Dual Boiler System",
      "PID Temperature Control",
      "Pre-infusion",
      "Professional Steam Wand",
    ],
    inStock: true,
    badge: "Best Seller",
    specifications: {
      "Boiler Capacity": "1.4L + 3.5L",
      Power: "2200W",
      Pressure: "15 Bar",
      Dimensions: "43 x 52 x 40 cm",
    },
  },
  {
    id: 2,
    name: "Precision Burr Grinder Elite",
    description:
      "Professional conical burr grinder with 40 grind settings. Consistent particle size distribution for optimal extraction every time.",
    price: 449.99,
    originalPrice: 529.99,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop",
    category: "Grinders",
    rating: 4.8,
    reviews: 89,
    features: [
      "40 Grind Settings",
      "Conical Burr",
      "Timer Function",
      "Anti-Static Technology",
    ],
    inStock: true,
    badge: "Editor's Choice",
    specifications: {
      "Burr Type": "Conical Steel",
      "Grind Settings": "40",
      "Hopper Capacity": "350g",
      Power: "150W",
    },
  },
  {
    id: 3,
    name: "Artisan Pour Over Set",
    description:
      "Complete pour-over brewing set including ceramic dripper, gooseneck kettle, and precision scale. Everything needed for manual brewing perfection.",
    price: 189.99,
    originalPrice: 229.99,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop",
    category: "Brewing Equipment",
    rating: 4.7,
    reviews: 156,
    features: [
      "Ceramic V60 Dripper",
      "Gooseneck Kettle",
      "Digital Scale",
      "Paper Filters Included",
    ],
    inStock: true,
    badge: "Complete Set",
    specifications: {
      "Dripper Material": "Ceramic",
      "Kettle Capacity": "600ml",
      "Scale Accuracy": "0.1g",
      Includes: "100 Paper Filters",
    },
  },
  {
    id: 4,
    name: "Professional Milk Frother Wand",
    description:
      "Commercial-grade milk frother with temperature control and multiple texture settings. Create café-quality microfoam at home.",
    price: 129.99,
    originalPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop",
    category: "Accessories",
    rating: 4.6,
    reviews: 73,
    features: [
      "Temperature Control",
      "Multiple Textures",
      "Easy Cleaning",
      "Compact Design",
    ],
    inStock: false,
    badge: "New Arrival",
    specifications: {
      "Temperature Range": "60-70°C",
      Capacity: "240ml",
      Power: "500W",
      Material: "Stainless Steel",
    },
  },
];

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEquipment = featuredEquipment.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppProviders>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-24 bg-coffee-shop-gradient overflow-hidden">
          <div className="absolute inset-0 container mx-auto ">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-emerald-gradient rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-coffee-gradient rounded-full opacity-15"
              animate={{
                scale: [1.2, 1, 1.2],
                y: [-10, 10, -10],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto relative z-10">
            <FadeIn className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-coffee-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Coffee Equipment
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-amber-700 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                Professional-grade coffee equipment for the perfect brew. From
                espresso machines to precision grinders, discover tools that
                elevate your coffee experience.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <MagneticButton className="bg-emerald-gradient flex justify-center items-center text-white px-8 py-4 text-lg font-semibold hover-glow">
                  Shop Equipment
                  <ShoppingCart className="ml-2 h-6 w-6" />
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  className="border-2 flex justify-center items-center border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch Demo
                </MagneticButton>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-16 ">
          <div className="container mx-auto ">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Equipment Categories
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Explore our comprehensive range of professional coffee equipment
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {equipmentCategories.map((category, index) => (
                <StaggerItem key={category.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="hover-lift cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <Card
                      className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-emerald-gradient text-white"
                          : "bg-cream-gradient"
                      }`}
                    >
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          className="text-6xl mb-4"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          {category.icon}
                        </motion.div>
                        <CardTitle
                          className={`text-xl ${
                            selectedCategory === category.id
                              ? "text-white"
                              : "text-amber-900"
                          }`}
                        >
                          {category.name}
                        </CardTitle>
                        <CardDescription
                          className={`${
                            selectedCategory === category.id
                              ? "text-white/90"
                              : "text-amber-700"
                          }`}
                        >
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Badge
                          className={`${
                            selectedCategory === category.id
                              ? "bg-white text-emerald-600"
                              : "bg-emerald-600 text-white"
                          }`}
                        >
                          {category.count} Products
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-cream-gradient">
          <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search equipment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <Button
                variant="outline"
                className="border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white px-6 py-6"
                onClick={() => setSelectedCategory("all")}
              >
                <Filter className="h-6 w-6 mr-1" />
                All Categories
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Equipment */}
        <section className="py-16">
          <div className="container mx-auto ">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Featured Equipment
              </h2>
              <p className="text-amber-700 text-lg">
                Professional tools for the perfect coffee experience
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {filteredEquipment.map((item, index) => (
                <StaggerItem key={item.id}>
                  <motion.div whileHover={{ y: -8 }} className="hover-lift">
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-cream-gradient overflow-hidden">
                      <div className="relative">
                        <div className="aspect-video relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                          {item.badge && (
                            <Badge className="absolute top-4 left-4 bg-emerald-gradient text-white shadow-lg">
                              {item.badge}
                            </Badge>
                          )}
                          {!item.inStock && (
                            <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-amber-900 line-clamp-2">
                            {item.name}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="ml-2 shrink-0 border-amber-600 text-amber-800"
                          >
                            {item.category}
                          </Badge>
                        </div>
                        <CardDescription className="text-amber-700 line-clamp-3">
                          {item.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-amber-900">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-2 gap-1">
                            {item.features.slice(0, 4).map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-amber-700"
                              >
                                <CheckCircle className="h-3 w-3 text-emerald-600 mr-1 shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price and Rating */}
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-coffee-gradient">
                                ${item.price}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${item.originalPrice}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="flex">
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
                              <span className="text-sm text-amber-700">
                                {item.rating} ({item.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-amber-600 text-amber-800 hover:bg-amber-50 hover:text-amber-500"
                            asChild
                          >
                            <Link href={`/equipment/${item.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              disabled={!item.inStock}
                              className="bg-emerald-gradient hover:shadow-lg text-white px-6"
                            >
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add to Cart
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredEquipment.length === 0 && (
              <FadeIn className="text-center py-12">
                <div className="text-amber-600">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">
                    No equipment found
                  </h3>
                  <p>
                    Try adjusting your search terms or browse all categories
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* Why Choose Our Equipment */}
        <section className="py-16 bg-coffee-shop-gradient">
          <div className="container mx-auto ">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Why Choose Our Equipment?
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                We partner with the world's leading coffee equipment
                manufacturers
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Award className="h-12 w-12 text-emerald-600" />,
                  title: "Professional Grade",
                  description:
                    "Commercial-quality equipment used by top cafes and roasters worldwide",
                },
                {
                  icon: <Zap className="h-12 w-12 text-emerald-600" />,
                  title: "Latest Technology",
                  description:
                    "Cutting-edge features like PID control, pre-infusion, and smart connectivity",
                },
                {
                  icon: <Users className="h-12 w-12 text-emerald-600" />,
                  title: "Expert Support",
                  description:
                    "Free training, installation support, and ongoing technical assistance",
                },
              ].map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="mb-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-amber-700">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-gradient text-white">
          <div className="container mx-auto  text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Upgrade Your Coffee Setup?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Browse our complete collection of professional coffee equipment
                and take your brewing to the next level.
              </p>
              <MagneticButton
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold text-lg rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[200px]"
                asChild
              >
                <Link href="/items">
                  Shop All Equipment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
            </FadeIn>
          </div>
        </section>
      </div>
    </AppProviders>
  );
}
