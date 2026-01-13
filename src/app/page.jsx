"use client";

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
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Star,
  Coffee,
  Leaf,
  Award,
  Users,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/stagger-container";
import { ParallaxSection } from "@/components/animated/parallax-section";
import { MagneticButton } from "@/components/animated/magnetic-button";
import { AppProviders } from "@/components/app-providers";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <AppProviders>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-shop-gradient">
          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-gradient rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-coffee-gradient rounded-full opacity-15"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Animated Coffee beans scattered */}
            <motion.div
              className="absolute top-20 left-1/4 w-2 h-2 bg-amber-800 rounded-full opacity-30"
              animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-amber-900 rounded-full opacity-40"
              animate={{ y: [5, -5, 5], rotate: [360, 180, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-40 left-1/5 w-2.5 h-2.5 bg-amber-700 rounded-full opacity-25"
              animate={{ y: [-3, 3, -3], rotate: [0, 90, 180] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          <div className=" container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <motion.div
                    className="inline-flex items-center rounded-full border border-emerald-200 bg-cream-gradient px-4 py-2 text-sm text-amber-800 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(5, 150, 105, 0.2)",
                    }}
                    animate={{ y: [-2, 2, -2] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Coffee className="mr-2 h-4 w-4 text-emerald-600" />
                    Premium Coffee Experience
                  </motion.div>

                  <div className="space-y-4">
                    <motion.h1
                      className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      A cup of hot coffee is what{" "}
                      <span className="text-emerald-gradient bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                        you need
                      </span>
                    </motion.h1>
                    <motion.p
                      className="text-lg text-amber-700 max-w-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    >
                      Start your day with our expertly crafted coffee blends.
                      From single-origin beans to signature roasts, discover
                      your perfect cup.
                    </motion.p>
                  </div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <MagneticButton className="bg-emerald-gradient text-white hover:shadow-lg hover-glow px-8 py-3 rounded-lg font-medium transition-all duration-300">
                      <Link href="/items" className="flex items-center">
                        Shop Coffee <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </MagneticButton>
                    <MagneticButton className="border-2 border-amber-600 text-amber-800 hover:bg-coffee-shop-gradient hover:text-amber-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover-lift">
                      Learn More
                    </MagneticButton>
                  </motion.div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <div className="relative">
                  <motion.div
                    className="aspect-square relative rounded-full bg-emerald-gradient p-8 shadow-2xl"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="w-full h-full bg-cream-gradient rounded-full flex items-center justify-center shadow-inner"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Coffee className="w-32 h-32 text-emerald-600" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Floating coffee elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 border border-emerald-100"
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-amber-800">
                        Fresh
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-amber-50 rounded-lg shadow-xl p-4 border border-amber-200"
                    animate={{
                      y: [10, -10, 10],
                      rotate: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-amber-800">
                        Premium
                      </span>
                    </div>
                  </motion.div>

                  {/* Steam animation */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-t from-transparent via-gray-300 to-transparent rounded-full opacity-60"
                        style={{ left: `${i * 8}px` }}
                        animate={{
                          opacity: [0, 0.6, 0],
                          y: [0, -20],
                          scale: [1, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Coffee Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Our Coffee
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our carefully selected coffee blends, each with its
                unique flavor profile and origin story.
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Arabica Blend",
                  price: "$24.99",
                  image: "☕",
                  description: "Smooth and aromatic",
                  badge: "Popular",
                },
                {
                  name: "Dark Roast",
                  price: "$26.99",
                  image: "🫘",
                  description: "Bold and intense",
                  badge: "Strong",
                },
                {
                  name: "Medium Roast",
                  price: "$23.99",
                  image: "☕",
                  description: "Balanced flavor",
                  badge: "Balanced",
                },
                {
                  name: "Light Roast",
                  price: "$22.99",
                  image: "🫘",
                  description: "Bright and fruity",
                  badge: "Mild",
                },
              ].map((coffee, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="hover-lift"
                  >
                    <Card className="h-full border-0 shadow-lg transition-all duration-300 bg-cream-gradient hover-glow">
                      <motion.div
                        className="aspect-square relative bg-coffee-shop-gradient flex items-center justify-center overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="text-6xl"
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                        >
                          {coffee.image}
                        </motion.div>
                        <Badge className="absolute top-3 right-3 bg-emerald-gradient text-white shadow-lg animate-pulse">
                          {coffee.badge}
                        </Badge>

                        {/* Steam effect for coffee cups */}
                        {coffee.image === "☕" && (
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                            {[...Array(2)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-0.5 h-4 bg-gradient-to-t from-transparent via-gray-400 to-transparent rounded-full opacity-40"
                                style={{ left: `${i * 4}px` }}
                                animate={{
                                  opacity: [0, 0.4, 0],
                                  y: [0, -10],
                                  scale: [1, 1.2, 0.8],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeOut",
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg text-amber-900">
                          {coffee.name}
                        </CardTitle>
                        <CardDescription className="text-amber-700">
                          {coffee.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-emerald-600 mb-4">
                          {coffee.price}
                        </div>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Finely Ground Coffee Beans Section */}
        <ParallaxSection speed={0.3}>
          <section className="py-24 bg-gradient-to-r from-emerald-600 to-emerald-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn>
                  <div className="space-y-6 text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                      <Leaf className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                      Finely ground coffee beans
                    </h2>
                    <p className="text-emerald-100 text-lg leading-relaxed">
                      Our coffee beans are carefully selected from the finest
                      coffee farms around the world. Each batch is roasted to
                      perfection and ground fresh to preserve the rich flavors
                      and aromas that make our coffee exceptional.
                    </p>
                    <div className="flex gap-4">
                      <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                        Shop Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white/10"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="right">
                  <div className="relative">
                    <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm p-8 flex items-center justify-center">
                      <div className="text-8xl">🫘</div>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -left-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ☕
                    </motion.div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Brewing Equipment Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Brewing Equipment
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From French press to espresso machines, find the perfect brewing
                equipment for your coffee journey.
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Coffee Grinder",
                  price: "£189.00",
                  image: "⚙️",
                },
                {
                  name: "Espresso Machine",
                  price: "£899.00",
                  image: "☕",
                },
                {
                  name: "Coffee Scale",
                  price: "£89.00",
                  image: "⚖️",
                },
              ].map((equipment, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <div className="text-8xl">{equipment.image}</div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-gray-900">
                          {equipment.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-emerald-600 mb-4">
                          {equipment.price}
                        </div>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Perfect Coffee Roast Section */}
        <ParallaxSection speed={0.2}>
          <section className="py-24 bg-white">
            <div className="container container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-8xl">
                        ☕
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                      <Award className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                      Choose for your perfect coffee roast
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Every coffee bean tells a story. Our master roasters
                      carefully craft each blend to bring out the unique
                      characteristics of every origin, creating the perfect
                      balance of flavor, aroma, and body.
                    </p>
                    <div className="flex gap-4">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Explore Roasts
                      </Button>
                      <Button
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Articles Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Our Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover coffee culture, brewing tips, and stories from our
                coffee experts.
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "The Art of Coffee Brewing",
                  excerpt:
                    "Master the perfect brewing technique for your morning cup",
                  date: "Mar 15",
                  image: "☕",
                },
                {
                  title: "Single Origin vs Blends",
                  excerpt:
                    "Understanding the difference and when to choose each",
                  date: "Mar 12",
                  image: "🫘",
                },
                {
                  title: "Coffee Tasting Notes",
                  excerpt: "How to identify flavors and develop your palate",
                  date: "Mar 10",
                  image: "👃",
                },
              ].map((article, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                      <div className="aspect-video bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center">
                        <div className="text-6xl">{article.image}</div>
                        <Badge className="absolute top-3 left-3 bg-emerald-600 text-white">
                          {article.date}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-900">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-700"
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-emerald-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="relative">
                  <div className="aspect-square bg-emerald-500 rounded-full p-8 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <div className="text-6xl">☕</div>
                    </div>
                  </div>
                  {/* Coffee beans decoration */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full"></div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-6 text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Do you like the theme? Share with your friends!
                  </h2>
                  <p className="text-emerald-100 text-lg">
                    Stay updated with our latest coffee arrivals, brewing tips,
                    and exclusive offers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                      Sign Up
                    </Button>
                  </div>
                  <p className="text-sm text-emerald-200">
                    We'll send a confirmation with our Privacy Policy
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </AppProviders>
  );
}
