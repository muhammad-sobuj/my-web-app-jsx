"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Coffee,
  Phone,
  MapPin,
  Clock,
  Send,
  Heart,
  Award,
  Leaf,
  Users,
  ArrowUp,
  ChevronRight,
  LucideFacebook,
  X,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const currentYear = new Date().getFullYear();

  // Generate stable random positions for background elements
  const backgroundElements = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: (i * 37 + 23) % 100, // Pseudo-random but stable
      top: (i * 47 + 17) % 100,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4,
    }));
  }, []);

  const floatingBeans = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: 20 + i * 20,
      top: 20 + (i % 2) * 40,
      duration: 8 + i * 2,
    }));
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    // Simulate newsletter subscription
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
    setIsSubscribing(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    shop: [
      { name: "Coffee Beans", href: "/items" },
      { name: "Equipment", href: "/equipment" },
      { name: "Accessories", href: "/items" },
      { name: "Gift Cards", href: "#" },
      { name: "Subscriptions", href: "#" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Sustainability", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/contact" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Size Guide", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "",
      color: "hover:text-pink-400",
      icon: <Instagram size={24} />,
    },
    {
      name: "Twitter",
      href: "#",
      color: "hover:text-blue-400",
      icon: <X size={24} />,
    },
    {
      name: "Facebook",
      href: "#",
      color: "hover:text-blue-600",
      icon: <LucideFacebook size={24} />,
    },
    {
      name: "YouTube",
      href: "#",
      color: "hover:text-red-500",
      icon: <Youtube size={24} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-700",
      icon: <Linkedin size={24} />,
    },
  ];

  const achievements = [
    { icon: Award, text: "Award Winning Coffee" },
    { icon: Leaf, text: "100% Sustainable" },
    { icon: Users, text: "10K+ Happy Customers" },
    { icon: Heart, text: "Made with Love" },
  ];

  return (
    <footer className="relative bg-linear-to-br from-amber-900 via-amber-800 to-amber-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 ">
        <div className="absolute top-0 left-0 w-full h-full">
          {backgroundElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-2 h-2 bg-amber-200 rounded-full"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingBeans.map((bean) => (
          <motion.div
            key={bean.id}
            className="absolute text-6xl opacity-5"
            style={{
              left: `${bean.left}%`,
              top: `${bean.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
            }}
            transition={{
              duration: bean.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ☕
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto  relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-5 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Coffee className="h-10 w-10 text-emerald-400" />
                </motion.div>
                <span className="font-bold text-2xl text-white">
                  CoffeeShop
                </span>
              </div>
              <p className="text-amber-100 leading-relaxed text-lg">
                Crafting exceptional coffee experiences since 2015. From bean to
                cup, we&apos;re passionate about delivering the perfect brew
                that brings people together.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, achievementIndex) => (
                <motion.div
                  key={achievementIndex}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <achievement.icon className="h-5 w-5 text-emerald-400" />
                  <span className="text-white text-sm font-medium">
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-white text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, socialIndex) => (
                  <motion.div
                    key={socialIndex}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      className={`flex items-center justify-center w-12 h-12 bg-white/10 rounded-full text-white transition-all duration-300 ${social.color} hover:bg-white/20 backdrop-blur-sm`}
                      aria-label={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg text-white">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-amber-100 hover:text-emerald-400 transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mr-1" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-amber-100 hover:text-emerald-400 transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mr-1" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-amber-100 hover:text-emerald-400 transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mr-1" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
        >
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="font-bold text-2xl text-white mb-2">
                Stay Caffeinated with Our Newsletter
              </h3>
              <p className="text-amber-100">
                Get the latest coffee news, brewing tips, and exclusive offers
                delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-emerald-400"
                required
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg text-white px-6"
              >
                {isSubscribing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Coffee className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Experience Great Coffee?
              </motion.h3>
              <motion.p
                className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join thousands of coffee lovers who trust us for their daily
                brew. Discover premium beans, expert equipment, and exceptional
                service.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/items"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold text-lg rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[200px]"
                >
                  <Coffee className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Shop Coffee
                  <div className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[200px]"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Contact Us
                  <div className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-amber-100">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Award Winning</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-100">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">
                  10K+ Happy Customers
                </span>
              </div>
              <div className="flex items-center space-x-2 text-amber-100">
                <Leaf className="h-5 w-5" />
                <span className="text-sm font-medium">100% Sustainable</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-100">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Made with Love</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
            <MapPin className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-1">Visit Our Café</h4>
              <p className="text-amber-100 text-sm">
                Sharif Osman Bin Hadi Street
                <br />
                Dhaka District
                <br />
                Seattle, WA 98101
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
            <Phone className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-1">Call Us</h4>
              <p className="text-amber-100 text-sm">
                Main: (+088) 13685475875-BREW
                <br />
                Orders: (+088) 13685475876-ORDER
                <br />
                Support: (+088) 13685475877-HELP
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
            <Clock className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-1">Store Hours</h4>
              <p className="text-amber-100 text-sm">
                Mon-Fri: 6:00 AM - 8:00 PM
                <br />
                Saturday: 7:00 AM - 9:00 PM
                <br />
                Sunday: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="text-amber-100 text-sm mb-2">
                © {currentYear} CoffeeShop. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-amber-100 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white hover:shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
