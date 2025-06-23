"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/frankie.jpg"
                  alt="Frankie"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Frankie&apos;s Bodega</h3>
                <p className="text-amber-400 text-sm">
                  Your neighborhood store
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Bringing the warmth and convenience of a neighborhood bodega to
              your doorstep, with the enthusiasm of a golden retriever.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#delivery"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Delivery Info
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-amber-400">
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#help"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-amber-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">
                  123 Bodega Street, Neighborhood, NY
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">hello@frankiesbodega.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Frankie&apos;s Bodega. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a
                href="#privacy"
                className="hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by Frankie</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
