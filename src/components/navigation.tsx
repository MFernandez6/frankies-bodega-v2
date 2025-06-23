"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/frankie.jpg"
                alt="Frankie"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                Frankie&apos;s Bodega
              </h1>
              <p className="text-xs text-amber-600 hidden sm:block">
                Your neighborhood store
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              Sign In
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-amber-100 bg-white"
          >
            <div className="py-4 space-y-4">
              <a
                href="#home"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
              >
                Products
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
              >
                Contact
              </a>
              <div className="px-4 pt-4 border-t border-amber-100 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
