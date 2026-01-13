"use client";

import { useState } from "react";
import Link from "next/link";
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
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  HelpCircle,
  ShoppingBag,
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
import { toast } from "sonner";
import { ButtonSpinner } from "@/components/ui/loading-spinner";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Our Café",
    details: ["123 Coffee Street", "Downtown District", "Seattle, WA 98101"],
    action: "Get Directions",
    link: "https://maps.google.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: [
      "Main: (555) 123-BREW",
      "Orders: (555) 123-ORDER",
      "Support: (555) 123-HELP",
    ],
    action: "Call Now",
    link: "tel:+15551234273",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: [
      "hello@coffeeshop.com",
      "orders@coffeeshop.com",
      "support@coffeeshop.com",
    ],
    action: "Send Email",
    link: "mailto:hello@coffeeshop.com",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Store Hours",
    details: [
      "Mon-Fri: 6:00 AM - 8:00 PM",
      "Saturday: 7:00 AM - 9:00 PM",
      "Sunday: 8:00 AM - 6:00 PM",
    ],
    action: "View Calendar",
    link: "#hours",
  },
];

const inquiryTypes = [
  "General Question",
  "Product Information",
  "Order Support",
  "Equipment Help",
  "Wholesale Inquiry",
  "Partnership Opportunity",
  "Feedback & Suggestions",
  "Technical Support",
];

const faqs = [
  {
    question: "What are your shipping options?",
    answer:
      "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, and express shipping is available for next-day delivery.",
  },
  {
    question: "How do you ensure coffee freshness?",
    answer:
      "All our coffee is roasted to order and shipped within 24 hours of roasting. We use one-way valve bags to maintain freshness during shipping.",
  },
  {
    question: "Do you offer coffee subscriptions?",
    answer:
      "Yes! Our subscription service delivers fresh coffee monthly, bi-weekly, or weekly. You can customize your preferences and pause anytime.",
  },
  {
    question: "Can I visit your roastery?",
    answer:
      "Absolutely! We offer roastery tours every Saturday at 10 AM and 2 PM. Please call ahead to reserve your spot.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="container mx-auto  relative z-10">
            <FadeIn className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-coffee-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-amber-700 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                We'd love to hear from you! Whether you have questions about our
                coffee, need support, or want to share feedback, we're here to
                help.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <MagneticButton className="bg-emerald-gradient text-white px-8 py-4 flex justify-center items-center text-lg font-semibold hover-glow">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Message
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
                  asChild
                >
                  <Link className="flex justify-center items-center" href="/about">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Link>
                </MagneticButton>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container container mx-auto ">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Contact Information
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Multiple ways to reach us - choose what works best for you
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="hover-lift"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-cream-gradient">
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          className="w-16 h-16 bg-emerald-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          {info.icon}
                        </motion.div>
                        <CardTitle className="text-xl text-amber-900">
                          {info.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center space-y-3">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-amber-700 text-sm">
                            {detail}
                          </p>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                          asChild
                        >
                          <Link className="flex justify-center items-center" href={info.link}>
                            {info.action}
                            <ArrowRight className="ml-2 h-6 w-6" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-coffee-shop-gradient">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <FadeIn>
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center space-x-2 text-coffee-gradient">
                      <Send className="h-6 w-6" />
                      <span>Send Us a Message</span>
                    </CardTitle>
                    <CardDescription className="text-amber-700">
                      Fill out the form below and we'll get back to you within
                      24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                              className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                              className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                              className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                              className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                            value={formData.inquiryType}
                            onValueChange={(value) =>
                              handleInputChange("inquiryType", value)
                            }
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                            className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                          id="subject"
                          placeholder="Brief description of your inquiry"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                         className="w-full text-gray-500 pl-12 pr-4 py-3 border-2 border-amber-200 bg-white rounded-lg focus:outline-none "
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-emerald-gradient hover:shadow-lg text-white hover-glow"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <ButtonSpinner className="mr-2" />
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Map & Additional Info */}
              <FadeIn>
                <div className="space-y-6">
                  {/* Map Placeholder */}
                  <Card className="border-0 shadow-xl bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-coffee-gradient">
                        <MapPin className="h-5 w-5" />
                        <span>Find Us</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-cream-gradient rounded-lg flex items-center justify-center border-2 border-dashed border-amber-300">
                        <div className="text-center text-amber-700">
                          <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p className="font-semibold">Interactive Map</p>
                          <p className="text-sm">
                            Sharif Osman Bin Hadi  Street, Seattle, Dhaka Bangladesh 
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2 text-amber-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">
                            Free parking available
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-amber-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">Wheelchair accessible</span>
                        </div>
                        <div className="flex items-center space-x-2 text-amber-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm">Public transit nearby</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="border-0 shadow-xl bg-white">
                    <CardHeader>
                      <CardTitle className="text-coffee-gradient">
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                        asChild
                      >
                        <Link href="/items">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Browse Coffee Collection
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                        asChild
                      >
                        <Link href="/equipment">
                          <Coffee className="mr-2 h-4 w-4" />
                          View Equipment
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                        asChild
                      >
                        <Link href="/about">
                          <Users className="mr-2 h-4 w-4" />
                          Learn About Us
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-gradient mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Quick answers to common questions
              </p>
            </FadeIn>

            <StaggerContainer className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 bg-cream-gradient rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <HelpCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-amber-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-amber-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
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
                Ready to Experience Great Coffee?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Visit our café, browse our online collection, or get in touch
                with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  className="bg-white text-emerald-600 hover:bg-cream-gradient px-8 py-4 text-lg font-semibold hover-lift"
                  asChild
                >
                  <Link className="flex justify-center items-center" href="/items">
                    Shop Now
                    <ShoppingBag className="ml-2 h-6 w-6" />
                  </Link>
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white flex justify-center items-center hover:text-emerald-600 px-8 py-3 text-lg font-semibold hover-lift"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Call Us Now
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </AppProviders>
  );
}
