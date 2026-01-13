"use client";

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
  Coffee,
  Heart,
  Users,
  Award,
  Globe,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { FadeIn } from "@/components/animated/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/stagger-container";
import { MagneticButton } from "@/components/animated/magnetic-button";
import { AppProviders } from "@/components/app-providers";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Head Roaster",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    bio: "With 15 years of experience in coffee roasting, Sarah founded CoffeeShop with a vision to bring exceptional coffee to everyone.",
    specialties: [
      "Single Origin Roasting",
      "Flavor Profiling",
      "Sustainable Sourcing",
    ],
  },
  {
    name: "Michael Chen",
    role: "Master Barista & Training Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Michael is a certified Q Grader and World Barista Championship finalist, leading our barista training programs.",
    specialties: ["Espresso Extraction", "Latte Art", "Barista Training"],
  },
  {
    name: "Emma Rodriguez",
    role: "Sustainability Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Emma ensures our coffee sourcing supports farmers and communities while maintaining environmental responsibility.",
    specialties: ["Fair Trade", "Environmental Impact", "Farmer Relations"],
  },
  {
    name: "David Kim",
    role: "Equipment Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "David curates our equipment selection and provides technical support to help customers achieve the perfect brew.",
    specialties: [
      "Equipment Maintenance",
      "Brewing Techniques",
      "Technical Support",
    ],
  },
];

const values = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Passion for Quality",
    description:
      "Every bean is carefully selected and roasted to perfection, ensuring exceptional quality in every cup.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-500" />,
    title: "Sustainability First",
    description:
      "We're committed to ethical sourcing, environmental responsibility, and supporting coffee farming communities.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Community Focus",
    description:
      "Building connections through coffee, from our local community to coffee farmers around the world.",
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    title: "Excellence in Craft",
    description:
      "Continuous learning and innovation in roasting, brewing, and coffee education.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "CoffeeShop Founded",
    description:
      "Started as a small roastery with a passion for exceptional coffee",
  },
  {
    year: "2017",
    title: "First Retail Location",
    description:
      "Opened our flagship café in downtown, serving the local community",
  },
  {
    year: "2019",
    title: "Direct Trade Partnerships",
    description:
      "Established direct relationships with coffee farmers in Ethiopia and Colombia",
  },
  {
    year: "2021",
    title: "Online Store Launch",
    description:
      "Expanded to serve coffee lovers nationwide with our e-commerce platform",
  },
  {
    year: "2023",
    title: "Sustainability Certification",
    description:
      "Achieved B-Corp certification for our commitment to social and environmental responsibility",
  },
  {
    year: "2024",
    title: "Equipment Division",
    description: "Launched professional equipment sales and training programs",
  },
];

export default function AboutPage() {
  return (
    <AppProviders>
      <div className="flex flex-col ">
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
                Our Story
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-amber-700 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                From a small roastery to a community of coffee lovers, discover
                the passion and dedication behind every cup we serve.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <MagneticButton
                  className="bg-emerald-gradient text-white px-8 py-4 text-lg font-semibold hover-glow"
                  asChild
                >
                  <Link className="flex justify-center items-center" href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
                  asChild
                >
                  <Link className="flex justify-center items-center" href="/items">
                    <Coffee className="mr-2 h-6 w-6" />
                    Shop Coffee
                  </Link>
                </MagneticButton>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto">
            <FadeIn className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                At CoffeeShop, we believe that great coffee has the power to
                bring people together, inspire conversations, and create moments
                of joy. Our mission is to source, roast, and serve exceptional
                coffee while supporting the communities that make it possible.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-cream-gradient rounded-lg shadow-lg"
                >
                  <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Global Sourcing
                  </h3>
                  <p className="text-amber-700">
                    Direct partnerships with farmers worldwide for the finest
                    beans
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-cream-gradient rounded-lg shadow-lg"
                >
                  <Coffee className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Expert Roasting
                  </h3>
                  <p className="text-amber-700">
                    Artisanal roasting techniques that highlight each bean's
                    unique character
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-cream-gradient rounded-lg shadow-lg"
                >
                  <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Community Impact
                  </h3>
                  <p className="text-amber-700">
                    Supporting local communities and sustainable farming
                    practices
                  </p>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-coffee-shop-gradient">
          <div className="container mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Our Values
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
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
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-amber-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Meet Our Team
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                The passionate people behind your perfect cup
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="text-center hover-lift"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-cream-gradient">
                      <CardHeader className="pb-4">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="128px"
                            className="object-cover rounded-full border-4 border-emerald-600"
                          />
                        </div>
                        <CardTitle className="text-xl text-amber-900">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-emerald-600 font-semibold">
                          {member.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-amber-700 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-amber-900 text-sm">
                            Specialties:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {member.specialties.map((specialty, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs border-emerald-600 text-emerald-700"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-coffee-shop-gradient">
          <div className="container mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Our Journey
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Key milestones in our coffee story
              </p>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="space-y-8">
                {milestones.map((milestone, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="shrink-0">
                        <div className="w-16 h-16 bg-emerald-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-amber-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                      <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                By the Numbers
              </h2>
              <p className="text-amber-700 text-lg">
                Our impact in the coffee community
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "50+",
                  label: "Coffee Origins",
                  icon: <Globe className="h-8 w-8" />,
                },
                {
                  number: "10K+",
                  label: "Happy Customers",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  number: "25+",
                  label: "Farmer Partners",
                  icon: <Heart className="h-8 w-8" />,
                },
                {
                  number: "9",
                  label: "Years of Excellence",
                  icon: <Award className="h-8 w-8" />,
                },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-center p-6 bg-cream-gradient rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="text-emerald-600 mb-4"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-3xl font-bold text-coffee-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-amber-700 font-semibold">
                      {stat.label}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-gradient text-white">
          <div className="container mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Coffee Community
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Experience the passion, quality, and community that makes
                CoffeeShop special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  className="bg-white text-emerald-600 hover:bg-cream-gradient px-8 py-4 text-lg font-semibold hover-lift"
                  asChild
                >
                  <Link className="flex justify-center items-center" href="/items">
                    Shop Coffee
                    <Coffee className="ml-2 h-6 w-6" />
                  </Link>
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold hover-lift"
                  asChild
                >
                  <Link className="flex justify-center items-center" href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </AppProviders>
  );
}
